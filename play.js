console.log("welcome to spotify");
let audioElement = new Audio('ari_lmh.mp3');
let masterplay = document.getElementById("masterplay");
let myprogressbar=document.getElementById("myprogressbar");
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    }

});