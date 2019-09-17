package main

import (
    "os"
    "fmt"
    "bufio"
)

func checkError(err error) {
  if (err != nil) {
      panic(err)
  }
}

func createDir(path string) {
    err := os.MkdirAll(path, 0644);
    checkError(err)
}

func main() {
    dataDir := "/opt/microservices/filesystem/"
    createDir(dataDir)
    dataFile, err := os.Create(dataDir + "dataFile")
    checkError(err)
    writer := bufio.NewWriter(dataFile)
    for i := 0; i < 8000001; i++ {
          persId :=  fmt.Sprintf("100%07d", i);
          data := fmt.Sprintf("{ \"_id\": \"%v\",  \"strasse\": \"Strasse of %v\",  \"plz\": \"plz of %v\",  \"ort\": \"ort of %v\" }\n", persId, persId, persId, persId)
          writer.WriteString(data)
    }
    writer.Flush()
}