package main

import (
	"flag"
	"fmt"
	"math/rand"
	"net/http"
	"strconv"
	"strings"
	"time"
)

/*
  Why go: Does the same as the loadtest in Java, but:
  Java with 36 Threads needs  ~ 60 - 70 % of the CPU just for the loadtest, while only 30 - 40 % are used by my linux vm
  Using go for 36 parallel requests needs only ~ 6.5 to 9.5 % for the loadtest
*/
import (
	"flag"
	"fmt"
	"math/rand"
	"net/http"
	"strconv"
	"strings"
	"time"
)

func runRequests(core, requests int, url string, durationOfRequests chan time.Duration) {
	var sumDurations time.Duration
	for i := 0; i < requests; i++ {
		//if i % 100 == 0 {
		//	fmt.Println("Thread ", core, " with Request ", i)
		//}
		rndPersonId := rand.Intn(800000) + 1000000000
		replacedUrl := strings.ReplaceAll(url, "$rnd", fmt.Sprintf("%010.f", float64(rndPersonId)))

		before := time.Now()
		resp, err := http.Get(replacedUrl)
		after := time.Now()
		duration := after.Sub(before)
		sumDurations = duration + sumDurations
		if err != nil {
			fmt.Errorf(err.Error())
		} else if resp.StatusCode != 200 {
			fmt.Errorf("http request code was ", resp.StatusCode)
		}
		if err != nil {
			resp.Body.Close()
		}
	}
	durationOfRequests <- sumDurations
}

func main() {
	requestCount := flag.Int("n", 1, "number of requests")
	cores := flag.Int("c", 1, "number of parallel reqeuests")
	flag.Parse()

	url := flag.Arg(0)
	var requestsPerThread = *requestCount / *cores
	var durationSum time.Duration
	begin := time.Now()
	durationSumPerCore := make(chan time.Duration)
	for core := 0; core < *cores; core++ {
		go runRequests(core, requestsPerThread, url, durationSumPerCore)
	}
	for core := 0; core < *cores; core++ {
		durationSum = durationSum + <-durationSumPerCore
	}
	end := time.Now()
	executedRequestCount := requestsPerThread * *cores
	fmt.Println("Requests: ", executedRequestCount)
	durationRequestsInParallel := end.Sub(begin)
	fmt.Println("Duration: ", durationRequestsInParallel)
	avgRequestDurationNanos := durationSum.Nanoseconds() / int64(executedRequestCount)
	requestsPerSecond := float64(executedRequestCount) / float64(durationRequestsInParallel.Seconds())
	fmt.Println("req/sec: ", requestsPerSecond)
	avgDuration, err := time.ParseDuration(strconv.FormatInt(avgRequestDurationNanos, 10) + "ns")
	if err != nil {
		panic(err)
	}
	fmt.Println("Avg request duration: ", avgDuration)

}
