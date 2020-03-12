let isMouseDown = false;
board.addEventListener("mousedown", function (e) {
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
    isMouseDown = true
})

board.addEventListener("mousemove", function (e) {
    if (isMouseDown == true) {
        console.log(ctx);
        ctx.lineTo(e.clientX, e.clientY);        
        ctx.stroke();
    }
})
board.addEventListener("mouseup", function (e) {
    isMouseDown = false;
    ctx.closePath();
})