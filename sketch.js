var fr,mr;
function setup() {
  createCanvas(800,400);
 fr= createSprite(400, 200, 50, 50);
 mr=createSprite(100,100,80,50);
 fr.shapeColor="blue";
 mr.shapeColor="blue";
}

function draw() {
  background(255,255,255); 
  mr.x=World.mouseX;
  mr.y=World.mouseY;
  if(mr.x-fr.x<=mr.width/2+fr.width/2&&
    fr.x-mr.x<=fr.width/2+mr.width/2&&
    mr.y-fr.y<=mr.height/2+fr.height/2&&
    fr.y-mr.y<=fr.height/2+mr.height/2){
fr.shapeColor="yellow";
mr.shapeColor="yellow";
  } 
  else{
    fr.shapeColor="blue";
    mr.shapeColor="blue";
  }
  drawSprites();
}