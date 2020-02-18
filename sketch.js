var luck,victory,moments,Help;
var img_lake,  img_man, img_dog, img_rescue;

var noRows=10, noCols=10;

var item;
var pyramidA=[], pyramidx=50, pyramidy=410;

var bridgeA=[], bridgex=60, bridgey=425;

var pyramid, bridge, crossingA=[];

var health=250;
var progress=0;
var rescue=false;
//var delay=false;
var time;

function preload() {          
  img_background = loadImage("assets/bg.png");
  img_lake=loadImage("assets/lake.png");
  img_man=loadImage("assets/man.png");
  img_dog=loadImage("assets/dog1.png");
  img_rescue=loadImage("assets/man with dog1.png");
  luck = loadSound("assets/luck.mp3");
  //victory = loadSound("assets/victory.mp3");
  moments = loadSound("assets/moments.mp3");
  Help = loadSound("assets/help.mp3");
}  

function setup(){
    var canvas = createCanvas(1000,550);
    
    pyramid=new Pyramid(pyramidx,pyramidy,noRows,noCols);
    bridge=new Pyramid(bridgex,bridgey,noRows,noCols);
    bridge.constBridge();
    message=new Message();
}

function draw() {
  background("cyan");
  image(img_background,10,10);
  lakeview();

  //pyramid=new Pyramid(pyramidx,pyramidy,noRows,noCols);
  pyramid.constPyramid();
  //bridge=new Pyramid(bridgex,bridgey,noRows,noCols);
  bridge.bridgeShow();

  mousePress(); 
  progress=crossingA.length;//shows the no of tiles placed in the bridge 
  
  if (progress===10){ //rescue--success
    rescue=true;
  }

  if (health<0){//rescue--failed
    rescue="fail";
    Help.play();
  }

  keyPress(); 
//  console.log(progress);
  message.display();
} 

function mousePress(){///Mouse Click is not counted as one !!!!!!!!
  if(mouseIsPressed){
    var nowMousex = mouseX;
    var nowMousey = mouseY;
    for(let i=0;i<noRows;i++){
      if(nowMousex>bridgeA[i].x-10 && nowMousex<bridgeA[i].x+10){
        if (nowMousey>bridgeA[i].y-15 &&nowMousey<bridgeA[i].y+15 ){
          crossingA[i]=bridgeA[i];
          crossingA[i].x=620;
           luck.play();
        }
      }
    }
 // delayR(500);  
  health=health-10;
  }
}

// function delayR(time){
//   delay=false;
//   var time1=millis();
//   while (delay===false){
//     var time2=millis();
//     if(time2-time1>time){
//       delay=true;  
//     }
//   }
// }

function keyPress(){
  textSize(25);
  stroke("yellow");
  fill(250,200,5);
  if(keyIsPressed){
    if(keyCode === LEFT_ARROW){
    
    }else if(keyCode === RIGHT_ARROW){
    
    }else if(keyCode === 32){
    text('Cross the Lake to Rescue the Pet Dog ...' ,355,125);
    text('Select one TILE from EACH ROW on Left ...',355,175);
    text('Start from bottom most ROW ...',355,225);
    text('CLICK MOUSE to Shift the Stones ...',355,275); 
    text('Make BRIDGE ... On the Lake ... ',355,325);
    text('Help the PET !',355,375);
    }
  }
}

