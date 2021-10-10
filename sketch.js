 var backgroundImg;
 var beyStadium_Img,launcher1_Img,launcher2_Img;
var beyblade1_Img,beyblade2_Img;
function preload(){
  backgroundImg = loadImage("bg.png")
  beyStadium_Img = loadImage("beyStadium.jpeg.png")
  launcher1_Img = loadImage("launcher1.png")
  launcher2_Img = loadImage("launcher2.png")
  beyblade1_Img = loadImage("beyblade3.png")
  beyblade2_Img = loadImage("beyblade4.png")
  beyblade3_Img = loadImage("beyblade1.png")
  beyblade4_Img = loadImage("beyblade2.png")
}
function setup() {
  createCanvas(800, 800);
database = firebase.database();
canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

stadium = createSprite(400,400,100,100) ;
stadium.addImage("beyStadium",beyStadium_Img)
stadium.scale = 0.6

launcher1 = createSprite(700,400,20,20)
launcher1.addImage("launching",launcher1_Img)
launcher1.scale = 0.55

launcher2 = createSprite(130,430,20,20)
launcher2.addImage("launching",launcher2_Img)
launcher2.scale = 0.38

   bey1.depth = launcher1.depth;
   launcher1.depth = launcher1.depth+1;

   bey2.depth = launcher2.depth;
   launcher2.depth = launcher2.depth+1;

}

function draw() {
  background("black")



drawSprites()
}