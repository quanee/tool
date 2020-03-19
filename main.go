package main

import (
	"github.com/quanee/tool/pomodoro"
	"net/http"
)

func main() {
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))
	http.HandleFunc("/pomodoro", pomodoro.Main)
	http.ListenAndServe(":5999", nil)
}
