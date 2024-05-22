const searchEngines = {
    youtube: "https://www.youtube.com/results?search_query=",
    github: "https://github.com/search?q=",
    gcal: "https://calendar.google.com/calendar/u/0/r/search?q=",
    gmail: "https://mail.google.com/mail/u/0/#search/",
    gmaps: "https://maps.google.com/maps?q=",
    twitter: "https://twitter.com/search?q=",
    reddit: (query) => query.startsWith("r/") ? `https://www.reddit.com/${query}` : `https://www.reddit.com/search?q=${query}`,
    lastfm: "https://www.last.fm/search?q=",
    twitch: "https://www.twitch.tv/search?term=",
    weather: "https://www.accuweather.com/en/search-locations?query=",
    gsheets: "https://docs.google.com/spreadsheets/u/0/?q=",
    home: "https://spectrixdev.github.io/",
    duckduckgo: "https://duckduckgo.com/?q=",
    duckduckgoAI: "https://duckduckgo.com/?q="
};

function performSearch(engine) {
    const query = encodeURIComponent(document.getElementById('textbox').value);
    const searchUrl = searchEngines[engine] + query + (engine === 'duckduckgoAI' ? '&ia=chat' : '');
    
    if (engine === 'duckduckgoAI') {
        copyToClipboard(query);
    }
    
    window.location.href = searchUrl;
}

function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let greeting = h < 12 ? "Good morning." : h < 17 ? "Good afternoon." : "Good evening.";
    let m = checkTime(today.getMinutes());
    let s = checkTime(today.getSeconds());

    document.getElementById('clock').innerHTML = `${h}:${m}:${s}`;
    document.getElementById('greetingMsg').innerHTML = greeting;
    setTimeout(startTime, 500);
}

function checkTime(i) {
    return i < 10 ? "0" + i : i;
}
