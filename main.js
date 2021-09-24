var mouseevent = "empty";
var lastpositionX, lastpositionY;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var colour = "black";
var width = 1;
canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e){
    mouseevent = "mouseDown"
}

canvas.addEventListener("mouseup", my_mouseup)

function my_mouseup(e){
    mouseevent = "mouseUp"
}

canvas.addEventListener("mouseleave", my_mouseleave)

function my_mouseleave(e){
    mouseevent = "mouseLeave"
}

canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(e){
    var Current_X = e.clientX-canvas.offsetLeft;
    var Current_Y = e.clientY-canvas.offsetTop;
    if(mouseevent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;
        ctx.moveTo(lastpositionX, lastpositionY);
        ctx.lineTo(Current_X, Current_Y);
        ctx.stroke();
    }
    var lastpositionX = Current_X;
    var lastpositionY = Current_Y;
}
