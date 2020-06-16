var database;
var drawing = [];

function setup(){
  createCanvas(400,400);
}

function draw(){
  beginShape();
  if(mouseIsPressed){
    var point = {x:mouseX, y:mouseY}
    drawing.push(point);
  }
  for(var i=0; i<drawing.length; i=i+1){
    vertex(drawing[i].x, drawing[i].y);
  }
  endShape();
}
