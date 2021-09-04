    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    var color="Blue"
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=5;
    ctx.arc(250, 100, 50, 0, 2*Math.PI);
    ctx.stroke();
    var color="Black"
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=5;
    ctx.arc(400, 100, 50, 0, 2*Math.PI);
    ctx.stroke();
    var color="Yellow"
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=5;
    ctx.arc(325, 150, 50, 0, 2*Math.PI);
    ctx.stroke();
    var color="Red"
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=5;
    ctx.arc(550, 100, 50, 0, 2*Math.PI);
    ctx.stroke();
    var color="Green"
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=5;
    ctx.arc(475, 150, 50, 0, 2*Math.PI);
    ctx.stroke();