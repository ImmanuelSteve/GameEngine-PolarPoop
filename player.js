function Player(tileSheet,mapTileMap,x,y) {
    this.x = x;
    this.y = y;
    this.accelX = 0;
    this.accelY = 0;
    this.tileSheet = tileSheet;
    this.frameIndex = 0;
    this.mapTileMap=mapTileMap
    this.animationFrames= [0,1,2,3];
    this.animationFramesAtas = [20,21,20,21];
    this.animationFramesBawah = [30,31,30,31];
    this.animationFramesKanan = [0,1,2,3];
    this.animationFramesKiri = [10,11,12,13];
    this.animationFramesAtasShit=[22,22,22,22];
    this.animationFramesBawahShit=[32,32,32,32];
    this.animationFramesKananShit=[5,5,5,5];
    this.animationFramesKiriShit=[15,15,15,15];
    this.animationFramesAtasDive = [85,86,87,88,89,57,58,59,74];
    this.animationFramesBawahDive = [80,81,82,83,84,47,48,49,73];
    this.animationFramesKananDive = [95,96,97,98,99,67,68,69,75];
    this.animationFramesKiriDive = [90,91,92,93,94,37,38,39,72];
    this.nyawa=3;
}

Player.prototype = {
    constructor : Player,


    move: function(shit,player){
        //var tamp=shit.idak(player.x,player.y);
        //alert(tamp);
      if(shit.idak(player)){
        if(this.accelY==1) this.animationFrames=this.animationFramesBawahShit;
        else if(this.accelY==-1) this.animationFrames=this.animationFramesAtasShit;
        else if(this.accelX==1) this.animationFrames=this.animationFramesKananShit;
        else if(this.accelX==-1) this.animationFrames=this.animationFramesKiriShit;
        this.accelX=0;
        this.accelY=0;
        //if(shit.)
        this.nyawa--;
        return;
      }
      if(this.mapTileMap[this.y+this.accelY][this.x+this.accelX]!=71){
        this.x+=this.accelX;
        this.y+=this.accelY;
        if(this.accelY==1) this.animationFrames=this.animationFramesBawah;
        else if(this.accelY==-1) this.animationFrames=this.animationFramesAtas;
        else if(this.accelX==1) this.animationFrames=this.animationFramesKanan;
        else if(this.accelX==-1) this.animationFrames=this.animationFramesKiri;
      }
      if(this.mapTileMap[this.y][this.x]>=72){
        if(this.accelY==1) this.animationFrames=this.animationFramesBawahDive;
        else if(this.accelY==-1) this.animationFrames=this.animationFramesAtasDive;
        else if(this.accelX==1) this.animationFrames=this.animationFramesKananDive;
        else if(this.accelX==-1) this.animationFrames=this.animationFramesKiriDive;
        this.accelX=0;
        this.accelY=0;
        this.nyawa=0;
      }
      

    },
    draw: function(context) {        
        var sourceX = Math.floor(this.animationFrames[this.frameIndex] % 10) *50;
        var sourceY = Math.floor(this.animationFrames[this.frameIndex] / 10) *50;
        
        context.drawImage(this.tileSheet, sourceX, sourceY,50,50,this.x*40,this.y*40,40,40);
            this.frameIndex++;
            if(this.frameIndex==this.animationFrames.length && this.animationFrames[0] < 80) 
                this.frameIndex=0;
            
    }
}


