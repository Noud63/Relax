const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTime = 15000                                // 10000 ms
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


//Toggle between background sounds 
const sound = document.querySelector('.sound')
const aud = document.querySelector('.icon2')
const picker = document.querySelectorAll('.play');

picker.forEach(el => {
    el.addEventListener('click', function () {
        sound.src = this.getAttribute("data-sound")
        aud.classList.add('icon')
        playSound()
    })
});


function playSound() {
    if (sound.paused) {
        sound.play()
        sound.loop = true
    } else {
        sound.pause()
    }
};


aud.addEventListener('click', controlAudio)
function controlAudio() {
    aud.classList.toggle('icon')
    playSound()
};


const video = document.querySelector('#underwaterVideo');
function videoPlay() {
    let videoPromise = video.play();
    if (videoPromise !== undefined) {
        videoPromise.then(() => {
            video.muted = false
            video.style.display = 'flex';
        }).catch(error => {
            console.log('No Video!')
        })
    }
};


//Toggle between themes
const gradient = document.querySelector('.gradient-circle');
const change = document.querySelector('.theme');

change.addEventListener('click', function () {
    sound.src = "sounds/scuba.mp3"
    if (change.classList.contains('theme')) {        // !change.classList.contains('newTheme')
        aud.classList.toggle('icon');
        video.style.display = 'flex';
        video.play();
        change.classList.add('newTheme');
        change.classList.remove('theme');
        gradient.classList.add('gradient-circle2')
    } else if (change.classList.contains('newTheme')) {
        aud.classList.toggle('icon');
        video.style.display = 'none'
        change.classList.remove('newTheme');
        change.classList.add('theme');
        gradient.classList.remove('gradient-circle2');
    }
});



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


