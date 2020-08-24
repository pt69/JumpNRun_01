let randAussen;
let figur;
let boden;
let plattform01;

let geschwindigkeit = 5;

let SCHWERKRAFT = 1;
let SPRUNG = 15;

function setup() {
  let cnv = createCanvas(800, 600);
  cnv.position(10,10);

  randAussen = new Group();

  let seitenWandLinks = createSprite(0, height/2, 10, height);
  seitenWandLinks.shapeColor = color("lightgray");
  seitenWandLinks.immovable = true;
  randAussen.add(seitenWandLinks);
  
	let seitenWandOben = createSprite(width/2, 0, width, 10);
  seitenWandOben.shapeColor = color("lightgray");
  seitenWandOben.immovable = true;
  randAussen.add(seitenWandOben); 
  
  let seitenWandRechts = createSprite(width, height/2, 10, height);
  seitenWandRechts.shapeColor = color("lightgray");
  seitenWandRechts.immovable = true;
  randAussen.add(seitenWandRechts);   
  
  boden = createSprite(width/2, height, width, 100);
  boden.shapeColor = color("lightgray");
  boden.immovable = true;
  
  plattform01 = createSprite(500, height-150, 300, 50);
  plattform01.shapeColor = color("wheat");
  plattform01.immovable = true;  
  
  figur = createSprite(50, height-10, 10, 10);
}

function draw() {
  background(252);

  figur.collide(randAussen,stopp);
  
  figur.velocity.y += SCHWERKRAFT;
  
  if(figur.collide(boden)) {
    figur.velocity.y = 0;
  } 
  
  if(figur.collide(plattform01)) {
    figur.velocity.y = 0;
  }   

  if(keyWentDown('d')) {
      figur.velocity.x = geschwindigkeit;
  }
  if(keyWentUp('d')) {
      figur.velocity.x = 0;
  }
  if(keyWentDown('a')) {
      figur.velocity.x = -geschwindigkeit;
  }
  if(keyWentUp('a')) {
      figur.velocity.x = 0;
  }  
  if(keyWentDown('w')) {
      figur.velocity.y = -SPRUNG;
  }

  drawSprites();
}

function stopp() {
  figur.velocity.x = 0;
  figur.velocity.y = 0;
}