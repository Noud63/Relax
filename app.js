const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTime = 10000                                // 10000 ms
const breatheTime = (totalTime / 5) * 2;               // 4000 ms
const holdTime = totalTime / 5                         // 2000 ms

breatheAnimation()                                     // Call function immediately

function breatheAnimation() {
   
    text.innerHTML = 'Breathe In!';
    container.className = 'container grow';            // or container.classList.add('grow')

    setTimeout(() => {                                 /* setTimeOut() calls function once after,
                                                        after a specified number of milliseconds */
        text.innerText = 'Hold your Breath!';                       //  After 4 seconds

        setTimeout(() => {
            text.innerText = 'breathe Out!';           // After 2 seconds
            container.className = 'container shrink';
        }, holdTime);

    }, breatheTime);
}

setInterval(() => {                                     // setInterval() calls the function continuously
    breatheAnimation()                                  // after every 10 sec
}, totalTime);


//Toggle between background sound 
const sound = document.querySelector('.sound')
const aud = document.querySelector('.icon2')
const picker = document.querySelectorAll('.play');

picker.forEach( el => {
    el.addEventListener( 'click', function() {
        sound.src = this.getAttribute("data-sound")
        aud.classList.add('icon')
        playSound()
    })
})


function playSound(){
    if(sound.paused){
        sound.play()
        sound.loop = true
    }else{
        sound.pause()
    }
}

aud.addEventListener('click', controlAudio)
function controlAudio() {
    aud.classList.toggle('icon')
    playSound()
    
}

//Toggle between themes
const video = document.querySelector('#underwaterVideo');
const gradient = document.querySelector('.gradient-circle');
const head = document.querySelector('.header');
const change = document.querySelector('.theme');

change.addEventListener('click', function(){
    
    if(!change.classList.contains('newTheme')){
        sound.src = "scuba.mp3"
        video.style.display = 'flex';
        head.classList.add('header2');
        change.classList.add('newTheme');
        gradient.classList.add('gradient-circle2')
        aud.classList.toggle('icon');
    }else if(change.classList.contains('newTheme')){
        sound.src = "scuba.mp3"
        video.style.display = 'none'
        head.classList.remove('header2');
        change.classList.remove('newTheme');
        gradient.classList.remove('gradient-circle2');
        aud.classList.toggle('icon');
    }
   
})

/*
var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};
*/
    

