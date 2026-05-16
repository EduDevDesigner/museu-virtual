/* ================= TRACK 0 ================= */

const velociPlayButton=document.getElementById("velociPlayButton");

const velociAudioLeftButton=document.getElementById("velociAudioLeftButton");

const velociAudioRightButton=document.getElementById("velociAudioRightButton");

const audioVeloci1=document.getElementById("audioVeloci1");

const audioVeloci2=document.getElementById("audioVeloci2");

const velociGroup=document.getElementById("velociGroup");

let velociActive=false;

/* ================= GIRAR ================= */

velociPlayButton.addEventListener("click",function(){

if(activeTrack!==0){return;}

velociActive=!velociActive;

if(velociActive){

girarVeloci();

}

});

function girarVeloci(){

let rot=0;

let giro=addInterval(function(){

if(!velociActive || activeTrack!==0){

clearInterval(giro);

return;

}

rot+=1;

velociGroup.setAttribute("rotation","0 0 "+rot);

},30);

}

/* ================= ÁUDIOS ================= */

velociAudioLeftButton.addEventListener("click",function(){

audioVeloci2.pause();

audioVeloci2.currentTime=0;

if(audioVeloci1.paused){

audioVeloci1.play();

}else{

audioVeloci1.pause();

}

});

velociAudioRightButton.addEventListener("click",function(){

audioVeloci1.pause();

audioVeloci1.currentTime=0;

if(audioVeloci2.paused){

audioVeloci2.play();

}else{

audioVeloci2.pause();

}

});