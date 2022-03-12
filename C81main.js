cann = document.getElementById("myCanvas");
cannreff = cann.getContext("2d");

var color="violet";

cannreff.beginPath()
cannreff.strokeStyle=color
cannreff.lineWidth=3;
cannreff.arc(200, 200, 40, 0, 2*Math.PI);
cannreff.stroke();

cann.addEventListener("mousedown", themousehasdropped);

function themousehasdropped(e) {
    mousex=e.clientX - cann.offsetLeft;
    mousey=e.clientY - cann.offsetTop;
    color=document.getElementById("changecolor").value;
    console.log("The Function 1 is working");
    drawnewcircle(mousex, mousey);
}

function drawnewcircle(mousex, mousey) {
    cannreff.strokeStyle=color
    cannreff.lineWidth=3;
    cannreff.beginPath();
    cannreff.arc(mousex, mousey, 40, 0, 2*Math.PI);
    cannreff.stroke();
    console.log("The Function 2 is working");
}

function clear() {
    cannreff.clearRect(0, 0, 800, 600);
    console.log("The Clearing Function is working");
}



