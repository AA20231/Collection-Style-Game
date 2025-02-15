//Move the catcher with the left and right arrow keys to catch the falling objects. 


/* VARIABLES */
let catcher, fallingObject1, score, fallingObject2, fallingObject3, level;
let playButton, directionsButton, backButton, screen, character, backButton2, meemawButton, georgieButton, mandyButton;

/* PRELOAD LOADS FILES */
function preload(){
  backgroundImg = loadImage("assets/backgroundImg.jpg");
  meemawImg= loadImage("assets/meemawImg.png");
  fallingObjectImg1 = loadImage("assets/fallingObjectImg1.png");
  fallingObjectImg2= loadImage("assets/fallingObjectImg2.png");
  fallingObjectImg3 = loadImage("assets/fallingObjectImg3.png");
  fallingObjectImg4 = loadImage("assets/fallingObjectImg4.png");
  georgieImg = loadImage("assets/georgieImg.png");
  mandyImg = loadImage("assets/mandyImg.png");

  /*font = loadFont('/assets/static/font.ttf')*/

}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);
  screen = 0;
  level = 1;
  /*textFont(font);*/
  character = meemawImg

  backgroundImg.resize(150,0);
  meemawImg.resize(70,0);
  mandyImg.resize(100,0);
  georgieImg.resize(100,0);
  fallingObjectImg1.resize(45,0);
  fallingObjectImg2.resize(45, 0);
  fallingObjectImg3.resize(45,0);
  fallingObjectImg4.resize(45,0);

  
  textAlign(CENTER, CENTER)

  homeScreen();
}

/* DRAW LOOP REPEATS */
function draw() {
  //fallingObject.collider = 'd'
  //Draw background image

  if (screen == 0){
    
    if (directionsButton.mouse.presses()){
      screen = 1;
      directionsScreen();
    }else if (playButton.mouse.presses()){
      screen = 2;
      playScreenAssets();
  } else if (chooseButton.mouse.presses()){
      screen = 3;
      chooseCharacterScreen();
      
  } 
    
  } else if (screen == 1){
    if (backButton.mouse.presses()){
      
      screen = 0;
      homeScreen();
      backButton.pos = { x: -300, y: -300 };
      
      
    }
  }else if (screen == 2){
    //backButton.pos = {x: -577, y:-347};
    background(11, 151, 176);
    
    if (level == 1){
      text("Get 5 points\nto get to\nlevel 2", 325, 50)
    }else if (level == 2){
      text("Get 10 points\nto win!", 325, 50)
      
    }

    //If fallingObject reaches bottom, move back to random position at top
    

    if(fallingObject1.y >= height){
      fallingObject1.y = 0;
      fallingObject1.x = random(50, 350);
      fallingObject1.vel.y = random(2,4);
      score = score -1
    }
    if(fallingObject2.y >= height){
      fallingObject2.y = 0;
      fallingObject2.x = random(50, 350);
      fallingObject2.vel.y = random(2,4);
    }
    if(fallingObject3.y >= height){
      fallingObject3.y = 0;
      fallingObject3.x = random(50, 350);
      fallingObject3.vel.y = random(2, 4);
    }
    if(fallingObject4.y >= height){
      fallingObject4.y = 0;
      fallingObject4.x = random(50, 350);
      fallingObject4.vel.y = random(2,4);
      score = score -1
    }

    if(kb.pressing("left")){
      catcher.vel.x = -3;
    }else if (kb.pressing("right")){
      catcher.vel.x = 3;
    }else{
      catcher.vel.x = 0;
    }
    
    //Stop catcher at edges of screen

    if (catcher.x < 50){
      catcher.x = 50
    }else if (catcher.x > 350){
      catcher.x = 350
    }

    if (fallingObject1.collides(fallingObject2)){
      fallingObject1.direction = 'down';
      fallingObject2.direction = 'down';
    }
    if (fallingObject1.collides(fallingObject3)){
      fallingObject1.direction = 'down';
      fallingObject3.direction = 'down';
    }
    if (fallingObject1.collides(fallingObject4)){
      fallingObject1.direction = 'down';
      fallingObject4.direction = 'down';
    }
    if (fallingObject2.collides(fallingObject3)){
      fallingObject2.direction = 'down';
      fallingObject3.direction = 'down';
    }
    if (fallingObject2.collides(fallingObject4)){
      fallingObject2.direction = 'down';
      fallingObject4.direction = 'down';
    }
    if (fallingObject3.collides(fallingObject4)){
      fallingObject3.direction = 'down';
      fallingObject4.direction = 'down';
    }


    //If fallingObject collides with catcher, move back to random position at top

    if (fallingObject1.collides(catcher)){
      fallingObject1.y = 0;
      fallingObject1.x = random(50, 350);
      fallingObject1.vel.y = random(2,4);
      fallingObject1.direction = 'down';
      score = score + 1
    }
    if (fallingObject2.collides(catcher)){
      fallingObject2.y = 0;
      fallingObject2.x = random(50, 350);
      fallingObject2.vel.y = random(2,4);
      fallingObject2.direction = 'down';
      score = score - 1
    }
    if (fallingObject3.collides(catcher)){
      fallingObject3.y = 0;
      fallingObject3.x = random(50, 350);
      fallingObject3.vel.y = random(2,4);
      fallingObject3.direction = 'down';
      score = score - 1

    }
    if (fallingObject4.collides(catcher)){
      fallingObject4.y = 0;
      fallingObject4.x = random(50, 350);
      fallingObject4.vel.y = random(2,4);
      fallingObject4.direction = 'down';
      score = score + 1

    }

    if (score < 10 ){
      fill(0,0,0)
      textSize(20)
      text(" Score: " + score, 40,25);
      text("Level: " + level, 40, 45)
    }


    youWin();
    youLose();
    levelUp();
    //allSprites.debug = mouse.pressing()  
    
  } 
  
  if (screen == 3){
    chooseCharacterScreen();
    if (backButton2.mouse.presses()){
      meemawButton.pos = { x: -301, y: -300 };
      mandyButton.pos = { x: -302, y: -300 };
      georgieButton.pos = { x: -320, y: -300 };
      backButton2.pos = {x: -576, y:-347};
      
      //console.log("Back button pressed")
      homeScreen();
      screen= 0;
      //console.log("Back to home screen")
      
      
      backButton2.pos = {x: -323, y:-323};
      
    }
    if (meemawButton.mouse.presses()){
      character = meemawImg;
    } else if (georgieButton.mouse.presses()){
      character = georgieImg;
    } else if (mandyButton.mouse.presses()){
      character = mandyImg;
    }
    //playButton.pos = { x: -200, y: -100 };
    //irectionsButton.pos = { x: -500, y: -100 };
    //oochseButton.pos = { x: -502, y: -102 };
  }
  
  
  // Draw directions to screen
  }

