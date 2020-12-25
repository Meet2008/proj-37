class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('Images/Milk.png');
    }

   bedroom(){
     background(bedroomImg,550,550);
   }    

   gardern(){
     background(garedernImg,550,550);
   }

   washroom(){
     background(washroomImg,550,550);
   }

   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

   getFedTime(lastFed){
     this.lastFed=lastFed;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
    }

    display(){
      var x=80,y=100;
      
      imageMode(CENTER);
      image(this.image,720,220,70,70);
      
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
       
      var currentTime=hour();
      if(currentTime==(lastFed+1)){
        update("Playing");
        foodObj.gardern();
      }else if(currentTime==(lastFed+2)){
        update("Sleeping");
        foodObj.bedroom();
      }else if(currentTime>(lastFed+2) && currentTime<=(lastFed+4)){
        update("Bathing");
        foodObj.washroom();
      }else{
        update("Hungary")
        foodObj.display();
      }
    }
    }