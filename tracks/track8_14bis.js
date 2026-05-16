/* ================= TRACK 8 14 BIS ================= */

const flyButton=document.getElementById("flyButton");

const audioLeftButton=document.getElementById("audioLeftButton");

const audioRightButton=document.getElementById("audioRightButton");

const aviao14bis=document.getElementById("aviao14bis");

const audioFly1=document.getElementById("audioFly1");

const audioFly2=document.getElementById("audioFly2");

const audioHelice=document.getElementById("audioHelice");

const terrenoVideo=document.querySelector("#terrenoVideoAsset");

/* ================= VARIÁVEIS ================= */

let flyActive=false;

let alturaAtual=0;

let velocidadeTerreno=0;

let delayDecolagem=null;

let helice14bis=null;

let girandoHelice=false;

audioHelice.volume=0.1;

/* ================= HÉLICE ================= */

const eixoHelice = new THREE.Vector3(1,0,0);

/* ================= BOTÃO ================= */

flyButton.addEventListener("click",toggleVoo);

/* ================= TOGGLE ================= */

function toggleVoo(){

if(activeTrack!==8){return;}

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

/* ================= SUBIR ================= */

function subirAviao(){

let subida=addInterval(function(){

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

/* ================= PLANAR ================= */

function planarAviao(){

let direcao=1;

let planar=addInterval(function(){

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

/* ================= DESCER ================= */

function descerAviao(){

let descida=addInterval(function(){

if(alturaAtual>0){

alturaAtual-=0.01;

aviao14bis.setAttribute("position","0 0 "+alturaAtual);

}else{

clearInterval(descida);

desacelerarTerreno();

}

},30);

}

/* ================= TERRENO ================= */

function acelerarTerreno(){

let acelerar=addInterval(function(){

if(velocidadeTerreno<0.0007){

velocidadeTerreno+=0.00002;

}else{

velocidadeTerreno=0.0007;

clearInterval(acelerar);

}

},40);

}

function desacelerarTerreno(){

let reduzir=addInterval(function(){

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

/* ================= ÁUDIOS ================= */

audioLeftButton.addEventListener("click",function(){

audioFly2.pause();

audioFly2.currentTime=0;

if(audioFly1.paused){

audioFly1.play();

}else{

audioFly1.pause();

}

});

audioRightButton.addEventListener("click",function(){

audioFly1.pause();

audioFly1.currentTime=0;

if(audioFly2.paused){

audioFly2.play();

}else{

audioFly2.pause();

}

});

/* ================= DETECTAR HÉLICE ================= */

aviao14bis.addEventListener("model-loaded", ()=>{

const modelo=aviao14bis.getObject3D("mesh");

modelo.traverse((node)=>{

if(

node.name.toLowerCase().includes("helice") ||

node.name.toLowerCase().includes("propeller")

){

helice14bis=node;

console.log("Hélice encontrada:",node.name);

}

});

});

/* ================= GIRAR HÉLICE ================= */

function animarHelice(){

if(!helice14bis)return;

girandoHelice=true;

function loopHelice(){

if(!girandoHelice)return;

helice14bis.rotateOnAxis(eixoHelice,1.0);

requestAnimationFrame(loopHelice);

}

loopHelice();

}

/* ================= PARAR HÉLICE ================= */

function pararHelice(){

girandoHelice=false;

}