function removeGame(){
  fallingObject1.y = -100;
  catcher.x = -100;
  fallingObject1.vel.y = 0;
  catcher.vel.x = 0;

  fallingObject2.y = -150;
  fallingObject2.vel.y = 0; 
  fallingObject3.y = -175;
  fallingObject3.vel.y = 0;
  fallingObject4.y = -200;
  fallingObject4.vel.y = 0;


  
  
  
}

function mouseClicked(){
  if (score > 9) {
    startGame();
  }else if (score < 0){
    startGame();
  }
}

function youWin(){
  if (score > 9){
    removeGame();
    fill(0);
    textSize(20);
    text("You win!\nClick anywhere to go back to home screen", 200, 200);
    text("Score: " + score, 200, 300)
  }
}

function levelUp(){
  if (score >= 5){
    level = 2
    if(kb.pressing("left")){
      catcher.vel.x = -5;
    }else if (kb.pressing("right")){
      catcher.vel.x = 5;
    }else{
      catcher.vel.x = 0;
    }
  }else if (score < 5){
    level = 1
  }
}

function youLose(){
  if (score < -4){
    removeGame();
    fill(0);
    textSize(20);
    text("You lose!\nClick anywhere to go to home screen", 200, 200);
    text("Score: " + score, 200, 300)
  }
  
}

