const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//Song titles
const songs = ['kissmemore','Dollar bill','wind_it_up'];

//keep track of the songs
let songIndex = 2;

//Initailly load song info DOM
loadSong(songs[songIndex])

//update song details
function loadSong(song){
    title.innerHTML = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jfif`
}

function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}
function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

function prevSong(){}
function nextSong(){}
//Event listeners
playBtn.addEventListener('click',() => {
    const isPlaying = musicContainer.classList.contains('play')
    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
})

//change song events
prevBtn.addEventListener('click',prevSong)
nextBtn.addEventListener('click',nextSong)