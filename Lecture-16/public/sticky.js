function createSticky() {
    // create element
    const stickyPad = document.createElement("div");
    const navBar = document.createElement("div");
    const writingPad = document.createElement("div");
    const minimize = document.createElement("div");
    const close = document.createElement("div");
    const textArea = document.createElement("textarea");

    // add styling
    stickyPad.setAttribute("class", "stickyPad")
    navBar.setAttribute("class", "navBar")
    writingPad.setAttribute("class", "writingPad")
    minimize.setAttribute("class", "minimize")
    close.setAttribute("class", "close")
    textArea.setAttribute("class", "textArea");
    // add to canvas 
    stickyPad.appendChild(navBar);
    stickyPad.appendChild(writingPad);
    navBar.appendChild(close);
    navBar.appendChild(minimize);
    writingPad.appendChild(textArea);
    const body = document.querySelector("body");
    body.appendChild(stickyPad);
    
    close.addEventListener("click", function () {
        stickyPad.remove();
    })

    let isMinmized = false;
    minimize.addEventListener("click", function () {
        if (isMinmized == false) {
            writingPad.style.display = "none";

        } else {
            writingPad.style.display = "block";
        }
        isMinmized = !isMinmized
    })

    let initialX = null;
    let initialY = null;
    let isStickyDown = false;

    navBar.addEventListener("mousedown", function (e) {
        initialX = e.clientX;
        initialY = e.clientY;
        isStickyDown = true;

    })

    navBar.addEventListener("mousemove", function (e) {

        if (isStickyDown == true) {

            let finalX = e.clientX;
            let finalY = e.clientY;

            let diffX = finalX - initialX;
            let diffY = finalY - initialY;
            
            let { top, left } = stickyPad.getBoundingClientRect();

            stickyPad.style.top = top + diffY+"px";
            stickyPad.style.left = left + diffX+"px";

            initialX = finalX;
            initialY = finalY;
        }
    })
    // sticky => mouseup
    navBar.addEventListener("mouseup", function () {
        isStickyDown = false;
    })
    // pointer => moved off sticky
    navBar.addEventListener("mouseleave", function () {
        isStickyDown = false;
    })
}