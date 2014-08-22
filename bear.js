function Bear(tileSheet,x,y) {
    this.x = x;
    this.y = y;
    this.accelX = 1;
    this.accelY = 1;
    this.tileSheet = tileSheet;
    this.frameIndexBear = 0;
    this.animationFramesBear= [13,14,15];
    this.animationFramesAtasBear = [16,17,18];
    this.animationFramesBawahBear = [0,1,2];
    this.animationFramesKananBear = [13,14,15];
    this.animationFramesKiriBear = [7,8,9];
    this.animationFramesAtasAngryBear = [19,20,21];
    this.animationFramesBawahAngryBear = [3,4,5];
    this.animationFramesKananAngryBear = [50,51,52];
    this.animationFramesKiriAngryBear = [10,11,12];
    this.angry=false;
}

Bear.prototype = {
    constructor : Bear,
    check: function(px,py){
        var a=5;
        for(i=1;i<=a;i++){
            if(px>this.x-i && px<this.x+i && py==this.y-(a-i)){
                this.angry = true;
            }
        }
        for(i=a;i>=1;i--){
            if(px>this.x-i && px<this.x+i && py==this.y+(a-i)){
                this.angry = true;
            }   
        }
        this.angry = false;
        return this.angry;
    },

    move: function(x,y){ 
        
    },
    draw: function(context) {
        
        var sourceX = Math.floor(this.animationFramesBear[this.frameIndexBear] % 10) *32;
        var sourceY = Math.floor(this.animationFramesBear[this.frameIndexBear] / 10) *32;
        
        context.drawImage(this.tileSheet, sourceX, sourceY,32,32,this.x*40,this.y*40,40,40);
        
        this.frameIndexBear++;
            if(this.frameIndexBear==this.animationFramesBear.length) {
             this.frameIndexBear=0;
        }
    }
}

