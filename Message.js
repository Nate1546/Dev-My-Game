class Message {
  constructor(){
        
  }
 
  display(){
    textSize(25);
    stroke(25,10,5);  
    fill(0,0,255);
    
    
    if (rescue===false){
      text('Health:  '+ health +'  ...  TAKE CARE  !',25,25);
      text('RESCUE : ON  !',80,60);
      text('Progress  :   '+ progress*10+ ' % ',80,90);
      text('Help the MAN to Cross the Lake  &  Rescue his PET DOG  ...',50,480);
      text('Make A  BRIDGE ... click MOUSE to Shift the Stones  ',50,525);
      text('ABOUT GAME ... PRESS SPACE ...',620,25);
    }else if(rescue===true ){
      fill(255,0,0);
      text('RESCUE :   SUCCESS ... !',50,475);
      text('SOME TIME LATER ....', 360,200);
      text('Great !  Good Job ...  ',50,65);
      text('THANK YOU FOR RESCUING THE PET ...  ',50,525);
    }else{
      textSize(50);
      stroke(25,10,5);  
      fill(255,0,0);
      text("HELP ... !",360,300);
      text('RESCUE : FAILED ... !',150,60);
      textSize(40);
      text('Oh !  Please come back & Save the PET  & the MAN ... !  ',50,500);
    }
  }
}