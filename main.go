package main

import (
	"github.com/quanee/tool/pomodoro"
	"net/http"
)

func main() {
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))
	http.HandleFunc("/pomodoro", pomodoro.Main)
	http.ListenAndServeTLS(":5999", "server.crt", "server.key", nil)
}
