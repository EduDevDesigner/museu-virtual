const message=document.getElementById("track-message");

/* ================= TRACK 0 ================= */
const faunaPlayButton=document.getElementById("faunaPlayButton");
const faunaAudioLeftButton=document.getElementById("faunaAudioLeftButton");
const faunaAudioRightButton=document.getElementById("faunaAudioRightButton");
const audioFauna1=document.getElementById("audioFauna1");
const audioFauna2=document.getElementById("audioFauna2");
const mamuteModel=document.getElementById("mamuteModel");
const smilodonModel=document.getElementById("smilodonModel");
const faunaFog=document.getElementById("faunaFog");

/* ================= TRACK 1 ================= */
const monaPlayButton=document.getElementById("monaPlayButton");
const monaAudioLeftButton=document.getElementById("monaAudioLeftButton");
const monaAudioRightButton=document.getElementById("monaAudioRightButton");
const audioMona1=document.getElementById("audioMona1");
const audioMona2=document.getElementById("audioMona2");
const monalisaVideo=document.querySelector("#monalisaVideo");

/* ================= TRACK 2 ================= */
const flyButton=document.getElementById("flyButton");
const audioLeftButton=document.getElementById("audioLeftButton");
const audioRightButton=document.getElementById("audioRightButton");
const aviao14bis=document.getElementById("aviao14bis");
const audioFly1=document.getElementById("audioFly1");
const audioFly2=document.getElementById("audioFly2");
const audioHelice=document.getElementById("audioHelice");
const terrenoVideo=document.querySelector("#terrenoVideoAsset");

/* ================= TRACK 3 ================= */
const torrePlayButton=document.getElementById("torrePlayButton");
const torreAudioLeftButton=document.getElementById("torreAudioLeftButton");
const torreAudioRightButton=document.getElementById("torreAudioRightButton");
const audioTorre1=document.getElementById("audioTorre1");
const audioTorre2=document.getElementById("audioTorre2");
const torreModel=document.getElementById("torreModel");
const torreLight=document.getElementById("torreLight");

/* ================= TRACK 4 ================= */
const venusPlayButton=document.getElementById("venusPlayButton");
const venusAudioLeftButton=document.getElementById("venusAudioLeftButton");
const venusAudioRightButton=document.getElementById("venusAudioRightButton");
const audioVenus1=document.getElementById("audioVenus1");
const audioVenus2=document.getElementById("audioVenus2");
const venusModel=document.getElementById("venusModel");
const venusLight=document.getElementById("venusLight");

/* ================= VARIÁVEIS GERAIS ================= */
let activeTrack=-1;
let flyActive=false;
let alturaAtual=0;
let velocidadeTerreno=0;
let delayDecolagem=null;

/* ================= RESET BOTÕES ================= */
function hideAllButtons(){
document.querySelectorAll("button").forEach(btn=>{
btn.style.display="none";
});
}

/* ================= TARGET CONTROL ================= */
const targets=document.querySelectorAll("[mindar-image-target]");

targets.forEach((target,index)=>{

target.addEventListener("targetFound",()=>{

activeTrack=index;
message.classList.add("hidden");
hideAllButtons();

if(index===0){
faunaPlayButton.style.display="block";
faunaAudioLeftButton.style.display="block";
faunaAudioRightButton.style.display="block";
}

if(index===1){
monaPlayButton.style.display="block";
monaAudioLeftButton.style.display="block";
monaAudioRightButton.style.display="block";
}

if(index===2){
flyButton.style.display="block";
audioLeftButton.style.display="block";
audioRightButton.style.display="block";
audioHelice.play();
}

if(index===3){
torrePlayButton.style.display="block";
torreAudioLeftButton.style.display="block";
torreAudioRightButton.style.display="block";
}

if(index===4){
venusPlayButton.style.display="block";
venusAudioLeftButton.style.display="block";
venusAudioRightButton.style.display="block";
}

});

target.addEventListener("targetLost",()=>{

hideAllButtons();
message.classList.remove("hidden");

activeTrack=-1;

/* reset audios */
document.querySelectorAll("audio").forEach(a=>{
a.pause();
a.currentTime=0;
});

/* reset videos */
monalisaVideo.pause();
monalisaVideo.currentTime=0;
terrenoVideo.pause();
terrenoVideo.currentTime=0;

/* reset avião */
flyActive=false;
clearTimeout(delayDecolagem);
alturaAtual=0;
velocidadeTerreno=0;
aviao14bis.setAttribute("position","0 0 0");

});
});

/* ================= TRACK 1 MONALISA ================= */

monaPlayButton.addEventListener("click",function(){
if(monalisaVideo.paused){
monalisaVideo.play();
}else{
monalisaVideo.pause();
}
});

monaAudioLeftButton.addEventListener("click",function(){
audioMona2.pause();
audioMona2.currentTime=0;
if(audioMona1.paused){audioMona1.play();}
else{audioMona1.pause();}
});

monaAudioRightButton.addEventListener("click",function(){
audioMona1.pause();
audioMona1.currentTime=0;
if(audioMona2.paused){audioMona2.play();}
else{audioMona2.pause();}
});

/* ================= TRACK 2 14 BIS ================= */

flyButton.addEventListener("click",toggleVoo);

function toggleVoo(){

if(activeTrack!==2){return;}

if(!flyActive){

flyActive=true;
terrenoVideo.play();
acelerarTerreno();

delayDecolagem=setTimeout(function(){
if(flyActive){
subirAviao();
}
},1500);

}else{

flyActive=false;
clearTimeout(delayDecolagem);
descerAviao();

}
}

