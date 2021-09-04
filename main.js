var mouseEvent="empty";
var last_position_of_x;
var last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black"
linewidth=1;
canvas.addEventListener("mousedown", f1);
function f1(e){
  color=document.getElementById("color").value;
  linewidth=document.getElementById("linewidth").value;
  mouseEvent="mousedown";
}
canvas.addEventListener("mousemove", f2);
function f2(e){
  current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
  current_position_of_mouse_y=e.clientY-canvas.offsetTop;
  if(mouseEvent == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=linewidth;
    console.log("Last position of X and Y coordinates = ");
    console.log("X = " + last_position_of_x + ", Y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);
    console.log("Current position of X and Y coordinates = ");
    console.log("X = " + current_position_of_mouse_x + ", Y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
  }
  last_position_of_x=current_position_of_mouse_x;
  last_position_of_y=current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", f3);
function f3(e){
  mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", f4);
function f4(e){
  mouseEvent="mouseleave";
}
function clearArea(){
  ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}