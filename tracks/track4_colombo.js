const colomboPlayButton=document.getElementById("colomboPlayButton");

const colomboAudioLeftButton=document.getElementById("colomboAudioLeftButton");

const colomboAudioRightButton=document.getElementById("colomboAudioRightButton");

const audioColombo1=document.getElementById("audioColombo1");

const audioColombo2=document.getElementById("audioColombo2");

const colomboVideo=document.querySelector("#colomboVideo");

/* PLAY VIDEO */

colomboPlayButton.addEventListener("click",function(){

if(colomboVideo.paused){

colomboVideo.play();

}else{

colomboVideo.pause();

}

});

/* ÁUDIOS */

colomboAudioLeftButton.addEventListener("click",function(){

audioColombo2.pause();

audioColombo2.currentTime=0;

if(audioColombo1.paused){

audioColombo1.play();

}else{

audioColombo1.pause();

}

});

colomboAudioRightButton.addEventListener("click",function(){

audioColombo1.pause();

audioColombo1.currentTime=0;

if(audioColombo2.paused){

audioColombo2.play();

}else{

audioColombo2.pause();

}

});