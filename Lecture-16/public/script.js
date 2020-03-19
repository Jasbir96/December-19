const socket=io.connect("http://localhost:4000");
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
ctx.strokeStyle="blue";
ctx.imageSmoothingEnabled=true;
// ctx.lineWidth=60;
// ctx.lineWidth=2;





// // 0,0
// ctx.beginPath();
// ctx.moveTo(50,150);
// ctx.lineTo(100,150);
// ctx.moveTo(160,200);
// ctx.lineTo(200,200);
// ctx.closePath();
// ctx.stroke();