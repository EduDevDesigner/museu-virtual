const monaPlayButton=document.getElementById("monaPlayButton");

const monaAudioLeftButton=document.getElementById("monaAudioLeftButton");

const monaAudioRightButton=document.getElementById("monaAudioRightButton");

const audioMona1=document.getElementById("audioMona1");

const audioMona2=document.getElementById("audioMona2");

const monalisaVideo=document.querySelector("#monalisaVideo");

/* PLAY VIDEO */

monaPlayButton.addEventListener("click",function(){

if(monalisaVideo.paused){

monalisaVideo.play();

}else{

monalisaVideo.pause();

}

});

/* ÁUDIOS */

monaAudioLeftButton.addEventListener("click",function(){

audioMona2.pause();

audioMona2.currentTime=0;

if(audioMona1.paused){

audioMona1.play();

}else{

audioMona1.pause();

}

});

monaAudioRightButton.addEventListener("click",function(){

audioMona1.pause();

audioMona1.currentTime=0;

if(audioMona2.paused){

audioMona2.play();

}else{

audioMona2.pause();

}

});