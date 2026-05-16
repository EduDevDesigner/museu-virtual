/* ================= TRACK 1 MEGAFAUNA ================= */

const faunaPlayButton=document.getElementById("faunaPlayButton");

const faunaAudioLeftButton=document.getElementById("faunaAudioLeftButton");

const faunaAudioRightButton=document.getElementById("faunaAudioRightButton");

const audioFauna1=document.getElementById("audioFauna1");

const audioFauna2=document.getElementById("audioFauna2");

const faunaFog=document.getElementById("faunaFog");

const faunaGroup=document.getElementById("faunaGroup");

let faunaActive=false;

/* ================= INTERAÇÃO ================= */

faunaPlayButton.addEventListener("click",function(){

if(activeTrack!==1){return;}

faunaActive=!faunaActive;

if(faunaActive){

girarFauna();

subirNeblina();

}else{

faunaFog.setAttribute("opacity","0");

}

});

/* ================= GIRAR ================= */

function girarFauna(){

let rot=0;

let giro=addInterval(function(){

if(!faunaActive || activeTrack!==1){

clearInterval(giro);

return;

}

rot-=1;

faunaGroup.setAttribute("rotation","0 0 "+rot);

},30);

}

/* ================= NEBLINA ================= */

function subirNeblina(){

let op=0;

let fog=setInterval(function(){

if(!faunaActive || activeTrack!==1){

clearInterval(fog);

return;

}

if(op<0.45){

op+=0.01;

faunaFog.setAttribute("opacity",op);

}else{

clearInterval(fog);

}

},50);

}

/* ================= ÁUDIOS ================= */

faunaAudioLeftButton.addEventListener("click",function(){

audioFauna2.pause();

audioFauna2.currentTime=0;

if(audioFauna1.paused){

audioFauna1.play();

}else{

audioFauna1.pause();

}

});

faunaAudioRightButton.addEventListener("click",function(){

audioFauna1.pause();

audioFauna1.currentTime=0;

if(audioFauna2.paused){

audioFauna2.play();

}else{

audioFauna2.pause();

}

});