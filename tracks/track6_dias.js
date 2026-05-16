/* ================= TRACK 6 HENRIQUE DIAS ================= */

const diasPlayButton=document.getElementById("diasPlayButton");

const diasAudioLeftButton=document.getElementById("diasAudioLeftButton");

const diasAudioRightButton=document.getElementById("diasAudioRightButton");

const audioDias1=document.getElementById("audioDias1");

const audioDias2=document.getElementById("audioDias2");

const diasVideo=document.querySelector("#diasVideo");

/* ================= PLAY VIDEO ================= */

diasPlayButton.addEventListener("click",function(){

if(diasVideo.paused){

diasVideo.play();

}else{

diasVideo.pause();

}

});

/* ================= ÁUDIOS ================= */

diasAudioLeftButton.addEventListener("click",function(){

audioDias2.pause();

audioDias2.currentTime=0;

if(audioDias1.paused){

audioDias1.play();

}else{

audioDias1.pause();

}

});

diasAudioRightButton.addEventListener("click",function(){

audioDias1.pause();

audioDias1.currentTime=0;

if(audioDias2.paused){

audioDias2.play();

}else{

audioDias2.pause();

}

});