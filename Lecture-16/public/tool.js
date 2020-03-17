const pencilSlider = document.getElementById("pencil-slider");
pencilSlider.addEventListener("change", function (size) {
    ctx.lineWidth = pencilSlider.size;
})

function handleSizeChange(size){
    
    ctx.lineWidth = size;
}

let activeTool = "pencil";
function handleColorchange(color) {
    ctx.strokeStyle = color;
    socket.emit("color",color);
}



const eraserOptions=document.querySelector(".eraser-options");
const pencilOptions=document.querySelector(".pencil-options");

function handleToolChange(tool) {
    if (tool == "pencil") {
        if (activeTool == "pencil") {
pencilOptions.classList.add("show");
} else {
    ctx.strokeStyle = "blue";
    eraserOptions.classList.remove("show");
    activeTool = "pencil";
    
}
// console.log("pencil");
} else if (tool == "eraser") {
    // console.log("eraser");
    if (activeTool == "eraser") {
        eraserOptions.classList.add("show");

        } else {
            ctx.strokeStyle = "white";
            activeTool = "eraser";
            pencilOptions.classList.remove("show");
        }
    }
    else if (tool=="sticky"){
        createSticky()
    }

}