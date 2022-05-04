canvas=document.getElementById("mycanvas") ;
ctx= canvas.getContext("2d");

var lpx,lpy;
var nw = screen.width - 150;
var nh = screen.height - 100;
if (screen.width <= 992){
  document.getElementById("mycanvas").width = nw;
  document.getElementById("mycanvas").height = nh;
}
canvas.addEventListener('touchstart' , my_touchstart);
function my_touchstart(e)
{
 lpx = e.touches[0].clientX - canvas.offsetLeft;
 lpy = e.touches[0].clientY - canvas.offsetTop;
}


canvas.addEventListener('touchmove' , my_touchmove);
function my_touchmove(e)
{
    var cpx= e.touches[0].clientX - canvas.offsetLeft;
    var cpy= e.touches[0].clientY - canvas.offsetTop;

 
      ctx.beginPath();
      ctx.strokeStyle="blue";
      ctx.lineWidth=5;
      ctx.moveTo(lpx , lpy);
      ctx.lineTo(cpx,cpy);
      ctx.stroke();
  
  lpx= cpx;
  lpy= cpy;
}