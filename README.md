GameEngine-PolarPoop
====================

Salah satu penerapan tugas dari matakuliah Game Engine. 
Game ini berjudul Polar Poop 

Judul : Polar Poop 2

----------------------------------------------------------------------

player.js:
Action : mengejar anjing sampai dapat(GOTCHA)
property :
-this.y
-this.x
-this.accel
-this.url
method :
-checkCollision(player, objek yg dicek) return boolean

----------------------------------------------------------------------

beruang.js :
Action : seek player pada range tertentu
property :
-this.x
-this.y
-this.dirX 
(1 jika ke kanan atau bawah dan -1 jika ke atas atau ke kiri) ??
-this.dirY
-this.accel
-this.url 
method :
-checkcollision(beruang, objek yang dicek) {return boolean}
-seek(beruang, objeck yang dicari)

----------------------------------------------------------------------

anjing.js (AI):
Action : flee dari player
Algoritma yang digunakan : A* tp dibalik bobotnya 
property :
-this.x
-this.y
-this.accelX 
(1 jika ke kanan atau bawah dan -1 jika ke atas atau ke kiri) ??
-this.accelY
-this.url 
method :
-flee(anjing, objeck yang dihindari) return object array jalur kabur

----------------------------------------------------------------------

poop.js

Action keluar pada posisi anjing dengan random waktu tertentu :
-this.x
-this.y
-menguap() // object poop akan menguap dan menghilang beriringan dengan waktu

----------------------------------------------------------------------

retakan.js
-this.x
-this.y
-pecah(player.x,player.y) // tile tertentu akan dapat pecah disetting sehingga ketika player menginjak tile tersebut akan retak dan pecah secara perlahan

----------------------------------------------------------------------

environment / object lain :
-arena.js 
-hati.js

masing-masing environment memiliki: 
property :
-this.x
-this.y
-this.url
method :
-draw()

----------------------------------------------------------------------

game.js-> implementasi menggunakan js yg udah dibuat diatas (level)

menu.js-> draw menu awal game start(play,how to play,about)


sprite :
-karakter
-anjing
-beruang
-retakan es
-tanda seru
-tanda tanya balon
-tembok
-air
-es(arena)

sound :
-background sound, sound effect
