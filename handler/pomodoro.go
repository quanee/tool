package handler

import (
	"html/template"
	"log"
	"net/http"
)

func Pomodoro(w http.ResponseWriter, r *http.Request) {
	tpl, err := template.ParseFiles("template/pomodoro.tpl")
	if err != nil {
		log.Print(err)
	}
	data := map[string]string{
		"title": "pomodoro",
	}
	err = tpl.Execute(w, data)
}
