function Dog(tileSheet,x,y) {
    this.x = x;
    this.y = y;
    this.accelX = 1;
    this.accelY = 1;
    this.tileSheet = tileSheet;
    this.frameIndexDog = 0;
    this.animationFramesDog= [50,51,52];
    this.animationFramesAtasDog = [60,61,60];
    this.animationFramesBawahDog = [62,63,62];
    this.animationFramesKananDog = [50,51,52];
    this.animationFramesKiriDog = [53,54,55];
}

Dog.prototype = {
    constructor : Dog,
    flee : function (tileMap){
      /*
      if(tileMap[this.y-1][this.x]==70){
        this.y--;
        this.animationFramesDog = this.animationFramesAtasDog;
      }
      if(tileMap[this.y+1][this.x]==70){
        this.y++;
        this.animationFramesDog = this.animationFramesBawahDog;
      }
      if(tileMap[this.y][this.x+1]==70){
        this.x++;
        this.animationFramesDog = this.animationFramesKananDog;
      }
      if(tileMap[this.y][this.x-1]==70){ 
        this.x--;
        this.animationFramesDog = this.animationFramesKiriDog;
      }    
      */
    },

    move: function(x,y){
      this.x+=x;
      this.y+=y;
    },
    draw: function(context) {
        
        var sourceX = Math.floor(this.animationFramesDog[this.frameIndexDog] % 10) *50;
        var sourceY = Math.floor(this.animationFramesDog[this.frameIndexDog] / 10) *50;
        
        context.drawImage(this.tileSheet, sourceX, sourceY,50,50,this.x*40,this.y*40,40,40);
        
        this.frameIndexDog++;
            if(this.frameIndexDog==this.animationFramesDog.length) {
             this.frameIndexDog=0;
        }
    }
}

