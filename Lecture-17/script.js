const board = document.querySelector(".board");
board.height = window.innerHeight;
board.width = window.innerWidth;
// canvasRenderingContext2d=> tool
const ctx = board.getContext("2d");
// ctx.fillRect(0, 0, window.innerWidth / 2, window.innerHeight / 2);
// ctx.fillStyle = "red";
// // initialX,initialY,finalX,finalY
// ctx.fillRect(0, 0, window.innerWidth / 2, window.innerHeight / 2);
// ctx.strokeStyle = "green";
// ctx.lineWidth = 10;
// ctx.strokeRect(0, 0, window.innerWidth / 2, window.innerHeight / 2);
ctx.strokeStyle = "blue";
ctx.imageSmoothingEnabled = true
const input = document.querySelector("#pen-size");
ctx.lineWidth = input.value;
input.addEventListener("change", function (e) {
    ctx.lineWidth = input.value;
})
// ctx.lineWidth=2;

function handleColorChange(color) {
    ctx.strokeStyle = color;
}
function handletoolChange(tool) {
    if (tool == "pencil") {
        ctx.strokeStyle = "blue";
    } else {
        ctx.strokeStyle = "white";

    }
}