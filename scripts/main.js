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