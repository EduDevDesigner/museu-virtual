/* ================= TRACK 7 DOM PEDRO I ================= */

const dpedroPlayButton=document.getElementById("dpedroPlayButton");

const dpedroAudioLeftButton=document.getElementById("dpedroAudioLeftButton");

const dpedroAudioRightButton=document.getElementById("dpedroAudioRightButton");

const audioDPedro1=document.getElementById("audioDPedro1");

const audioDPedro2=document.getElementById("audioDPedro2");

const dpedroIVideo=document.querySelector("#dpedroIVideo");

/* ================= PLAY VIDEO ================= */

dpedroPlayButton.addEventListener("click",function(){

if(dpedroIVideo.paused){

dpedroIVideo.play();

}else{

dpedroIVideo.pause();

}

});

/* ================= ÁUDIOS ================= */

dpedroAudioLeftButton.addEventListener("click",function(){

audioDPedro2.pause();

audioDPedro2.currentTime=0;

if(audioDPedro1.paused){

audioDPedro1.play();

}else{

audioDPedro1.pause();

}

});

dpedroAudioRightButton.addEventListener("click",function(){

audioDPedro1.pause();

audioDPedro1.currentTime=0;

if(audioDPedro2.paused){

audioDPedro2.play();

}else{

audioDPedro2.pause();

}

});