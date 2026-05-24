const message=document.getElementById("track-message");

/* ================= SOM CLICK ================= */

const clickSound=document.getElementById("clickSound");

function tocarClick(){

clickSound.pause();

clickSound.currentTime=0;

clickSound.play().catch(()=>{});

}

/* =====================================================
TRACK 0 — VELOCIRAPTOR
===================================================== */

const velociPlayButton=document.getElementById("velociPlayButton");
const velociAudioLeftButton=document.getElementById("velociAudioLeftButton");
const velociAudioRightButton=document.getElementById("velociAudioRightButton");

const velociModel=document.getElementById("velociModel");

const audioVeloci1=document.getElementById("audioVeloci1");
const audioVeloci2=document.getElementById("audioVeloci2");
const audioVelociRoar=document.getElementById("audioVelociRoar");

const velociGroup=document.getElementById("velociGroup");

/* =====================================================
TRACK 1 — MEGAFAUNA
===================================================== */

const faunaPlayButton=document.getElementById("faunaPlayButton");
const faunaAudioLeftButton=document.getElementById("faunaAudioLeftButton");
const faunaAudioRightButton=document.getElementById("faunaAudioRightButton");

const audioFauna1=document.getElementById("audioFauna1");
const audioFauna2=document.getElementById("audioFauna2");

const mamuteModel=document.getElementById("mamuteModel");

const faunaFog=document.getElementById("faunaFog");
const faunaGroup=document.getElementById("faunaGroup");

const audioElefante=document.getElementById("audioElefante");

/* =====================================================
TRACK 2 — VENUS
===================================================== */

const venusPlayButton=document.getElementById("venusPlayButton");
const venusAudioLeftButton=document.getElementById("venusAudioLeftButton");
const venusAudioRightButton=document.getElementById("venusAudioRightButton");

const audioVenus1=document.getElementById("audioVenus1");
const audioVenus2=document.getElementById("audioVenus2");

const venusGroup=document.getElementById("venusGroup");
const venusLight=document.getElementById("venusLight");

/* =====================================================
TRACK 3 — VOGELHERD
===================================================== */

const vogelPlayButton=document.getElementById("vogelPlayButton");
const vogelAudioLeftButton=document.getElementById("vogelAudioLeftButton");
const vogelAudioRightButton=document.getElementById("vogelAudioRightButton");

const audioVogel1=document.getElementById("audioVogel1");
const audioVogel2=document.getElementById("audioVogel2");

const vogelherdGroup=document.getElementById("vogelherdGroup");

/* =====================================================
TRACK 4 — COLOMBO
===================================================== */

const colomboPlayButton=document.getElementById("colomboPlayButton");
const colomboAudioLeftButton=document.getElementById("colomboAudioLeftButton");
const colomboAudioRightButton=document.getElementById("colomboAudioRightButton");

const audioColombo1=document.getElementById("audioColombo1");
const audioColombo2=document.getElementById("audioColombo2");

const colomboVideo=document.querySelector("#colomboVideo");

/* =====================================================
TRACK 5 — MONALISA
===================================================== */

const monaPlayButton=document.getElementById("monaPlayButton");
const monaAudioLeftButton=document.getElementById("monaAudioLeftButton");
const monaAudioRightButton=document.getElementById("monaAudioRightButton");

const audioMona1=document.getElementById("audioMona1");
const audioMona2=document.getElementById("audioMona2");

const monalisaVideo=document.querySelector("#monalisaVideo");

/* =====================================================
TRACK 6 — HENRIQUE DIAS
===================================================== */

const diasPlayButton=document.getElementById("diasPlayButton");
const diasAudioLeftButton=document.getElementById("diasAudioLeftButton");
const diasAudioRightButton=document.getElementById("diasAudioRightButton");

const audioDias1=document.getElementById("audioDias1");
const audioDias2=document.getElementById("audioDias2");

const diasVideo=document.querySelector("#diasVideo");

/* =====================================================
TRACK 7 — DOM PEDRO
===================================================== */

const dpedroPlayButton=document.getElementById("dpedroPlayButton");
const dpedroAudioLeftButton=document.getElementById("dpedroAudioLeftButton");
const dpedroAudioRightButton=document.getElementById("dpedroAudioRightButton");

const audioDPedro1=document.getElementById("audioDPedro1");
const audioDPedro2=document.getElementById("audioDPedro2");

const dpedroIVideo=document.querySelector("#dpedroIVideo");

/* =====================================================
TRACK 8 — 14 BIS
===================================================== */

