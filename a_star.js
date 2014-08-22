
  function _distance(source, dest){
    return Math.sqrt(Math.pow(source.x*32-dest.x*32,2) + Math.pow(source.y*32-dest.y*32,2));
  }

  function heuristic(start, goal){
    ////console.log("start - goal : " + start + " " + goal);
    ////console.log(_distance(start, goal));
    return _distance(map.node[start], map.node[goal]);
  }
function reconstruct_path(came_from, current){
    var isFound = false;
    if(came_from[current]!=undefined)
      isFound = true;
    if(isFound){
      reconstruct_path(came_from, came_from[current]);  
    }
    path.push(current);
  }

  var path=[];
  var closedset=[];
  var f_score;
  var t_f_score;

  function a_star(start, goal){
    path = new Array();
    closedset = new Array();
    var openset = new Array(); openset.push(start);
    var came_from = new Array();
    var g_score = new Array();
    f_score = new Array();
    g_score[start] = 0;
    f_score[start] = g_score[start] + heuristic(start, goal)  ;
    while(openset.length != 0){
      var min = 100000000;
      var chosen = -1;
      var chosenIndex = -1;
      for (var i = openset.length - 1; i >= 0; i--) {
        if(min > f_score[openset[i]] )
        {
          min = f_score[openset[i]];
          chosen = openset[i];
          chosenIndex = i;
        } 
      };
      /*end choose*/
      var current = chosen;

      //console.log("current: " + current);

      if(current == goal){
        //console.log("selesai");
        return reconstruct_path(came_from, goal);
      }

      openset.splice(chosenIndex, 1);
      closedset.push(current);

      for(var i=0;i < map.neighbour[current].length; i++){
          //console.log("neighbour : " + map.neighbour[current][i].nex)
          var tmp = map.neighbour[current][i].nex;
          ////console.log(enemy.currentNode + " " + tmp + " " + i);
          ////console.log("Visited " + visited[tmp]);
          var t_g_score = g_score[current] + _distance(map.node[current], map.node[tmp]);

          t_f_score = t_g_score + heuristic(tmp, goal);
          //console.log(t_g_score + " & " + t_f_score);
          var isInClosedSet = false;
          for (var j =  closedset.length - 1; j >= 0; j--) {
            if(closedset[j] == tmp){
              isInClosedSet = true;
              break;
            } 
          };

          if(isInClosedSet && t_f_score >= f_score[tmp]){
            continue;
          }

          var isInOpenSet = false;
          for (var j =  openset.length - 1; j >= 0; j--) {
            if(openset[j] == tmp){
              isInOpenSet = true;
              break;
            } 
          };

          if(!isInOpenSet || t_f_score < f_score[tmp]){
            came_from[tmp] = current;
            g_score[tmp] = t_g_score;
            f_score[tmp] = t_f_score;
            //console.log("ftmp: "+ f_score[tmp]);
            if(!isInOpenSet){
              //console.log("cek" + tmp);
              openset.push(tmp);
            }
          }
          /*if(visited[tmp] == 1) continue;
          var tmpDistance = _distance(node[tmp], node[enemy.target]);

          if(heuristic > tmpDistance){
            dest = tmp;
            heuristic = tmpDistance;
          }*/

        }
      
    }
    
   return false
  }



  function _distance(source, dest){
    return Math.sqrt(Math.pow(source.x*32-dest.x*32,2) + Math.pow(source.y*32-dest.y*32,2));
  }

  function heuristic(start, goal){
    ////console.log("start - goal : " + start + " " + goal);
    ////console.log(_distance(start, goal));
    return _distance(map.node[start], map.node[goal]);
  }
function reconstruct_path_bear(came_from, current){
    var isFound = false;
    if(came_from[current]!=undefined)
      isFound = true;
    if(isFound){
      reconstruct_path_bear(came_from, came_from[current]);  
    }
    path_bear.push(current);
  }

  var path_bear=[];
  var closedset_bear=[];
  var f_score_bear;
  var t_f_score_bear;

  function a_star_bear(start, goal){
    path_bear = new Array();
    closedset_bear = new Array();
    var openset = new Array(); openset.push(start);
    var came_from = new Array();
    var g_score = new Array();
    f_score_bear = new Array();
    g_score[start] = 0;
    f_score_bear[start] = g_score[start] + heuristic(start, goal)  ;
    while(openset.length != 0){
      var min = 100000000;
      var chosen = -1;
      var chosenIndex = -1;
      for (var i = openset.length - 1; i >= 0; i--) {
        if(min > f_score_bear[openset[i]] )
        {
          min = f_score_bear[openset[i]];
          chosen = openset[i];
          chosenIndex = i;
        } 
      };
      /*end choose*/
      var current = chosen;

      //console.log("current: " + current);

      if(current == goal){
        //console.log("selesai");
        return reconstruct_path_bear(came_from, goal);
      }

      openset.splice(chosenIndex, 1);
      closedset_bear.push(current);

      for(var i=0;i < map.neighbour[current].length; i++){
          //console.log("neighbour : " + map.neighbour[current][i].nex)
          var tmp = map.neighbour[current][i].nex;
          ////console.log(enemy.currentNode + " " + tmp + " " + i);
          ////console.log("Visited " + visited[tmp]);
          var t_g_score = g_score[current] + _distance(map.node[current], map.node[tmp]);

          t_f_score_bear = t_g_score + heuristic(tmp, goal);
          //console.log(t_g_score + " & " + t_f_score_bear);
          var isInclosedset_bear = false;
          for (var j =  closedset_bear.length - 1; j >= 0; j--) {
            if(closedset_bear[j] == tmp){
              isInclosedset_bear = true;
              break;
            } 
          };

          if(isInclosedset_bear && t_f_score_bear >= f_score_bear[tmp]){
            continue;
          }

          var isInOpenSet = false;
          for (var j =  openset.length - 1; j >= 0; j--) {
            if(openset[j] == tmp){
              isInOpenSet = true;
              break;
            } 
          };

          if(!isInOpenSet || t_f_score_bear < f_score_bear[tmp]){
            came_from[tmp] = current;
            g_score[tmp] = t_g_score;
            f_score_bear[tmp] = t_f_score_bear;
            //console.log("ftmp: "+ f_score_bear[tmp]);
            if(!isInOpenSet){
              //console.log("cek" + tmp);
              openset.push(tmp);
            }
          }
          /*if(visited[tmp] == 1) continue;
          var tmpDistance = _distance(node[tmp], node[enemy.target]);

          if(heuristic > tmpDistance){
            dest = tmp;
            heuristic = tmpDistance;
          }*/

        }
      
    }
    
   return false
  }
