let currentLocation;

const locations = [
  {
    name:"Google",
    location:"https://google.com/((search?q=QQQ))"
  },
  {
    name:"Twitter",
    location:"https://twitter.com/((search?q=QQQ))"
  },
  {
    name:"Reddit",
    location:"https://www.reddit.com/((search?q=QQQ))"
  },
  { 
    name:"Stackoverflow",
    location:"https://stackoverflow.com/((search?q=QQQ))"
  },
  {
    name:"GitHub",
    location:"https://github.com/((search?q=QQQ))"
  }
];

const search = () => {
  const input = document.getElementById('textbox').value;
  const matches = locations[currentLocation].location.match(/(.+)\({2}(.+)\){2}/);
  if (/\S/.test(input)) {
    location = matches[1] + matches[2].replace("QQQ", encodeURIComponent(input));
  }
  else {
    location = matches[1];
  }
};

const start = () =>{
  currentLocation = 0;
      
  locations.forEach(loc=>{
    const node = document.createElement("button");
    const textnode = document.createTextNode(loc.name);
    node.classList.add("buttonstyle");
    node.onclick = new Function(`currentLocation = ${locations.indexOf(loc)}; search()`);
    node.appendChild(textnode);
    document.getElementById("buttons").appendChild(node);
  });
};

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
