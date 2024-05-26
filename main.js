const searchEngines = {
    youtube: {
        searchUrl: "https://www.youtube.com/results?search_query=",
        homeUrl: "https://www.youtube.com/"
    },
    github: {
        searchUrl: "https://github.com/search?q=",
        homeUrl: "https://github.com/"
    },
    gcal: {
        searchUrl: "https://calendar.google.com/calendar/u/0/r/search?q=",
        homeUrl: "https://calendar.google.com/calendar/u/0/"
    },
    gmail: {
        searchUrl: "https://mail.google.com/mail/u/0/#search/",
        homeUrl: "https://mail.google.com/mail/u/0/"
    },
    gmaps: {
        searchUrl: "https://maps.google.com/maps?q=",
        homeUrl: "https://maps.google.com/"
    },
    twitter: {
        searchUrl: "https://x.com/search?q=",
        homeUrl: "https://x.com/"
    },
    reddit: {
        searchUrl: (query) => {
            const isSubreddit = query.startsWith("r/");
            const encodedQuery = isSubreddit ? query : encodeURIComponent(query);
            return isSubreddit ? `https://www.reddit.com/${encodedQuery}` : `https://www.reddit.com/search?q=${encodedQuery}`;
        },
        homeUrl: "https://www.reddit.com/"
    },
    lastfm: {
        searchUrl: "https://www.last.fm/search?q=",
        homeUrl: "https://www.last.fm/"
    },
    chatgpt: {
        searchUrl: "https://chatgpt.com/?q=",
        homeUrl: "https://chatgpt.com/"
    },
    weather: {
        searchUrl: "https://www.accuweather.com/en/search-locations?query=",
        homeUrl: "https://www.accuweather.com/"
    },
    claude: {
        searchUrl: "https://claude.ai/chats",
        homeUrl: "https://claude.ai/chats"
    },
    duckduckgo: {
        searchUrl: "https://duckduckgo.com/?q=",
        homeUrl: "https://duckduckgo.com/"
    },
    duckduckgoAI: {
        searchUrl: "https://duckduckgo.com/?ia=chat&q=",
        homeUrl: "https://duckduckgo.com/?q=DuckDuckGo&ia=chat",
        copyQuery: true
    }
};

function performSearch(engine) {
    const query = document.getElementById('textbox').value;
    let searchUrl;

    if (query.trim() === '') {
        searchUrl = searchEngines[engine].homeUrl || searchEngines[engine];
    } else {
        searchUrl = typeof searchEngines[engine].searchUrl === 'function'
            ? searchEngines[engine].searchUrl(query)
            : searchEngines[engine].searchUrl + encodeURIComponent(query);

        if (searchEngines[engine].copyQuery) {
            copyToClipboard(query);
        }
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