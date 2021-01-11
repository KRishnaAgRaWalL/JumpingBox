var canvas;
var music;
var box1, box2, box3, box4;
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
   box1 = createSprite(75,495,140,10)
   box1.shapeColor = ("green")
   
   box2 = createSprite(225,495,140,10)
   box2.shapeColor = ("blue")

   box3 = createSprite(375,495,140,10)
   box3.shapeColor = ("red")

   box4 = createSprite(525,495,140,10)
   box4.shapeColor = ("Black")

   //create The bouncy ball with the velocity
   ball = createSprite(Math.round(random(20,600)),100,30,30)
   ball.velocityX = 4
   ball.velocityY = 8
   //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges)
  
    //the setting
    if(box1.isTouching(ball)  &&  ball.bounceOff(box1)){
     ball.shapesColor = ("green")
     
     ball.bounceOff(box1)
     music.play();
    }
   
    if(box2.isTouching(ball)){
        ball.shapeColor = ("blue")
        ball.bounceOff(box2)
       music.stop();
    }

    if(box3.isTouching(ball) &&  ball.bounceOff(box3) ){
        ball.shapeColor = ("red")
        
        ball.bounceOff(box3)
    }

    if(box4.isTouching(ball)){
        ball.shapeColor = ("black")
        ball.velocityX = 0
        ball.velocityY = 0
    }
    drawSprites();
    


}