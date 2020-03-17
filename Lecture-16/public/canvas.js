let isMouseDown = false;

let undoStack = [];

board.addEventListener("mousedown", function (e) {
    ctx.beginPath();
    let top = getLocation();
    ctx.moveTo(e.clientX, e.clientY - top);
    isMouseDown = true;

    let point = {
        x: e.clientX,
        y: e.clientY - top,
        identifier: "mousedown",
        color: ctx.strokeStyle,
        width: ctx.lineWidth
    }

    undoStack.push(point);

    socket.emit("mousedown", point);
    // event emit 
})
// mmousedown x,y beginPath,moveTo(x,y),color,size
// mouseMove=> x1,y1, lineTo,stroke






board.addEventListener("mousemove", function (e) {
    if (isMouseDown == true) {
        // console.log(ctx);
        let top = getLocation();

        ctx.lineTo(e.clientX, e.clientY - top);
        ctx.stroke();
        let point = {
            x: e.clientX,
            y: e.clientY - top,
            identifier: "mousemove",
            color: ctx.strokeStyle,
            width: ctx.lineWidth
        }
        undoStack.push(point);
        socket.emit("mousemove", point);
    }
})



board.addEventListener("mouseup", function (e) {
    isMouseDown = false;
    ctx.closePath();
})



const undo = document.querySelector(".undo");

let iterval = null;

undo.addEventListener("mousedown", function () {
    interval = setInterval(function () {
        ctx.clearRect(0, 0, board.width, board.height);

        if (undoStack.length > 0) {
            undoStack.pop();
            redraw();
        }

    }, 50);
})

undo.addEventListener("mouseup", function () {
    clearInterval(interval);
})

function redraw() {
    for (let i = 0; i < undoStack.length; i++) {
        let { x, y, identifier, color, width } = undoStack[i];
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        if (identifier == "mousedown") {
            ctx.beginPath();
            ctx.moveTo(x, y);
        } else if (identifier == "mousemove") {
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    }
}




function getLocation() {
    const { top } = board.getBoundingClientRect();
    return top;

}