const flyButton=document.getElementById("flyButton");

const audioLeftButton=document.getElementById("audioLeftButton");
const audioRightButton=document.getElementById("audioRightButton");

const aviao14bis=document.getElementById("aviao14bis");

const audioFly1=document.getElementById("audioFly1");
const audioFly2=document.getElementById("audioFly2");

const audioHelice=document.getElementById("audioHelice");

const terrenoVideo=document.querySelector("#terrenoVideoAsset");

/* =====================================================
TRACK 9 — TORRE
===================================================== */

const torrePlayButton=document.getElementById("torrePlayButton");
const torreAudioLeftButton=document.getElementById("torreAudioLeftButton");
const torreAudioRightButton=document.getElementById("torreAudioRightButton");

const audioTorre1=document.getElementById("audioTorre1");
const audioTorre2=document.getElementById("audioTorre2");

const torreGroup=document.getElementById("torreGroup");
const torreLight=document.getElementById("torreLight");

/* =====================================================
MENU HAMBURGER
===================================================== */

const menuToggleButton=
document.getElementById("menuToggleButton");

let menuOpen=false;

/* =====================================================
VARIÁVEIS
===================================================== */

let activeTrack=-1;

let flyActive=false;
let faunaActive=false;
let velociActive=false;
let venusActive=false;
let vogelActive=false;
let torreActive=false;

let alturaAtual=0;
let velocidadeTerreno=0;

let delayDecolagem=null;

audioHelice.volume=0.1;

/* =====================================================
ILUMINAÇÃO
===================================================== */

function ativarBotao(botao){

botao.classList.add("btn-active");

}

function desativarBotao(botao){

botao.classList.remove("btn-active");

}

function resetarBotoesTrack(
botaoCentral,
botaoEsquerdo,
botaoDireito
){

desativarBotao(botaoCentral);
desativarBotao(botaoEsquerdo);
desativarBotao(botaoDireito);

}

/* =====================================================
ÁUDIO BOTÕES
===================================================== */

function controlarAudio(
audioAtual,
audioOposto,
botaoAtual,
botaoOposto
){

audioOposto.pause();
audioOposto.currentTime=0;

desativarBotao(botaoOposto);

if(audioAtual.paused){

audioAtual.play();

ativarBotao(botaoAtual);

}else{

audioAtual.pause();
audioAtual.currentTime=0;

desativarBotao(botaoAtual);

}

audioAtual.onended=function(){

desativarBotao(botaoAtual);

};

}

/* =====================================================
BOTÃO CENTRAL
===================================================== */

function controlarBotaoCentral(
estadoAtual,
botaoCentral
){

estadoAtual=!estadoAtual;

if(estadoAtual){

ativarBotao(botaoCentral);

}else{

desativarBotao(botaoCentral);

}

return estadoAtual;

}

/* =====================================================
RESET BOTÕES
===================================================== */

function hideAllButtons(){

document.querySelectorAll("button").forEach(btn=>{

if(
btn.id==="menuToggleButton" ||
btn.id==="finalButtonTop"
){
return;
}

btn.style.display="none";

});

}

/* =====================================================
SOM EM TODOS OS BOTÕES
===================================================== */

document.querySelectorAll("button").forEach(botao=>{

botao.addEventListener("click",()=>{

tocarClick();

});

});

/* =====================================================
TARGETS
===================================================== */

const targets=document.querySelectorAll("[mindar-image-target]");

