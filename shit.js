function Shit(tilesheet,amount,tilemap) {
    this.amount=amount;
    this.tilemap=tilemap;
    this.array= new Array(amount);
    this.tilesheet=tilesheet;
    for(var i=0;i<amount;i++){
      var tamp={x: 0, y:0, tipe: 0,times:0};
      this.array[i]=tamp;      
    }
}

Shit.prototype = {
    constructor : Shit,
    draw: function(con) {        
      var sourceX;
      var sourceY;
//alert("a");
      for(var i=0;i<this.amount;i++){          
        if(this.array[i].times!=0){
         // alert(this.array[i].times);
        sourceX = Math.floor((40 +this.array[i].tipe) % 10) *50;
        sourceY = Math.floor((40 +this.array[i].tipe)/ 10) *50;
        context.globalAlpha = 1/(6-this.array[i].times);
        con.drawImage(this.tilesheet, sourceX, sourceY,50,50,this.array[i].x*40,this.array[i].y*40,40,40);  
        context.globalAlpha = 1;
        }        
      }
        
    },
    add: function(x1,y1,type,time){
      //alert(x1+" "+y1+" "+type+" "+time);
      for(var j=0;j<this.amount;j++){
        if(this.array[j].times==0){
          //alert("as"+this.tilemap[y1][x1]);
          var tamp={x: x1, y:y1, tipe: type,times:time};
          this.array[j]=tamp;
          //alert(this.array[i].times);
          for(var t=0;t<j;t++){
            if(this.array[j].x==this.array[t].x &&this.array[j].y==this.array[t].y)
              this.array[j].times=0;
          }
          //alert(j +" "+)
          j=this.amount;
          //alert(i);
        }
      }
/*
      if(this.array.length<this.amount){
        var tamp={x: x1, y:y1, tipe: type,times:time};
        this.array.push(tamp);
      }
      */
      //this.am++;
      //console.log(this.am);
    },

      idak:function(player){
        for(var i=0;i<this.amount;i++){
          if(this.array[i].x==player.x &&this.array[i].y==player.y && this.array[i].times!=0)
            {
              this.array[i].times=0;
              player.nyawa-=this.array[i].tipe-1;
              if(player.nyawa<0) player.nyawa=0;
              console.log(player.nyawa);
              //var tamp={bol:true,tipe:this.array[i].tipe}
              //alert(tamp.bol);
              return true;
            }
        }
      },
    vapor: function(){
      for(var i=0;i<this.array.length;i++){
        if(this.array[i].times!=0){
            this.array[i].times--;
           // alert(i+" "+this.array[i].times);
            //if(this.array[i].times==0){
              //this.array.splice(i,1);
              //this.am--;
            //}  
          }        
      }
    }
}

/*
var tag_story = [1,3,56,6,8,90],
    id_tag = 90,
    position = tag_story.indexOf(id_tag);

if ( ~position ) tag_story.splice(position, 1); 
1 -> buat delete
0 -> buat insert

*/



