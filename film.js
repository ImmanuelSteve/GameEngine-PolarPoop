
    function film(){
      if(tic==10) player.x=1;
      if(tic==13) map.tileMap[3][0]=45;
      if(tic==16) map.tileMap[3][0]=46;
      if(tic==19) map.tileMap[3][0]=35;
      if(tic==22) map.tileMap[3][0]=36;
      if(tic==25) {
        map.tileMap[3][0]=72;
        map.tileMap[2][0]=72;
        map.tileMap[4][0]=72;
      }

      if(tic==20) player.animationFrames=player.animationFramesKiri;
      if(tic==30) player.animationFrames=player.animationFramesAtas;
      if(tic==40) player.animationFrames=player.animationFramesBawah;
      if(tic==50) player.animationFrames=player.animationFramesKanan;
      if(tic>50) {
        playFilm=false;
        flee();
      }

    }