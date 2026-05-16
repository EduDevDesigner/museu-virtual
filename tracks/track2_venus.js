/* ================= TRACK 2 VENUS ================= */

const venusPlayButton=document.getElementById("venusPlayButton");

const venusAudioLeftButton=document.getElementById("venusAudioLeftButton");

const venusAudioRightButton=document.getElementById("venusAudioRightButton");

const audioVenus1=document.getElementById("audioVenus1");

const audioVenus2=document.getElementById("audioVenus2");

const venusGroup=document.getElementById("venusGroup");

const venusLight=document.getElementById("venusLight");

let venusActive=false;

/* ================= INTERAÇÃO ================= */

venusPlayButton.addEventListener("click",function(){

if(activeTrack!==2){return;}

venusActive=!venusActive;

if(venusActive){

girarVenus();

iluminarVenus();

}else{

if(venusLight){

venusLight.setAttribute("intensity","0");

}

}

});

/* ================= GIRAR ================= */

function girarVenus(){

let rot=0;
    
let giro=addInterval(function(){

if(!venusActive || activeTrack!==2){

clearInterval(giro);

return;

}

rot+=1;

venusGroup.setAttribute("rotation","0 0 "+rot);

},35);

}

/* ================= ILUMINAÇÃO ================= */

function iluminarVenus(){

if(!venusLight){return;}

let luz=0;

let acender=setInterval(function(){

if(!venusActive || activeTrack!==2){

clearInterval(acender);

return;

}

if(luz<2.8){

luz+=0.05;

venusLight.setAttribute("intensity",luz);

}else{

clearInterval(acender);

}

},50);

}

/* ================= ÁUDIOS ================= */

venusAudioLeftButton.addEventListener("click",function(){

audioVenus2.pause();

audioVenus2.currentTime=0;

if(audioVenus1.paused){

audioVenus1.play();

}else{

audioVenus1.pause();

}

});

venusAudioRightButton.addEventListener("click",function(){

audioVenus1.pause();

audioVenus1.currentTime=0;

if(audioVenus2.paused){

audioVenus2.play();

}else{

audioVenus2.pause();

}

});