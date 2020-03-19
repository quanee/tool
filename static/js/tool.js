window.onload = function () {
    var hour_opts = `<input class="selectopt" name="hour" type="radio" id="hour_opt0" checked>
  <label for="hour_opt0" class="option">00</label>`;
    // `<option value="0" selected="selected">`+`0`.padStart(2, "0")+`</option>`;
    for (var i = 1; i < 24; i++) {
        hour_opts += `<input class="selectopt" name="hour" type="radio" id="hour_opt` + i.toString() + `">
  <label for="hour_opt` + i.toString() + `" class="option">` + i.toString().padStart(2, "0") + `</label>`;
        // res += `<option value="`+i.toString()+`">`+i.toString().padStart(2, "0")+`</option>`
    }
    document.getElementById("select_hour").innerHTML = hour_opts;

    var minute_opts = `<input class="selectopt" name="minute" type="radio" id="minute_opt0" checked>
  <label for="minute_opt0" class="option">00</label>`;
    for (var i = 1; i < 60; i++) {
        minute_opts += `<input class="selectopt" name="minute" type="radio" id="minute_opt` + i.toString() + `">
  <label for="minute_opt` + i.toString() + `" class="option">` + i.toString().padStart(2, "0") + `</label>`;
    }
    document.getElementById("select_minute").innerHTML = minute_opts;

    var second_opts = `<input class="selectopt" name="second" type="radio" id="second_opt0" checked>
  <label for="second_opt0" class="option">00</label>`;
    for (var i = 1; i < 60; i++) {
        second_opts += `<input class="selectopt" name="second" type="radio" id="second_opt` + i.toString() + `">
  <label for="second_opt` + i.toString() + `" class="option">` + i.toString().padStart(2, "0") + `</label>`;
    }
    document.getElementById("select_second").innerHTML = second_opts;
};

async function timer(countSec) {
    var curhour = Math.floor(countSec / 3600);
    var curminute = Math.floor(countSec / 60 % 60);
    var cursecond = Math.floor(countSec % 60);
    document.getElementById("full_time_hour").innerHTML = Math.floor(countSec / 3600).toString().padStart(2, "0");
    document.getElementById("full_time_minute").innerHTML = Math.floor(countSec / 60 % 60).toString().padStart(2, "0");
    document.getElementById("full_time_second").innerHTML = Math.floor(countSec % 60).toString().padStart(2, "0");
    while (true) {
        if (curhour !== Math.floor(countSec / 3600)) {
            document.getElementById("full_time_hour").innerHTML = Math.floor(countSec / 3600).toString().padStart(2, "0");
            curhour = Math.floor(countSec / 3600);
        }
        if (curminute !== Math.floor(countSec / 60 % 60)) {
            document.getElementById("full_time_minute").innerHTML = Math.floor(countSec / 60 % 60).toString().padStart(2, "0");
            curminute = Math.floor(countSec / 60 % 60);
        }
        if (cursecond !== Math.floor(countSec % 60)) {
            document.getElementById("full_time_second").innerHTML = Math.floor(countSec % 60).toString().padStart(2, "0");
            cursecond = Math.floor(countSec % 60);
        }
        if (countSec === 0) {
            break;
        }
        await (new Promise((resolve) => {
            countSec--;
            setTimeout(resolve, 1000);
        }))
    }
}

function start() {
    var hour = 0, minute = 0, second = 0;
    for (i = 0; i < document.getElementById("select_hour").getElementsByTagName("input").length; i++) {
        if (document.getElementById("select_hour").getElementsByTagName("input")[i].checked) {
            hour = i
        }
    }
    for (i = 0; i < document.getElementById("select_minute").getElementsByTagName("input").length; i++) {
        if (document.getElementById("select_minute").getElementsByTagName("input")[i].checked) {
            minute = i
        }
    }
    for (i = 0; i < document.getElementById("select_second").getElementsByTagName("input").length; i++) {
        if (document.getElementById("select_second").getElementsByTagName("input")[i].checked) {
            second = i
        }
    }
    timer(hour * 3600 + minute * 60 + second).then(r => {
        document.getElementById("body").style.background = "rgba(0, 255, 100, 1)";
        document.getElementsByTagName("label").style.background = "rgba(0, 255, 100, 1)"
    })
}

function secToTime(countSec) {
    return [Math.floor(countSec / 3600), Math.floor(countSec / 60 % 60), Math.floor(countSec % 60)].join(":");
}