function subirAviao(){
let subida=setInterval(function(){

if(!flyActive){
clearInterval(subida);
return;
}

if(alturaAtual<0.8){
alturaAtual+=0.01;
aviao14bis.setAttribute("position","0 0 "+alturaAtual);
}else{
clearInterval(subida);
planarAviao();
}

},30);
}

function planarAviao(){
let direcao=1;

let planar=setInterval(function(){

if(!flyActive){
clearInterval(planar);
return;
}

alturaAtual+=0.003*direcao;

if(alturaAtual>0.85){direcao=-1;}
if(alturaAtual<0.75){direcao=1;}

aviao14bis.setAttribute("position","0 0 "+alturaAtual);

},40);
}

function descerAviao(){
let descida=setInterval(function(){

if(alturaAtual>0){
alturaAtual-=0.01;
aviao14bis.setAttribute("position","0 0 "+alturaAtual);
}else{
clearInterval(descida);
desacelerarTerreno();
}

},30);
}

function acelerarTerreno(){
let acelerar=setInterval(function(){
if(velocidadeTerreno<0.0007){
velocidadeTerreno+=0.00002;
}else{
velocidadeTerreno=0.0007;
clearInterval(acelerar);
}
},40);
}

function desacelerarTerreno(){
let reduzir=setInterval(function(){
if(velocidadeTerreno>0){
velocidadeTerreno-=0.00002;
}else{
velocidadeTerreno=0;
terrenoVideo.pause();
terrenoVideo.currentTime=0;
clearInterval(reduzir);
}
},40);
}

audioLeftButton.addEventListener("click",function(){
audioFly2.pause();
audioFly2.currentTime=0;
if(audioFly1.paused){audioFly1.play();}
else{audioFly1.pause();}
});

audioRightButton.addEventListener("click",function(){
audioFly1.pause();
audioFly1.currentTime=0;
if(audioFly2.paused){audioFly2.play();}
else{audioFly2.pause();}
});

let faunaActive=false;
let torreActive=false;
let venusActive=false;

/* ================= TRACK 0 MEGAFAUNA ================= */

faunaPlayButton.addEventListener("click",function(){

if(activeTrack!==0){return;}

faunaActive=!faunaActive;

if(faunaActive){
girarFauna();
subirNeblina();
}else{
faunaFog.setAttribute("opacity","0");
}
});

function girarFauna(){

let rot=0;

let giro=setInterval(function(){

if(!faunaActive || activeTrack!==0){
clearInterval(giro);
return;
}

rot+=1;

faunaGroup.setAttribute("rotation","0 0 "+rot);


},30);
}

function subirNeblina(){

let op=0;

let fog=setInterval(function(){

if(!faunaActive || activeTrack!==0){
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

faunaAudioLeftButton.addEventListener("click",function(){
audioFauna2.pause();
audioFauna2.currentTime=0;
if(audioFauna1.paused){audioFauna1.play();}
else{audioFauna1.pause();}
});

faunaAudioRightButton.addEventListener("click",function(){
audioFauna1.pause();
audioFauna1.currentTime=0;
if(audioFauna2.paused){audioFauna2.play();}
else{audioFauna2.pause();}
});

/* ================= TRACK 3 TORRE MALAKOFF ================= */

torrePlayButton.addEventListener("click",function(){

if(activeTrack!==3){return;}

torreActive=!torreActive;

if(torreActive){
girarTorre();
acenderTorre();
}else{
torreLight.setAttribute("intensity","0");
}
});

function girarTorre(){

let rot=0;

let giro=setInterval(function(){

if(!torreActive || activeTrack!==3){
clearInterval(giro);
return;
}

rot+=1;
torreGroup.setAttribute("rotation","0 0 "+rot);

},35);
}

function acenderTorre(){

let luz=0;

let acender=setInterval(function(){

if(!torreActive || activeTrack!==3){
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

torreAudioLeftButton.addEventListener("click",function(){
audioTorre2.pause();
audioTorre2.currentTime=0;
if(audioTorre1.paused){audioTorre1.play();}
else{audioTorre1.pause();}
});

torreAudioRightButton.addEventListener("click",function(){
audioTorre1.pause();
audioTorre1.currentTime=0;
if(audioTorre2.paused){audioTorre2.play();}
else{audioTorre2.pause();}
});

/* ================= TRACK 4 VENUS ================= */

venusPlayButton.addEventListener("click",function(){

if(activeTrack!==4){return;}

venusActive=!venusActive;

if(venusActive){
girarVenus();
iluminarVenus();
}else{
venusLight.setAttribute("intensity","0");
}
});

function girarVenus(){

let rot=0;

let giro=setInterval(function(){

if(!venusActive || activeTrack!==4){
clearInterval(giro);
return;
}

rot+=1;
venusGroup.setAttribute("rotation","0 0 "+rot);

},35);
}

function iluminarVenus(){

let luz=0;

let acender=setInterval(function(){

if(!venusActive || activeTrack!==4){
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

venusAudioLeftButton.addEventListener("click",function(){
audioVenus2.pause();
audioVenus2.currentTime=0;
if(audioVenus1.paused){audioVenus1.play();}
else{audioVenus1.pause();}
});

venusAudioRightButton.addEventListener("click",function(){
audioVenus1.pause();
audioVenus1.currentTime=0;
if(audioVenus2.paused){audioVenus2.play();}
else{audioVenus2.pause();}
});