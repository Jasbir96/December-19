socket.on("oncolorChange", function (color) {
    ctx.strokeStyle = color;

})


socket.on("onmousedown", function (point) {
    let { x, y, color, width } = point;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(x, y);

    undoStack.push(point);
})

socket.on("onmousemove", function (point) {
    let { x, y, color, width } = point;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineTo(x, y);
    ctx.stroke();
    undoStack.push(point);
})
