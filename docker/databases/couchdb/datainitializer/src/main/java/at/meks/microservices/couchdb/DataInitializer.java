package at.meks.microservices.couchdb;

import com.google.api.client.http.ByteArrayContent;
import com.google.api.client.http.GenericUrl;
import com.google.api.client.http.HttpRequest;
import com.google.api.client.http.HttpRequestFactory;
import com.google.api.client.http.HttpResponse;
import com.google.api.client.http.javanet.NetHttpTransport;

import java.io.IOException;
import java.time.LocalDateTime;

public class DataInitializer {

    public static void main(String[] args) {
        new DataInitializer().setupData();
    }

    private void setupData() {
        for (int i= 0; i <=8000000; i+=5000) {
            int personId = 1000000000 + i;
            doHttpRequest("http://localhost:5984/addresses/_bulk_docs", personId);
            System.out.println(LocalDateTime.now() + " created "+ (i + 1) + " address");
        }
    }

    private void doHttpRequest(String url, int personId) {
        HttpRequestFactory requestFactory = new NetHttpTransport().createRequestFactory();
        try {
            StringBuilder sb = new StringBuilder();
            sb.append("{\n \"docs\": [ \n");
            for (int i=0; i<5000; i++) {
                int currPersId = personId + i;
                if (i > 0) {
                    sb.append(",\n");
                }
                sb.append("{\n")
                        .append(" \"_id\": \"").append(currPersId).append("\",\n")
                        .append(" \"strasse\": \"Strasse of ").append(currPersId).append("\",\n")
                        .append(" \"plz\": \"plz of ").append(currPersId).append("\",\n")
                        .append(" \"ort\": \"ort of ").append(currPersId).append("\"\n")
                        .append("}");
            }
            sb.append(" ]\n}");
            String content = sb.toString();
            HttpRequest request = requestFactory.buildPostRequest(new GenericUrl(url), ByteArrayContent.fromString("application/json", content));
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
