//Adjusts smoothness/increments of sides
let barHeight = 1;
//Arrays for objects
let myLeftBars = [];
let myRightBars = [];
//angles for spinning squares
let angleA = 0
let angleB = 0


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  // Instantiating left bars and filling array
  for( let i = 0; i < height; i += barHeight){
    myLeftBars.push(new LeftBar(0, i));
  }
  //instantiating right bars and filling array
  for( let i = 0; i < height; i += barHeight){
    myRightBars.push(new RightBar(0, i));
  }
  
}


function draw() {
  
  background(0);
  colorMode(HSB);
  strokeWeight(10)
  
  //Color changing based on mouse movement - can be calculated from bars class
  fill(myLeftBars[1].distance, 100, 100);
  stroke(myLeftBars[1].distance, 100, 100);
  
  // //Largest square rotating clockwise
  push();
  noFill();
  stroke(myLeftBars[1].distance, 50, 50);
  strokeWeight(10)
  rectMode(CENTER)
  translate(width/2, height/2);
  rotate(radians(angleA))
  rect(0, 0, width, height, 10)
  angleA ++
  pop();
  //Largest square rotating anticlockwise
  push();
  stroke(myLeftBars[1].distance, 30, 30);
  strokeWeight(10)
  noFill();
  rectMode(CENTER)
  translate(width/2, height/2);
  rotate(radians(angleB))
  rect(0, 0, width, height, 10)
  angleB --
  pop();
  //Medium square rotating clockwise
  push();
  stroke(myLeftBars[1].distance, 70, 70);
  strokeWeight(10)
  noFill();
  rectMode(CENTER)
  translate(width/2, height/2);
  rotate(radians(angleA))
  rect(0, 0, width/2, height/2, 10)
  pop();
  //Medium square rotating anticlockwise
  push();
  stroke(myLeftBars[1].distance, 70, 70);
  strokeWeight(10)
  noFill();
  rectMode(CENTER)
  translate(width/2, height/2);
  rotate(radians(angleB))
  rect(0, 0, width/2, height/2, 10)
  pop();
  
  
  // Producing many left bars to form Wave
  for(let i = 0; i < myLeftBars.length; i++){
    myLeftBars[i].run();
  }
  
  // Producing many Right bars to form Wave
  for(let i = 0; i < myRightBars.length; i++){
    myRightBars[i].run();
  }
  
}

//Class for Left bars
class LeftBar {
  
  constructor(x , y){
    this.posX = x;
    this.posY = y;
    this.barWidth = 0;
    //distance between posX,posY and mouseX,mouseY
    this.distance;
  }
  //function to run object in the draw function
  run(){
    this.drawBar();
    this.updateBar();
  }
  //to creat a single bar
  drawBar(){
    rect(this.posX, this.posY, this.barWidth, barHeight);
  }
  //to adjust bar width based on mouseX and mouse Y
  updateBar(){
    this.distance = dist(mouseX, mouseY, this.posX, this.posY);
    this.barWidth = map(this.distance, 0, height, width/2.5, 0);
    
  }
  
}

//Class for Right bars
class RightBar {
  
  constructor(x , y){
    this.posX = x;
    this.posY = y;
    this.barWidth = 0;
    //distance between posX,posY and mouseX,mouseY - used for maping bar height and color by adjusting hue.
    this.distance;
  }
  //function to run object in the draw function
  run(){
    this.drawBar();
    this.updateBar();
  }
  //to creat a single bar
  drawBar(){
    rect(width-this.posX, this.posY, -this.barWidth, barHeight);
  }
  // to adjust bar width based on mouseX and mouse Y
  updateBar(){
    this.distance = dist(mouseX, mouseY, width-this.posX, this.posY);
    this.barWidth = map(this.distance, 0, height, width/2.5, 0);
    
  }
  
}


