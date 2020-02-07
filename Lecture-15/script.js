//  class=> .myclass
// id=> #myId
// tag=> tagname
// document=> globally available object that's inside your browser
// 
const body = document.querySelector("body");
// crud
// create 
// dom nodes
const h1 = document.createElement("h1");


body.appendChild(h1);
// camel case
h1.textContent = "H1 Element Created Through Js";
h1.style.color = "red";
h1.innerHTML="<h2> some text</h2>"

// document => selector
// generic
// generic selector -> gives first Dom element 
// document.querySelector("h1");
// document.querySelector(".className");
// document.querySelector("#myid");

// // querySelectorAll=> all dom nodes at once (Array)
// document.querySelectorAll(".class");

// // getElementbyTagName=> returns nodelist of given Tag
// document.getElementsByTagName("p");
// //getElementById=> returns nodelist of given Id
// document.getElementById("myid")
// //getElementByClassName=> returns nodelist of given class
// document.getElementsByClassName("myclass")
// creation 
// you can create a node
const a = document.createElement("a");
a.setAttribute("href", "https://www.google.com/");
a.textContent = "Link to google";

body.appendChild(a);

const netflix = document.createElement("a");
netflix.textContent = "Link to netflix";
netflix.setAttribute("href", "http://www.netflix.com");
body.insertBefore(netflix,h1);


























