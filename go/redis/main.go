package main

import (
	"fmt"
	"github.com/go-redis/redis"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

var client *redis.Client = redis.NewClient(&redis.Options{
	Addr:     "redis:6379",
	Password: "", // no password set
	DB:       0,  // use default DB
})

func getOneAddress(w http.ResponseWriter, r *http.Request) {
	personId := mux.Vars(r)["id"]
	w.Header().Set("Content-Type", "application/json")
	val, err := client.Get(personId).Result()
	if err != nil {
		panic(err)
	}
	fmt.Fprintf(w, val)
	//fmt.Fprintf(w, "{ \"id\": \""+personId+"\" }")
}

func main() {
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/address/{id}", getOneAddress).Methods("GET")
	log.Fatal(http.ListenAndServe(":10004", router))
}
