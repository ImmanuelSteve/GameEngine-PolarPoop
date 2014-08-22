function Map(tileSheet, pilMap){
    this.mapRows = 16;
    this.mapCols = 33;
    this.tileMap = [];
    this.node = [];
    this.tileSheet = tileSheet;
    this.neighbour =  new Array([]);    
    this.graphPos=[];
    this.setMap(pilMap);
}

Map.prototype = {
    constructor : Map,   
    setMap : function(pilMap)//pembuatan fungsi
    {        
        var tileMap1 = [
             [28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28]
         ,   [76,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,74,77,28]
         ,   [65,70,70,71,71,70,70,70,70,70,70,70,71,71,71,71,71,71,71,70,70,70,71,71,71,70,70,71,71,71,71,75,28]
         ,   [70,70,70,70,70,70,70,71,71,71,70,70,70,70,70,71,70,70,70,70,70,70,70,70,71,70,70,70,70,70,71,75,28]
         ,   [66,71,70,70,70,70,70,70,70,70,70,70,71,71,70,71,70,70,70,70,70,70,70,70,71,70,70,70,70,70,71,75,28]
         ,   [72,71,70,70,70,71,71,70,70,70,70,70,70,70,70,71,70,70,71,71,71,70,70,70,70,70,70,71,70,70,70,75,28]
         ,   [72,71,71,70,70,70,71,71,71,70,70,70,70,70,70,70,70,70,70,70,71,71,70,70,70,70,71,71,70,70,70,75,28]
         ,   [72,70,70,70,70,70,71,70,70,70,71,71,70,70,70,70,70,70,70,70,70,71,70,70,71,70,70,71,70,70,71,75,28]
         ,   [72,70,70,71,71,70,70,70,70,70,71,70,70,71,71,71,71,70,70,70,70,71,71,71,70,70,70,71,70,70,71,75,28]
         ,   [72,70,70,70,71,70,70,70,71,71,71,70,70,70,70,70,71,70,71,71,70,71,70,70,70,70,70,70,70,71,71,75,28]
         ,   [72,71,70,70,71,70,70,70,71,70,70,70,70,71,70,70,70,70,70,70,70,71,70,70,70,71,70,70,70,70,70,75,28]
         ,   [72,71,70,70,71,71,71,70,71,70,70,70,70,70,71,70,70,70,70,70,70,71,70,71,70,70,70,70,70,70,71,75,28]
         ,   [72,71,70,70,70,70,70,70,71,70,70,71,70,70,71,71,71,71,71,70,70,70,70,71,71,71,71,71,70,70,71,75,28]
         ,   [72,71,70,70,70,70,70,70,70,70,70,70,71,70,70,70,70,70,70,70,70,70,70,70,70,70,70,71,70,70,71,75,28]
         ,   [72,71,71,71,71,71,70,70,70,70,70,70,71,71,71,70,70,70,70,71,71,71,70,70,70,70,70,70,70,70,71,75,28]
         ,   [79,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,73,78,28]
         ];
     
        
        switch(pilMap){
            case 1 : this.tileMap = tileMap1;
                     this.graphPos=new Array(tileMap1.length);
                     for(var i=0;i<tileMap1.length;i++){
                        this.graphPos[i]=new Array(tileMap1[i].length) ;
                        for(var j=0;j<tileMap1[i].length;j++)
                            this.graphPos[i][j]=-1;
                     };
                     break;//return
        }
    },
    



    createGraph : function(){
        var tamp;
        //create Node

        for (var rowCtr=0;rowCtr < this.mapRows;rowCtr++) {
            for (var colCtr=0;colCtr < this.mapCols;colCtr++){
                if(this.tileMap[rowCtr][colCtr] == 70){
                    tamp = {y:rowCtr , x:colCtr};
                    this.graphPos[rowCtr][colCtr]=this.node.length;
                    this.node.push(tamp);
                }
            }
        }
        //console.log(this.node);
        //console.log(map.graphPos);
        
        //create Neighbour
        var size=this.mapRows*this.mapCols;
        for(var i=0;i<size;i++)
            this.neighbour.push([]);
        
        for(var nodeCtr=0;nodeCtr<this.node.length;nodeCtr++){            
            for(var nodeNext=0;nodeNext<this.node.length;nodeNext++){
                tamp = {nex:nodeNext , weight:0};
                if(
                    this.node[nodeCtr].x==this.node[nodeNext].x && (this.node[nodeCtr].y==this.node[nodeNext].y-1 || this.node[nodeCtr].y==this.node[nodeNext].y+1) ||
                    this.node[nodeCtr].y==this.node[nodeNext].y && (this.node[nodeCtr].x==this.node[nodeNext].x-1 || this.node[nodeCtr].x==this.node[nodeNext].x+1)) {
                        this.neighbour[nodeCtr].push(tamp);
                }   
            }
        }
        //console.log(this.neighbour);
        
    },

    
    draw : function(context)
    {
         for (var rowCtr=0;rowCtr < this.mapRows;rowCtr++) {            
            for (var colCtr=0;colCtr < this.mapCols;colCtr++){
      
               var tileId = this.tileMap[rowCtr][colCtr]
               var sourceX = Math.floor(tileId % 10) *50;
               var sourceY = Math.floor(tileId / 10) *50;
      
               context.drawImage(this.tileSheet, sourceX, sourceY,50,50,colCtr*40,rowCtr*40,40,40);
            }
         }    
    }
}