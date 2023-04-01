function preload(){

}
function setup(){
canvas=createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}
function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
    fill("green");
    circle(50, 50, 80);
    circle(50,430,80);
    circle(590,50,80);
    circle(590,430,80);
    tint(tint_color);
    fill("red")
    rect(50, 20, 550, 60); 
    rect(50, 400, 550, 60);
    rect(20, 10, 60, 540);
    rect(550, 10, 60, 540);
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}
function take_snapshot(){
    save("student_name.png");
}

