function Nyawa(tileSheet) {
    this.tileSheet = tileSheet;
    this.frameIndex = 0;
    this.frameIndexHeart1=0;
    this.frameIndexHeart2=0;
    this.poin=3;
}

Nyawa.prototype = {
    constructor : Nyawa,
    draw: function(context) {        
          var sourceX = Math.floor(44 % 10) *50;
          var sourceY = Math.floor(44 / 10) *50;

          for(var i=this.frameIndexHeart1;i<3;i++)
          context.drawImage(this.tileSheet, sourceX, sourceY,50,50,(28+i)*40,0*40,40,40);

          sourceX = Math.floor(43 % 10) *50;
          sourceY = Math.floor(43 / 10) *50;
          
          for(var i=this.frameIndexHeart2;i<this.poin;i++)
          context.drawImage(this.tileSheet, sourceX, sourceY,50,50,(28+i)*40,0*40,40,40);
    }
}


