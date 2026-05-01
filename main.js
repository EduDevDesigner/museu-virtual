let helice14bis = null;
let girandoHelice = false;

const message = document.getElementById("track-message");
const flyButton = document.getElementById("flyButton");
const audioLeftButton = document.getElementById("audioLeftButton");
const audioRightButton = document.getElementById("audioRightButton");
const aviao14bis = document.getElementById("aviao14bis");
const audioFly1 = document.getElementById("audioFly1");
const audioFly2 = document.getElementById("audioFly2");
const terrenoVideo = document.querySelector("#terrenoVideoAsset");
const audioHelice = document.getElementById("audioHelice");


aviao14bis.addEventListener("model-loaded", ()=>{

    const modelo = aviao14bis.getObject3D("mesh");

    modelo.traverse((node)=>{
        if(
            node.name.toLowerCase().includes("helice") ||
            node.name.toLowerCase().includes("propeller")
        ){
            helice14bis = node;
            console.log("HÉLICE ENCONTRADA:", node.name);
        }
    });

});

terrenoVideo.pause();
terrenoVideo.currentTime = 0;

audioFly1.volume = 1.0;
audioFly2.volume = 1.0;
audioHelice.volume = 0.8;

let velocidadeTerreno = 0;
let alturaAtual = 0.2;
let flyActive = false;
let target2Ativo = false;
let delayDecolagem = null;

const targets = document.querySelectorAll('[mindar-image-target]');

targets.forEach((target, index) => {

target.addEventListener("targetFound", () => {

message.classList.add("hidden");

if(index === 2){
flyButton.style.display = "block";
audioLeftButton.style.display = "block";
audioRightButton.style.display = "block";
target2Ativo = true;
audioHelice.play(); 
animarHelice();
}else{
flyButton.style.display = "none";
audioLeftButton.style.display = "none";
audioRightButton.style.display = "none";
target2Ativo = false;
}

});

target.addEventListener("targetLost", () => {

flyButton.style.display = "none";
audioLeftButton.style.display = "none";
audioRightButton.style.display = "none";

audioFly1.pause();
audioFly1.currentTime = 0;

audioFly2.pause();
audioFly2.currentTime = 0;
    
audioHelice.pause();
audioHelice.currentTime = 0;
    
pararHelice();

terrenoVideo.pause();
terrenoVideo.currentTime = 0;

clearTimeout(delayDecolagem);

target2Ativo = false;
flyActive = false;
alturaAtual = 0.2;
aviao14bis.setAttribute("position", "0 0 0.2");
velocidadeTerreno = 0;

message.classList.remove("hidden");

});

});

flyButton.addEventListener("click", toggleVoo);

function toggleVoo(){
if(!target2Ativo) return;

if(!flyActive){

flyActive = true;
terrenoVideo.play();
acelerarTerreno();

delayDecolagem = setTimeout(() => {
if(flyActive){
subirAviao();
}
}, 1500);

}else{

flyActive = false;
clearTimeout(delayDecolagem);
descerAviao();

}
}

function subirAviao(){
let subida = setInterval(() => {

if(!flyActive){
clearInterval(subida);
return;
}

if(alturaAtual < 0.8){
alturaAtual += 0.01;
aviao14bis.setAttribute("position", `0 0 ${alturaAtual}`);
}else{
clearInterval(subida);
planarAviao();
}

}, 30);
}

function planarAviao(){
let direcao = 1;

let planar = setInterval(() => {

if(!flyActive){
clearInterval(planar);
return;
}

alturaAtual += 0.003 * direcao;

if(alturaAtual > 0.85) direcao = -1;
if(alturaAtual < 0.75) direcao = 1;

aviao14bis.setAttribute("position", `0 0 ${alturaAtual}`);

}, 40);
}

function descerAviao(){
let descida = setInterval(() => {

if(alturaAtual > 0.2){
alturaAtual -= 0.01;
aviao14bis.setAttribute("position", `0 0 ${alturaAtual}`);
}else{
clearInterval(descida);
desacelerarTerreno();
}

}, 30);
}

function acelerarTerreno(){
let acelerar = setInterval(() => {

if(velocidadeTerreno < 0.0007){
velocidadeTerreno += 0.00002;
}else{
velocidadeTerreno = 0.0007;
clearInterval(acelerar);
}

}, 40);
}

function desacelerarTerreno(){
let reduzir = setInterval(() => {

if(velocidadeTerreno > 0){
velocidadeTerreno -= 0.00002;
}else{
velocidadeTerreno = 0;
terrenoVideo.pause();
terrenoVideo.currentTime = 0;
clearInterval(reduzir);
}

}, 40);
}

audioLeftButton.addEventListener("click", () => {

audioFly2.pause();
audioFly2.currentTime = 0;

if(audioFly1.paused){
audioFly1.play();
}else{
audioFly1.pause();
}

});

audioRightButton.addEventListener("click", () => {

audioFly1.pause();
audioFly1.currentTime = 0;

if(audioFly2.paused){
audioFly2.play();
}else{
audioFly2.pause();
}

});

//GIRAR HELICE
function animarHelice(){

    if(!helice14bis) return;

    girandoHelice = true;

    function loopHelice(){

        if(!girandoHelice) return;

        helice14bis.rotation.z += 0.8;

        requestAnimationFrame(loopHelice);
    }

    loopHelice();
}

function pararHelice(){
    girandoHelice = false;
}