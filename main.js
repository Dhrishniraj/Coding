var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var width = screen.width;
    var neww = screen.width - 70;
    var newh = screen.height - 300;

    if(width < 992){
      document.getElementById("myCanvas").width=neww;
      document.getElementById("myCanvas").height=newh;
      document.body.style.overflow="hidden";
    }
    canvas.addEventListener("touchstart", f1);
    function f1(e){
      console.log("touchstart");
      color = document.getElementById("color").value;
      width_of_line = document.getElementById("width_of_line").value;
      last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
      last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }
    canvas.addEventListener("touchmove", f2);
    function f2(e){
      console.log("touchmove");
      current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
      current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
      ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
        }