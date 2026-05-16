/* ================= TRACK 9 TORRE ================= */

const torrePlayButton=document.getElementById("torrePlayButton");

const torreAudioLeftButton=document.getElementById("torreAudioLeftButton");

const torreAudioRightButton=document.getElementById("torreAudioRightButton");

const audioTorre1=document.getElementById("audioTorre1");

const audioTorre2=document.getElementById("audioTorre2");

const torreGroup=document.getElementById("torreGroup");

const torreLight=document.getElementById("torreLight");

let torreActive=false;

/* ================= INTERAÇÃO ================= */

torrePlayButton.addEventListener("click",function(){

if(activeTrack!==9){return;}

torreActive=!torreActive;

if(torreActive){

girarTorre();

acenderTorre();

}else{

if(torreLight){

torreLight.setAttribute("intensity","0");

}

}

});

/* ================= GIRAR ================= */

function girarTorre(){

let rot=0;

let giro=addInterval(function(){

if(!torreActive || activeTrack!==9){

clearInterval(giro);

return;

}

rot+=1;

torreGroup.setAttribute("rotation","0 0 "+rot);

},35);

}

/* ================= ILUMINAÇÃO ================= */

function acenderTorre(){

if(!torreLight){return;}

let luz=0;

let acender=setInterval(function(){

if(!torreActive || activeTrack!==9){

clearInterval(acender);

return;

}

if(luz<2.5){

luz+=0.05;

torreLight.setAttribute("intensity",luz);

}else{

clearInterval(acender);

}

},50);

}

/* ================= ÁUDIOS ================= */

torreAudioLeftButton.addEventListener("click",function(){

audioTorre2.pause();

audioTorre2.currentTime=0;

if(audioTorre1.paused){

audioTorre1.play();

}else{

audioTorre1.pause();

}

});

torreAudioRightButton.addEventListener("click",function(){

audioTorre1.pause();

audioTorre1.currentTime=0;

if(audioTorre2.paused){

audioTorre2.play();

}else{

audioTorre2.pause();

}

});