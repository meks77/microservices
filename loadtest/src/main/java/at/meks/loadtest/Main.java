package at.meks.loadtest;


import com.google.api.client.http.GenericUrl;
import com.google.api.client.http.HttpRequest;
import com.google.api.client.http.HttpRequestFactory;
import com.google.api.client.http.HttpResponse;
import com.google.api.client.http.javanet.NetHttpTransport;
import picocli.CommandLine;

import java.io.IOException;
import java.text.NumberFormat;
import java.util.Random;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicLong;
import java.util.function.Consumer;
import java.util.stream.IntStream;

@CommandLine.Command(name = "test")
public class Main implements Callable<Integer> {

    @CommandLine.Parameters(index = "0", paramLabel = "url", description = "the url which is requested")
    private String url;

    @CommandLine.Option(names = { "-f", "--random-from"}, required = true,
            description = "the random number begin range replaced in the url the String ${rnd}")
    private int randomFrom;

    @CommandLine.Option(names = { "-t", "--random-to"}, required = true,
            description = "the random number end range replaced in the url the String ${rnd}")
    private int randomTo;

    @CommandLine.Option(names = { "-n", "--request-count"}, required = true,
            description = "how often the url should be requested")
    private int requests;

    @CommandLine.Option(names = { "-c", "--threads"}, defaultValue = "1")
    private int threads;

    private volatile long minDuration = Long.MAX_VALUE;

    private volatile long maxDuration = Long.MIN_VALUE;

    private AtomicLong durationSum = new AtomicLong();

    private volatile Random rnd = new Random();

    public static void main(String[] args) {
        new CommandLine(new Main()).execute(args);
    }

    @Override
    public Integer call() throws Exception {
        System.out.println("url: " + url);
        System.out.println("randomFrom: " + randomFrom);
        System.out.println("randomTo: " + randomTo);
        System.out.println("requests: " + requests);

        ExecutorService executorService = Executors.newFixedThreadPool(threads);
        long start = System.currentTimeMillis();
        IntStream.range(0, requests).forEach(index -> executorService.submit(() -> monitor(this::doHttpRequest)));
        executorService.shutdown();
        executorService.awaitTermination(1, TimeUnit.HOURS);
        long end = System.currentTimeMillis();
        System.out.println("finished requests: " + requests);
        System.out.println("duration(s): " + ((end -start) / 1000.0));
        NumberFormat integerFormat = NumberFormat.getIntegerInstance();
        integerFormat.setGroupingUsed(true);
        System.out.println("min duration(nano): " + integerFormat.format(minDuration));
        System.out.println("max duration(nano): " + integerFormat.format(maxDuration));
        System.out.println("avg duration(nano): " + integerFormat.format(durationSum.get() / (double) requests));
        System.out.println("requests/second): " + integerFormat.format(requests / ((end - start) / 1000.0)));
        return 0;
    }

    private void monitor(Consumer<String> runnable) {
        String requestUrl = url.replace("${rnd}", String.valueOf(rnd.nextInt(randomTo - randomFrom) + randomFrom));
        long begin = System.nanoTime();
        try {
            runnable.accept(requestUrl);
        } catch (Exception e) {
            e.printStackTrace();
        }
        long end = System.nanoTime();
        long duration = end - begin;
        durationSum.addAndGet(duration);
        if (minDuration > duration) minDuration = duration;
        if (maxDuration < duration) maxDuration = duration;
    }

    private void doHttpRequest(String url) {
        HttpRequestFactory requestFactory = new NetHttpTransport().createRequestFactory();
        try {
            HttpRequest request = requestFactory.buildGetRequest(new GenericUrl(url));
            HttpResponse response = request.execute();
            try {
                if (!response.isSuccessStatusCode()) {
                    System.out.println("request ends with error " + response.getStatusCode());
                }
            } finally {
                response.disconnect();
            }
        } catch (IOException e) {
            throw new IllegalStateException(e);
        }
    }
}
