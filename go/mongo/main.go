package main

import (
	"context"
	"fmt"
	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"net/http"
	"strconv"
)

var collection *mongo.Collection

func getOneAddress(w http.ResponseWriter, r *http.Request) {
	if collection == nil {
		client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI("mongodb://mongo:27017"))
		if err != nil {
			panic(err)
		}
		collection = client.Database("addresses").Collection("personAddress")
	}

	personId := mux.Vars(r)["id"]
	w.Header().Set("Content-Type", "application/json")
	parsedPersonId, err := strconv.Atoi(personId)
	filter := bson.D{{"_id", parsedPersonId}}
	if err != nil {
		panic(err)
	}
	raws, err := collection.FindOne(context.TODO(), filter).DecodeBytes()
	if err != nil {
		fmt.Println("error serving personId ", parsedPersonId)
		panic(err)
	}
	fmt.Println(w, raws.String())
	fmt.Fprintln(w, raws)
	//fmt.Fprintf(w, "{ \"id\": \""+personId+"\" }")
}

func main() {
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/address/{id}", getOneAddress).Methods("GET")
	log.Fatal(http.ListenAndServe(":10005", router))
}
