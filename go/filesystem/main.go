package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"strconv"
	"os"
)

var file *os.File

func checkError(err error) {
  if (err != nil) {
      panic(err)
  }
}

func getOneAddress(w http.ResponseWriter, r *http.Request) {
	if file == nil {
		f, err := os.Open("/opt/microservices/filesystem/dataFile")
		checkError(err)
		file = f
	}

	personId := mux.Vars(r)["id"]
	w.Header().Set("Content-Type", "application/json")
	parsedPersonId, err := strconv.Atoi(personId)
	checkError(err)
	bytes := make([]byte, 118)
    byteCnt, err := file.ReadAt(bytes, int64((parsedPersonId - 1000000000) * 119))
    _ = byteCnt
    checkError(err)
    fmt.Fprintf(w, string(bytes))
}

func main() {
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/address/{id}", getOneAddress).Methods("GET")
	log.Fatal(http.ListenAndServe(":10005", router))
}
