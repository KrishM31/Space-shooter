var bg,bgImg;
var player,playerImg;
var enemy,enemy1,enemy2,enemy3,enemy4,enemy5,enemy6;
var boss, Evilboss,kingboss,REDBOSS,redboss2;

function preload(){
//backgroundImg=loadImage("space bakground.png");
bgImg=loadImage("space bakground.png");
playerImg=loadImage("player2.jpg");
enemy1=loadImage("enemy1.jpg");
enemy2=loadImage("enemy2.png");
enemy3=loadImage("enemy3.png");
enemy4=loadImage("enemy4.jpg");
enemy5=loadImage("enemy5.png");
enemy6=loadImage("enemy6.png");
Evilboss=loadImage("Evilboss.png");
Kingboss=loadImage("kingBoss.jpg");
REDBOSS=loadImage("REDBOSS.png");
redboss2=loadImage("redboss2.png");
}

function setup(){
createCanvas(800,800);
bg=createSprite(400,400);
bg.addImage(bgImg);
bg.velocityY=4;
bg.scale=2;

player=createSprite(400,600,50,50);
player.addImage(playerImg);
player.scale=0.5;

}


function draw(){
//background("white");
bg.velocityY=1;
if (bg.y>500){
bg.y=400;
}
if(keyDown("left")){
player.x=player.x-6
}
if(keyDown("right")){
    player.x=player.x+6
    }

var rand= Math.round(random(1,10));
console.log(rand);

if(frameCount%3===0){
if(rand===1){
   enemy1_fun();
}else if(rand===2){
    enemy2_fun();
}else if(rand===3){
    enemy3_fun();
}else if(rand===4){
    enemy4_fun();
}else if(rand===5){
    enemy5_fun();
}else if(rand===6){
    enemy6_fun();
}else if(rand===7){
    Evilboss_fun();
}else if(rand===8){
    kingBoss_fun();
}else if(rand===9){
    REDBOSS_fun();
}else{
    redboss2_fun();
}

}

drawSprites();
}


function enemy1_fun(){
//var enemy1S=createSprite(400,0);
var enemy1S=createSprite(Math.round(random(200,400)),0,10,10);
enemy1S.velocityY=5;
enemy1S.addImage(enemy1);
enemy1S.scale=0.1;
}

function enemy2_fun(){
    var enemy2S=createSprite(Math.round(random(400,450)),0,10,10);
    enemy2S.velocityY=5;
    enemy2S.addImage(enemy2);
    enemy2S.scale=0.5;

}

function enemy3_fun(){
    var enemy3S=createSprite(Math.round(random(450,500)),0,10,10);
    enemy3S.velocityY=5;
    enemy3S.addImage(enemy3);
    enemy3S.scale=0.3;
    
}

function enemy4_fun(){
    var enemy4S=createSprite(Math.round(random(200,400)),0,10,10);
    enemy4S.velocityY=5;
    enemy4S.addImage(enemy4);
    enemy4S.scale=0.3;
    
}    

function enemy5_fun(){

    var enemy5S=createSprite(Math.round(random(200,400)),0,10,10);
    enemy5S.velocityY=3;
    enemy5S.addImage(enemy5);
    enemy5S.scale=0.3;   
}

function enemy6_fun(){

    var enemy6S=createSprite(Math.round(random(200,400)),0,10,10);
    enemy6S.velocityY=3;
    enemy6S.addImage(enemy6);
    enemy6S.scale=0.3;
    
}

function Evilboss_fun(){

    
}

function kingBoss_fun(){

    
}

function REDBOSS_fun(){

    
}

function redboss2_fun(){

    
}