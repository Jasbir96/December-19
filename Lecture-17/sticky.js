function createSticky(){
    const body = document.querySelector("body");

const StickyPad = document.createElement("div");
const navbar = document.createElement("div");
const writingPad = document.createElement("div");

StickyPad.setAttribute("class", "sticky-pad")
navbar.setAttribute("class", "navbar")
writingPad.setAttribute("class", "writingPad")

StickyPad.appendChild(navbar);
StickyPad.appendChild(writingPad);
body.appendChild(StickyPad);
}
