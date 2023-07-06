console.log("welcome to spotify");
let audioElement = new Audio('ari_lmh.mp3');
let masterplay = document.getElementById("masterplay");
let myprogressbar=document.getElementById("myprogressbar");
let songindex=0;
let songitem=Array.from(document.getElementsByClassName('songitem'));
let song=[

{songname:"Love me harder",filepath:'1.mp3',coverpath:"love_me_harder.png"},
{songname:"Positions",filepath:'2.mp3',coverpath:"positions.png"},
{songname:"No tears left to cry",filepath:'3.mp3',coverpath:"no_tears_left_to_cry.png"},
{songname:"7 rings",filepath:'4.mp3',coverpath:"7rings.png"},
{songname:"Breathin'",filepath:'5.mp3',coverpath:"breathin.png"},
{songname:"34-35",filepath:'6.mp3',coverpath:"3435.png"},
{songname:"Side to side",filepath:'7.mp3',coverpath:"side2side.png"}


];
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    }
    else
    {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    }

});

audioElement.addEventListener('timeupdate',()=>{
 progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
 myprogressbar.value= progress;
});

myprogressbar.addEventListener('change',()=>{
audioElement.currentTime=audioElement.duration*myprogressbar.value/100;
});
songitem.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=song[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText=song[i].songname;
}



);
const makeallplay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        })
    };
    
    
    
    

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplay();
        index=parseInt(e.target.id);
        document.getElementsByClassName('container').style.backgroundImage.src = `body_${index+1}.png`;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`${index+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
}



);