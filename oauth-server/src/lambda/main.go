package main

import (
	"log"
	"os"
	"net/http"
	"encoding/json"
	"bytes"
	"io/ioutil"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/joho/godotenv"
)

func handler() (string, error) {
	http.Handle("/get-token", http.HandlerFunc(func (w http.ResponseWriter, r *http.Request) {
		(w).Header().Set("Access-Control-Allow-Origin", "*")

		if (r.Method != "GET") {
			http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
		}

		code := r.URL.Query().Get("code")
		
		body := map[string]interface{}{
			"client_id": os.Getenv("OAUTH_CLIENT_ID"),
			"client_secret": os.Getenv("OAUTH_CLIENT_SECRET"),
			"redirect_uri": os.Getenv("OAUTH_REDIRECT_URI"),
			"grant_type": os.Getenv("OAUTH_GRANT_TYPE"),
			"code": code,
		}

		marshalledBody, err := json.Marshal(body)
		if err != nil {
			http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
		}

		resp, err := http.Post(os.Getenv("INATURALIST_URI") + "/oauth/token", "application/json", bytes.NewBuffer(marshalledBody))
		if err != nil {
			http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
		}
		defer resp.Body.Close()

		respBody, err := ioutil.ReadAll(resp.Body)

		w.WriteHeader(200)
    w.Header().Set("Content-Type", "application/json")
    w.Write(respBody)
	}))


	http.Handle("/get-me", http.HandlerFunc(func (w http.ResponseWriter, r *http.Request) {
		(w).Header().Set("Access-Control-Allow-Origin", "*")

		if (r.Method != "GET") {
			http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
		}

		client := &http.Client{}

		accessToken := r.URL.Query().Get("accessToken")

		req, err := http.NewRequest("GET", os.Getenv("INATURALIST_URI") + "/users/edit", nil)
		if err != nil {
			http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
		}
    req.Header.Add("Authorization","Bearer " + accessToken)
    req.Header.Add("Accept", "application/json")

		resp, err := client.Do(req)
		if err != nil {
			http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
		}
		defer resp.Body.Close()

		respBody, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			http.Error(w, http.StatusText(http.StatusNotFound), http.StatusNotFound)
		}

		w.WriteHeader(200)
    w.Header().Set("Content-Type", "application/json")
    w.Write(respBody)
	}))

	log.Println("Now server is running on port 3000")
	http.ListenAndServe(":3000", nil)
	return "Ok", nil
}

func main() {
	// Make the handler available for Remote Procedure Call by AWS Lambda
	err := godotenv.Load()
  if err != nil {
    log.Fatal("Error loading .env file")
	}
	
	if os.Getenv("GO_ENV") == "development" {
		handler()
	} else {
		lambda.Start(handler)
	}
}