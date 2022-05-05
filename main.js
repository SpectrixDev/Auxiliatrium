// Disclaimer: This code is not exactly very pretty, optimized or thought through much. I was gonna do this in react with typescript but
// it seemed kinda overkill for such a simple program. It was just a quick add on to a project I started when I was 14 xD
// but it is small, compact and gets the job done

var getLocation = "https://google.com/search?q=";

function search(getLocation){
    location = getLocation + encodeURIComponent(document.getElementById('textbox').value) + '&ia=web';
}

function reddit(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://www.reddit.com/"
    }
    else if (txtBoxInput.substring(0, 2) == "r/") {
        location = "https://www.reddit.com/" + document.getElementById('textbox').value;
    }
    else {
        location = "https://www.reddit.com/search?q=" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function gmail(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://mail.google.com/mail/u/0/#inbox";
    }
    else {
        location = "https://mail.google.com/mail/u/0/#search/" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function twitter(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://twitter.com/";
    }
    else {
        location = "https://twitter.com/search?q=" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function github(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://github.com/";
    }
    else {
        location = "https://github.com/search?q=" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function youtube(){ // Thanks to a new update from YouTube I now have to include this
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://youtube.com/";
    }
    else {
        location = "https://www.youtube.com/results?search_query=" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function gcal(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://calendar.google.com/calendar/u/0/r";
    }
    else {
        location = "https://calendar.google.com/calendar/u/0/r/search?q=" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function gmaps() {
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://maps.google.com/";
    }
    else {
        location = "https://maps.google.com/maps?q=" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function lastfm() {
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://www.last.fm/";
    }
    else {
        location = "https://www.last.fm/search?q=" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function twitch() {
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://twitch.tv/";
    }
    else {
        location = "https://www.twitch.tv/search?term=" + document.getElementById('textbox').value;
    }
}

function weather() {
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://accuweather.com/";
    }
    else {
        location = "https://www.accuweather.com/en/search-locations?query=" + encodeURIComponent(document.getElementById('textbox').value);
}
}

function gsheets() {
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://docs.google.com/spreadsheets/u/0/"
    }
    else {
        location = "https://docs.google.com/spreadsheets/u/0/?q=" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function home()
{
    location = "https://spectrixdev.github.io/";
}

function startTime() {
    var today = new Date();
    var greeting;
    var h = today.getHours();
    if(h < 12) {
        greeting = "Good morning.";
    }
    else if(h >= 12 && h < 17) {
        greeting = "Good afternoon.";
    }
    else {
        greeting = "Good evening.";
    }

    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    document.getElementById('greetingMsg').innerHTML = greeting;
    var t = setTimeout(startTime, 500);

}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
