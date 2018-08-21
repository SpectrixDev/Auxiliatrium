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