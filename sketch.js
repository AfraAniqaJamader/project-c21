var backGround,background_img;
var tooth,tooth1_img,tooth2_img;
var germsGroup,germ1_img,germ2_img,germ;
var bordar1,bordar2,bordar3,bordar4;
var toothPaste,toothPaste_img,toothPastesGroup;
var score = 0
var gameOver,gameOver_img
var retry,retry_img;
var gameState 
var play=0,end=1,start=3
var playButton,playButton_img



function preload(){

    background_img = loadImage("background.png")
    tooth1_img = loadImage("tooth.png")
    tooth2_img = loadImage("toothgerm.png")

    germ1_img = loadImage("germ1.jpg")
    germ2_img = loadImage("germ2.jpg")

    toothPaste_img = loadImage("toothbrush.png")

    gameOver_img = loadImage("gameOver.jpg")
    retry_img = loadImage("retry.jpg")
    playButton_img=loadImage("play button.jpg")

}

function setup() {
  createCanvas(600,600)

    backGround = createSprite(300,300,600,600)
    backGround.addImage("ground",background_img)
    backGround.scale=4
 
    // create tooth.
    tooth = createSprite(500,500,20,20)
    tooth.addImage("smilling",tooth1_img)
    tooth.addImage("crying",tooth2_img)
    tooth.scale=0.5
   

    
    //create bordars.
    bordar1=createSprite(1,300,3,600)
    bordar2=createSprite(300,1,600,3)
    bordar3=createSprite(599,300,3,600)
    bordar4=createSprite(300,599,600,3)


    toothPastesGroup = createGroup()
    germsGroup = createGroup()

    gameState = play


    
    

 
}

function draw() {
    background(260)
     

   
    
    
    
    if(gameState==play){
        tooth.x=World.mouseX       
        spawnPaste()
        spawnGerms()
        if(toothPastesGroup.isTouching(tooth)){
            toothPastesGroup.destroyEach();
            score=score+2
        }
        if(tooth.isTouching(germsGroup)){
            

            gameState=end;
        }
        drawSprites();
    }
    if(gameState===end){
        gameover()

        //var retry=createSprite(300,400,20,20)
        //retry.addImage("try",retry_img)
        //retry.scale=0.5

        //var gameOver = createSprite(200,200,30,30)
        //gameOver.addImage("over",gameOver_img)
        //gameOver.scale=0.5

        if(keyDown(ENTER)){
            
            reset()
           
            //Fill("black")
           // retry.destroy();
            //gameOver.destroy();
        }
        drawSprites();
        textSize(40)
        text("press ENTER to start again",100,300)
        

    }
    
    

   

   
   

   

   
   
    
    
    text("score: "+score,50,50)
    
}


function spawnGerms(){
    if(frameCount%100===0){
        germ = createSprite(Math.round(random(50,550)),0,20,20)
        germ.velocityY=(5+(score/2))

        var rend = Math.round(random(1,2))
        switch (rend) {
            
            case 1: germ.addImage("germ1",germ1_img);
            break;

            case 2: germ.addImage("germ2",germ2_img);
            break;
        }

        germ.scale=0.05

        germ.lifeTime=80

        germsGroup.add(germ)


    }
}

function spawnPaste(){
    if(frameCount%120===0){
        toothPaste = createSprite(40,0,20,20)
        toothPaste.x=Math.round(random(50,550))
        toothPaste.velocityY= (5+(score/4))
        toothPaste.addImage("brushing",toothPaste_img)
       
        

        toothPaste.scale=0.1

        toothPaste.lifeTime=80

        toothPastesGroup.add(toothPaste)


    }
}

function gameover(){
   
        tooth.changeImage("crying",tooth2_img);
        germsGroup.destroyEach();
        toothPastesGroup.destroyEach();
    
}

function RETRY(){
    var retry=createSprite(400,400,20,20)
    retry.addImage("try",retry_img)
    retry.scale=0.5


}

function GAMEOVER(){
    var gameOver = createSprite(200,200,30,30)
    gameOver.addImage("over",gameOver_img)
    gameOver.scale=0.5

}

function reset(){
    gameState=play;
    tooth.changeImage("smilling")
    score=0
}














