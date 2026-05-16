/* ================= TRACK 3 ================= */

const vogelPlayButton=document.getElementById("vogelPlayButton");

const vogelAudioLeftButton=document.getElementById("vogelAudioLeftButton");

const vogelAudioRightButton=document.getElementById("vogelAudioRightButton");

const audioVogel1=document.getElementById("audioVogel1");

const audioVogel2=document.getElementById("audioVogel2");

const vogelherdGroup=document.getElementById("vogelherdGroup");

let vogelActive=false;

/* ================= GIRAR ================= */

vogelPlayButton.addEventListener("click",function(){

if(activeTrack!==3){return;}

vogelActive=!vogelActive;

if(vogelActive){

girarVogel();

}

});

function girarVogel(){

let rot=0;

let giro=addInterval(function(){

if(!vogelActive || activeTrack!==3){

clearInterval(giro);

return;

}

rot-=1;

vogelherdGroup.setAttribute("rotation","0 0 "+rot);

},30);

}

/* ================= ÁUDIOS ================= */

vogelAudioLeftButton.addEventListener("click",function(){

audioVogel2.pause();

audioVogel2.currentTime=0;

if(audioVogel1.paused){

audioVogel1.play();

}else{

audioVogel1.pause();

}

});

vogelAudioRightButton.addEventListener("click",function(){

audioVogel1.pause();

audioVogel1.currentTime=0;

if(audioVogel2.paused){

audioVogel2.play();

}else{

audioVogel2.pause();

}

});