function homeScreen(){
  background(51, 99, 196);
  image(backgroundImg, 125, 160);

  fill(0,0,0);
  textSize(35);
  text("Young Sheldon\nCollections Game!", 200, 85);
  
  playButton = new Sprite(300,325,100,70, 'k');
  playButton.color = "white";
  playButton.textColor = "Black";
  playButton.textSize = 20;
  playButton.text = "Play";

  directionsButton = new Sprite(100,325,100,70, 'k');
  directionsButton.color = "white"
  directionsButton.textSize = 20;
  directionsButton.textColor = "Black";
  directionsButton.text = "Directions";

  chooseButton = new Sprite(200,325,100,70, 'k');
  chooseButton.color = "white"
  chooseButton.textSize = 20;
  chooseButton.textColor = "Black";
  chooseButton.text = "Choose\nCharacter";

  backButton2 = new Sprite(200, 325, 100, 70, "k");
  backButton2.color = "white";
  backButton2.textColor = "black";
  backButton2.textSize = 15;
  backButton2.text = "Back to home";
  backButton2.pos = {x: -202, y: -108}

  meemawButton = new Sprite(100,250,100,70, 'k');
  meemawButton.color = "white";
  meemawButton.textColor = "Black";
  meemawButton.textSize = 20;
  meemawButton.text = "Meemaw";
  meemawButton.pos = {x: -201, y: -103}

  georgieButton = new Sprite(200,250,100,70, 'k');
  georgieButton.color = "white"
  georgieButton.textSize = 20;
  georgieButton.textColor = "Black";    
  georgieButton.text = "Georgie";
  georgieButton.pos = {x: -222, y: -138}

  mandyButton = new Sprite(300,250,100,70, 'k');
  mandyButton.color = "white"
  mandyButton.textSize = 20;
  mandyButton.textColor = "Black";
  mandyButton.text = "Mandy";
  mandyButton.pos = {x: -232, y: -102}

  
 
  
}
function directionsScreen(){

  background(51, 99, 196);


  playButton.pos = { x: -200, y: -100 };
  directionsButton.pos = { x: -500, y: -100 };
  chooseButton.pos = { x: -502, y: -102 };

  image(backgroundImg, 125, 170);
  fill(0,0,0);
  textSize(17);
  text("Help Meemaw with her secret gambling room!\nPick up all of the cash earned\nand the teddy bears while avoiding the\nvideo tapes and laundry piles!\nIf you get -5 points, you lose, but\nif you get 10 points you win!", 200, 90);
  
  backButton = new Sprite(200,325,100,70, "k");
  backButton.color = "white"
  backButton.textColor = "black"
  backButton.textSize = 15;
  backButton.text = "Back to home"  
}
function playScreenAssets(){
  background(51, 99, 196)
  score = 0;
  
  playButton.pos = { x: -200, y: -100 };
  directionsButton.pos = { x: -500, y: -100 };
  chooseButton.pos = { x: -510, y: -100 };

  //georgieButton.pos = { x: -511, y: -100 };
  //meemawButton.pos = { x: -512, y: -100 };
  //mandyButton.pos = { x: -513, y: -100 };

  //Create catcher 
  catcher = new Sprite(character
                  ,200,350,75);
  catcher.color = color(95,158,160);
  catcher.collider = 'k'


  //Create falling object
  fallingObject1 = new Sprite(fallingObjectImg2,100,0,45);
  fallingObject1.color = color(0, 128, 128);
  fallingObject1.vel.y = 2; 
  fallingObject1.rotationLock = true;

  fallingObject2 = new Sprite(fallingObjectImg1,200,0,45);
  fallingObject2.color = color(0,128,128);
  fallingObject2.vel.y = 2; 
  fallingObject2.rotationLock = true;

  fallingObject3 = new Sprite(fallingObjectImg3,300,0,45);
  fallingObject3.color = color(0,128,128);
  fallingObject3.vel.y = 2; 
  fallingObject3.rotationLock = true;

  fallingObject4 = new Sprite(fallingObjectImg4,350,0,45);
  fallingObject4.color = color(0,128,128);
  fallingObject4.vel.y = 2; 
  fallingObject4.rotationLock = true;

  
  
  
}

function mousePressed(){
  if (score > 9){
    score = 0;
    createCanvas(400,400);
    screen = 0;
    level = 1;
    /*textFont(font);*/
    
    backgroundImg.resize(150,0);
    meemawImg.resize(70,0);
    mandyImg.resize(100,0);
    georgieImg.resize(100,0);
    fallingObjectImg1.resize(45,0);
    fallingObjectImg2.resize(45, 0);
    fallingObjectImg3.resize(45,0);
    fallingObjectImg4.resize(45,0);


    textAlign(CENTER, CENTER)

    homeScreen();
  } else if (score <-4){
    score = 0;
    createCanvas(400,400);
    screen = 0;
    level = 1;
    /*textFont(font);*/

    backgroundImg.resize(150,0);
    meemawImg.resize(70,0);
    mandyImg.resize(100,0);
    georgieImg.resize(100,0);
    fallingObjectImg1.resize(45,0);
    fallingObjectImg2.resize(45, 0);
    fallingObjectImg3.resize(45,0);
    fallingObjectImg4.resize(45,0);


    textAlign(CENTER, CENTER)

    homeScreen();
  }
}

function chooseCharacterScreen(){

  background(51, 99, 196);


  playButton.pos = { x: -200, y: -100 };
  directionsButton.pos = { x: -500, y: -100 };
  chooseButton.pos = { x: -502, y: -102 };
  backButton2.pos = {x: 200, y: 325};
  meemawButton.pos = {x: 100, y:250};
  georgieButton.pos = {x: 200, y:250};
  mandyButton.pos = {x:300, y:250};
  
  background(51, 99, 196);
  textSize(25);
  text("Choose your character!", 200, 45)
  image(meemawImg, 60, 110);
  image(georgieImg, 155, 110);
  image(mandyImg, 260, 110);

  

  //backButton2 = new Sprite(200,325,100,70, "k");
  //backButton2.color = "white"
  //backButton2.textColor = "black"
  //backButton2.textSize = 15;
  //backButton2.text = "Back to home" 


  //console.log("BackButton2 position: ", backButton2.pos.x, backButton2.pos.y);  

  

  
  
  
  
}
