var getLocation = "https://www.google.com/search?q="

function yt(){
    getLocation = 'https://www.youtube.com/search?q=';
    location = getLocation + encodeURIComponent(document.getElementById('textbox').value);
}

function google(){
    getLocation = 'https://www.google.com/search?q=';
    location = getLocation + encodeURIComponent(document.getElementById('textbox').value);
}

function gitH(){
    getLocation = 'https://www.github.com/search?q=';
    location = getLocation + encodeURIComponent(document.getElementById('textbox').value);
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
    else{
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