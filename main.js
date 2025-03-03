var mousevent="empty";
var last_position_of_x,last_position_of_y;
var current_position_of_x,current_position_of_y;
var mycanvas=document.getElementById('mycanvas');
    var ctx =mycanvas.getContext('2d')
    var color='black'
    var linewidth=15
mycanvas.addEventListener('mousedown',draw);
function draw(e){
    color=document.getElementById('colors').value
    linewidth=document.getElementById('width').value
    lineradius=document.getElementById('radius').value
    mousevent='mousedown';
}
mycanvas.addEventListener('mousemove',draw1);
function draw1(e){
    current_position_of_x=e.clientX-mycanvas.offsetLeft
    current_position_of_y=e.clientY-mycanvas.offsetTop
    if (mousevent=='mousedown'){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=linewidth
        console.log('last'," ",last_position_of_x," ",last_position_of_y)
        console.log('current'," ",current_position_of_x," ",current_position_of_y)
        ctx.arc(current_position_of_x,current_position_of_y,lineradius,0,2*Math.PI)
        ctx.stroke()
    }
    last_position_of_x=current_position_of_x
    last_position_of_y=current_position_of_y
}
function clear1(){
    ctx.clearRect(0,0,ctx.mycanvas.width,ctx.mycanvas.height)
}