targets.forEach((target,index)=>{

target.addEventListener("targetFound",()=>{

registrarTrack(index);

activeTrack=index;

message.classList.add("hidden");

menuToggleButton.style.display="block";

hideAllButtons();

if(index===0){

velociPlayButton.style.display="block";
velociAudioLeftButton.style.display="block";
velociAudioRightButton.style.display="block";

}

if(index===1){

faunaPlayButton.style.display="block";
faunaAudioLeftButton.style.display="block";
faunaAudioRightButton.style.display="block";

}

if(index===2){

venusPlayButton.style.display="block";
venusAudioLeftButton.style.display="block";
venusAudioRightButton.style.display="block";

}

if(index===3){

vogelPlayButton.style.display="block";
vogelAudioLeftButton.style.display="block";
vogelAudioRightButton.style.display="block";

}

if(index===4){

colomboPlayButton.style.display="block";
colomboAudioLeftButton.style.display="block";
colomboAudioRightButton.style.display="block";

}

if(index===5){

monaPlayButton.style.display="block";
monaAudioLeftButton.style.display="block";
monaAudioRightButton.style.display="block";

}

if(index===6){

diasPlayButton.style.display="block";
diasAudioLeftButton.style.display="block";
diasAudioRightButton.style.display="block";

}

if(index===7){

dpedroPlayButton.style.display="block";
dpedroAudioLeftButton.style.display="block";
dpedroAudioRightButton.style.display="block";

}

if(index===8){

flyButton.style.display="block";

audioLeftButton.style.display="block";
audioRightButton.style.display="block";

audioHelice.play();

}

if(index===9){

torrePlayButton.style.display="block";
torreAudioLeftButton.style.display="block";
torreAudioRightButton.style.display="block";

}

});

target.addEventListener("targetLost",()=>{

activeTrack=-1;

message.classList.remove("hidden");

hideAllButtons();

menuOpen=false;

document.body.classList.remove("menu-open");

menuToggleButton.innerHTML="☰";

menuToggleButton.style.display="none";

flyActive=false;
faunaActive=false;
velociActive=false;
venusActive=false;
vogelActive=false;
torreActive=false;

resetarBotoesTrack(
flyButton,
audioLeftButton,
audioRightButton
);

resetarBotoesTrack(
faunaPlayButton,
faunaAudioLeftButton,
faunaAudioRightButton
);

resetarBotoesTrack(
velociPlayButton,
velociAudioLeftButton,
velociAudioRightButton
);

resetarBotoesTrack(
venusPlayButton,
venusAudioLeftButton,
venusAudioRightButton
);

resetarBotoesTrack(
vogelPlayButton,
vogelAudioLeftButton,
vogelAudioRightButton
);

resetarBotoesTrack(
torrePlayButton,
torreAudioLeftButton,
torreAudioRightButton
);

document.querySelectorAll("audio").forEach(a=>{

a.pause();
a.currentTime=0;

});

if(colomboVideo){

colomboVideo.pause();
colomboVideo.currentTime=0;

}

if(monalisaVideo){

monalisaVideo.pause();
monalisaVideo.currentTime=0;

}

if(diasVideo){

diasVideo.pause();
diasVideo.currentTime=0;

}

if(dpedroIVideo){

dpedroIVideo.pause();
dpedroIVideo.currentTime=0;

}

alturaAtual=0;

velocidadeTerreno=0;

clearTimeout(delayDecolagem);

aviao14bis.setAttribute(
"position",
"0 0 0"
);

});

});

/* =====================================================
MENU HAMBURGER
===================================================== */

menuToggleButton.addEventListener("click",()=>{

menuOpen=!menuOpen;

if(menuOpen){

document.body.classList.add("menu-open");

menuToggleButton.innerHTML="✕";

}else{

document.body.classList.remove("menu-open");

menuToggleButton.innerHTML="☰";

}

});

/* =====================================================
TRACK 0 — VELOCIRAPTOR
===================================================== */

velociPlayButton.addEventListener("click",function(){

if(activeTrack!==0){return;}

velociActive=controlarBotaoCentral(
velociActive,
velociPlayButton
);

if(velociActive){

velociModel.setAttribute(
"animation-mixer",
"loop: pingpong"
);

audioVelociRoar.currentTime=0;
audioVelociRoar.play();

girarVeloci();

}else{

velociModel.removeAttribute(
"animation-mixer"
);

audioVelociRoar.pause();
audioVelociRoar.currentTime=0;

}

});

velociAudioLeftButton.addEventListener("click",function(){

controlarAudio(
audioVeloci1,
audioVeloci2,
velociAudioLeftButton,
velociAudioRightButton
);

});

velociAudioRightButton.addEventListener("click",function(){

controlarAudio(
audioVeloci2,
audioVeloci1,
velociAudioRightButton,
velociAudioLeftButton
);

});

function girarVeloci(){

let rot=180;

let giro=setInterval(function(){

if(!velociActive || activeTrack!==0){

clearInterval(giro);
return;

}

rot+=1;

velociGroup.setAttribute(
"rotation",
"0 0 "+rot
);

},30);

}

/* =====================================================
TRACK 1 — FAUNA
===================================================== */

faunaPlayButton.addEventListener("click",function(){

if(activeTrack!==1){return;}

faunaActive=controlarBotaoCentral(
faunaActive,
faunaPlayButton
);

if(faunaActive){

mamuteModel.setAttribute(
"animation-mixer",
"loop: pingpong"
);

audioElefante.currentTime=0;
audioElefante.play();

girarFauna();

}else{

mamuteModel.removeAttribute(
"animation-mixer"
);

audioElefante.pause();
audioElefante.currentTime=0;

}

});

