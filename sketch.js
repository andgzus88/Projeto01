function setup() {
    createCanvas(900, 900);
    background("black");
  }
  
  function draw() {
    stroke("blue");
    fill("green");
    
    if (mouseIsPressed){
      rect(mouseX, mouseY, 10, 10);
    }
  }