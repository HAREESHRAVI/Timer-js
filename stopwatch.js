const display = document.getElementById('clock');
let timer = null;
let startTime = 0;
let elapsedTime =0;
let isRunning  = false;

function start(){
if(!isRunning){
    startTime=Date.now()-elapsedTime;
    timer = setInterval(update,10);
    isRunning=true;
}
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime=Date.now()-startTime;
        isRunning=false;
    }
}

function reset(){
    clearInterval(timer);
    startTime=0;
    elapsedTime=0;
    isRunning=false;
clock.textContent = `00:00:00:00`


}

function update(){
const currentTime = Date.now();
elapsedTime = currentTime-startTime;
let hours = Math.floor(elapsedTime/(1000*60*60));
let minutes = Math.floor(elapsedTime/(1000*60)%60);
let seconds = Math.floor(elapsedTime/1000%60);
let milliseconds = Math.floor(elapsedTime%1000/10);
hours = String(hours).toString().padStart(2,"0");
minutes = String(minutes).toString().padStart(2,"0");
seconds = String(seconds).toString().padStart(2,"0");
milliseconds = String(milliseconds).toString().padStart(2,"0");

clock.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`

}