faunaAudioLeftButton.addEventListener("click",function(){

controlarAudio(
audioFauna1,
audioFauna2,
faunaAudioLeftButton,
faunaAudioRightButton
);

});

faunaAudioRightButton.addEventListener("click",function(){

controlarAudio(
audioFauna2,
audioFauna1,
faunaAudioRightButton,
faunaAudioLeftButton
);

});

function girarFauna(){

let rot=-90;

let giro=setInterval(function(){

if(!faunaActive || activeTrack!==1){

clearInterval(giro);
return;

}

rot-=1;

faunaGroup.setAttribute(
"rotation",
"0 0 "+rot
);

},30);

}

/* =====================================================
TRACK 2 — VENUS
===================================================== */

venusPlayButton.addEventListener("click",function(){

if(activeTrack!==2){return;}

venusActive=controlarBotaoCentral(
venusActive,
venusPlayButton
);

if(venusActive){

girarVenus();

}else{

venusLight.setAttribute("intensity","0");

}

});

venusAudioLeftButton.addEventListener("click",function(){

controlarAudio(
audioVenus1,
audioVenus2,
venusAudioLeftButton,
venusAudioRightButton
);

});

venusAudioRightButton.addEventListener("click",function(){

controlarAudio(
audioVenus2,
audioVenus1,
venusAudioRightButton,
venusAudioLeftButton
);

});

function girarVenus(){

let rot=0;

let giro=setInterval(function(){

if(!venusActive || activeTrack!==2){

clearInterval(giro);
return;

}

rot+=1;

venusGroup.setAttribute(
"rotation",
"0 0 "+rot
);

},30);

}

/* =====================================================
TRACK 3 — VOGELHERD
===================================================== */

vogelPlayButton.addEventListener("click",function(){

if(activeTrack!==3){return;}

vogelActive=controlarBotaoCentral(
vogelActive,
vogelPlayButton
);

if(vogelActive){

girarVogel();

}

});

vogelAudioLeftButton.addEventListener("click",function(){

controlarAudio(
audioVogel1,
audioVogel2,
vogelAudioLeftButton,
vogelAudioRightButton
);

});

vogelAudioRightButton.addEventListener("click",function(){

controlarAudio(
audioVogel2,
audioVogel1,
vogelAudioRightButton,
vogelAudioLeftButton
);

});

function girarVogel(){

let rot=0;

let giro=setInterval(function(){

if(!vogelActive || activeTrack!==3){

clearInterval(giro);
return;

}

rot-=1;

vogelherdGroup.setAttribute(
"rotation",
"0 0 "+rot
);

},30);

}

/* =====================================================
TRACK 4 — COLOMBO
===================================================== */

colomboPlayButton.addEventListener("click",function(){

if(colomboVideo.paused){

colomboVideo.play();

ativarBotao(colomboPlayButton);

}else{

colomboVideo.pause();

desativarBotao(colomboPlayButton);

}

});

colomboVideo.addEventListener("ended",function(){

desativarBotao(colomboPlayButton);

});

colomboAudioLeftButton.addEventListener("click",function(){

controlarAudio(
audioColombo1,
audioColombo2,
colomboAudioLeftButton,
colomboAudioRightButton
);

});

colomboAudioRightButton.addEventListener("click",function(){

controlarAudio(
audioColombo2,
audioColombo1,
colomboAudioRightButton,
colomboAudioLeftButton
);

});

/* =====================================================
TRACK 5 — MONALISA
===================================================== */

monaPlayButton.addEventListener("click",function(){

if(monalisaVideo.paused){

monalisaVideo.play();

ativarBotao(monaPlayButton);

}else{

monalisaVideo.pause();

desativarBotao(monaPlayButton);

}

});

monalisaVideo.addEventListener("ended",function(){

desativarBotao(monaPlayButton);

});

monaAudioLeftButton.addEventListener("click",function(){

controlarAudio(
audioMona1,
audioMona2,
monaAudioLeftButton,
monaAudioRightButton
);

});

monaAudioRightButton.addEventListener("click",function(){

controlarAudio(
audioMona2,
audioMona1,
monaAudioRightButton,
monaAudioLeftButton
);

});

/* =====================================================
TRACK 6 — HENRIQUE DIAS
===================================================== */

diasPlayButton.addEventListener("click",function(){

if(diasVideo.paused){

diasVideo.play();

ativarBotao(diasPlayButton);

}else{

diasVideo.pause();

desativarBotao(diasPlayButton);

}

});

