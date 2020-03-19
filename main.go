package main

import (
	"github.com/quanee/tool/handler"
	"net/http"
)

func main() {
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))
	http.HandleFunc("/pomodoro", handler.Pomodoro)
	http.HandleFunc("/uuid", handler.UUID)
	http.ListenAndServeTLS(":5999", "server.crt", "server.key", nil)
}
