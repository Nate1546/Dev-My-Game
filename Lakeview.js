function lakeview(){
    image(img_lake,350,22,600,420);
    textSize(25);
    stroke("red");
    fill(250,0,5);
    if(rescue===false){
      image(img_man,570,350-progress*28,130,(100-5*progress));  
      image(img_dog,590,45,75,55);
    }else if(rescue===true){
      moments.play();
  //    delayR(4000);
      //  image(img_man,500,460-i*28,130,(100-5*i));
      //  image(img_dog,500,(470-i*30),75,55);
     image(img_rescue,500,400,150,125);
      noLoop();
    }else if(rescue==="fail") {  
      image(img_man,370,300,20,20); 
      image(img_dog,590,45,75,55);
      noLoop();
    }
}