diasVideo.addEventListener("ended",function(){

desativarBotao(diasPlayButton);

});

diasAudioLeftButton.addEventListener("click",function(){

controlarAudio(
audioDias1,
audioDias2,
diasAudioLeftButton,
diasAudioRightButton
);

});

diasAudioRightButton.addEventListener("click",function(){

controlarAudio(
audioDias2,
audioDias1,
diasAudioRightButton,
diasAudioLeftButton
);

});

/* =====================================================
TRACK 7 — DOM PEDRO
===================================================== */

dpedroPlayButton.addEventListener("click",function(){

if(dpedroIVideo.paused){

dpedroIVideo.play();

ativarBotao(dpedroPlayButton);

}else{

dpedroIVideo.pause();

desativarBotao(dpedroPlayButton);

}

});

dpedroIVideo.addEventListener("ended",function(){

desativarBotao(dpedroPlayButton);

});

dpedroAudioLeftButton.addEventListener("click",function(){

controlarAudio(
audioDPedro1,
audioDPedro2,
dpedroAudioLeftButton,
dpedroAudioRightButton
);

});

dpedroAudioRightButton.addEventListener("click",function(){

controlarAudio(
audioDPedro2,
audioDPedro1,
dpedroAudioRightButton,
dpedroAudioLeftButton
);

});

/* =====================================================
TRACK 8 — AVIÃO
===================================================== */

flyButton.addEventListener("click",function(){

if(activeTrack!==8){return;}

flyActive=controlarBotaoCentral(
flyActive,
flyButton
);

if(flyActive){

terrenoVideo.play();

acelerarTerreno();

delayDecolagem=setTimeout(function(){

if(flyActive){

subirAviao();

}

},1500);

}else{

clearTimeout(delayDecolagem);

descerAviao();

}

});

audioLeftButton.addEventListener("click",function(){

controlarAudio(
audioFly1,
audioFly2,
audioLeftButton,
audioRightButton
);

});

audioRightButton.addEventListener("click",function(){

controlarAudio(
audioFly2,
audioFly1,
audioRightButton,
audioLeftButton
);

});

/* =====================================================
TRACK 9 — TORRE
===================================================== */

torrePlayButton.addEventListener("click",function(){

if(activeTrack!==9){return;}

torreActive=controlarBotaoCentral(
torreActive,
torrePlayButton
);

if(torreActive){

girarTorre();

}else{

torreLight.setAttribute("intensity","0");

}

});

torreAudioLeftButton.addEventListener("click",function(){

controlarAudio(
audioTorre1,
audioTorre2,
torreAudioLeftButton,
torreAudioRightButton
);

});

torreAudioRightButton.addEventListener("click",function(){

controlarAudio(
audioTorre2,
audioTorre1,
torreAudioRightButton,
torreAudioLeftButton
);

});

function girarTorre(){

let rot=0;

let giro=setInterval(function(){

if(!torreActive || activeTrack!==9){

clearInterval(giro);
return;

}

rot+=1;

torreGroup.setAttribute(
"rotation",
"0 0 "+rot
);

},35);

}

/* =====================================================
VOO
===================================================== */

function subirAviao(){

let subida=setInterval(function(){

if(!flyActive){

clearInterval(subida);
return;

}

if(alturaAtual<0.8){

alturaAtual+=0.01;

aviao14bis.setAttribute(
"position",
"0 0 "+alturaAtual
);

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

if(alturaAtual>0.85){

direcao=-1;

}

if(alturaAtual<0.75){

direcao=1;

}

aviao14bis.setAttribute(
"position",
"0 0 "+alturaAtual
);

},40);

}

function descerAviao(){

let descida=setInterval(function(){

if(alturaAtual>0){

alturaAtual-=0.01;

aviao14bis.setAttribute(
"position",
"0 0 "+alturaAtual
);

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

/* =====================================================
CONTADOR TRACKS
===================================================== */

const progressCount=document.getElementById("progressCount");

const finalButtonTop=
document.getElementById("finalButtonTop");

const visitedTracks=new Set();

const totalTracks=10;

function registrarTrack(index){

if(visitedTracks.has(index)){
return;
}

visitedTracks.add(index);

progressCount.innerText=
visitedTracks.size;

if(visitedTracks.size>=totalTracks){

mostrarMensagemFinal();

}

}

function mostrarMensagemFinal(){

finalButtonTop.style.display="block";

}

finalButtonTop.addEventListener("click",function(){

window.location.href="quiz.html";

});