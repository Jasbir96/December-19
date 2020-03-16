let isMouseDown = false;
let undoStack = [];

let redoStack=[];
board.addEventListener("mousedown", function (e) {
    // starting point
    // ctx.translate(0,0);
    // ctx.scale(1,1);
    // drawAgain();
    ctx.beginPath();
    let x = e.clientX;
    let y = e.clientY - board.getBoundingClientRect().y;
    ctx.moveTo(x, y);
    let point = {
        x: x,
        y: y,
        color: ctx.strokeStyle,
        width: ctx.lineWidth,
        type: "start"
    }
    undoStack.push(point)
    isMouseDown = true;
    socket.emit("mymousedown",point);
    // x,y,start
})

board.addEventListener("mousemove", function (e) {
    // 
    if (isMouseDown == true) {
        // console.log(ctx);
        let x = e.clientX;
        let y = e.clientY - board.getBoundingClientRect().y
        ctx.lineTo(x, y);

        ctx.stroke();
        let point = {
            x: x,
            y: y,
            color: ctx.strokeStyle,
            width: ctx.lineWidth,
            type: "end"
        }
        undoStack.push(point);
        // x,y,end
        socket.emit("mymousemove",point)

    }
})
board.addEventListener("mouseup", function (e) {
    isMouseDown = false;
    // ctx.closePath();
    socket.emit("mymouseup");
})

let undo = document.querySelector(".undo-tool");
let redo = document.querySelector(".redo-tool");
let interval = null;

undo.addEventListener("mousedown", function (e) {

    let myfn = function () {
        redoStack.push( undoStack.pop());
        drawAgain();
    }
    interval = setInterval(function () {
        myfn();
    }, 50);
})

undo.addEventListener("mouseup",function(){
    // interval=null
    clearInterval(interval);
})
redo.addEventListener("mousedown",function(){
    let myfn = function () {
        undoStack.push( redoStack.pop());
        drawAgain();
    }
    interval = setInterval(function () {
        myfn();
    }, 50);
    
})
redo.addEventListener("mouseup",function(){
    clearInterval(interval);
})

function drawAgain() {
    ctx.clearRect(0, 0, board.width, board.height);

    for (let i = 0; i < undoStack.length; i++) {
        let { x, y, color, type, width } = undoStack[i];
        if (type == "start") {
            ctx.lineWidth = width
            ctx.strokeStyle = color
            ctx.beginPath();
            ctx.moveTo(x, y);

        } else if (type == "end") {
            ctx.lineWidth = width
            ctx.strokeStyle = color
            ctx.lineTo(x, y);

            ctx.stroke();
        }

    }

}

const zoomin=document.querySelector(".zoomin-tool");
const zoomout=document.querySelector(".zoomout-tool");

zoomin.addEventListener("click",function(e){

    ctx.scale(1.1,1.1);
    ctx.translate(-50,-30);
    drawAgain();
})
zoomout.addEventListener("click",function(){
    
    ctx.scale(0.95,0.95);
    ctx.translate(30,20)
    drawAgain();
})

