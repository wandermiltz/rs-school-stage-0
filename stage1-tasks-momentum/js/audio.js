import playList from './playList.js'

const playBtn = document.querySelector('.play')
const playNextBtn = document.querySelector('.play-next')
const playPrevBtn = document.querySelector('.play-prev')

const audio = new Audio()
let playNum = 0
let isPlay = false

function playAudio() {
	audio.src = playList[playNum].src
	audio.currentTime = 0
	audio.play()
	console.log(playNum)
}
function pauseAudio() {
	audio.pause()
}

function toggleAudio() {
	if (!isPlay) {
		playAudio()
		isPlay = true
		console.log('play')
	} else {
		pauseAudio()
		isPlay = false
		console.log('pause')
	}
}

function toggleAudioIcons() {
	if (!isPlay) {
		playBtn.classList.remove('pause')
	} else {
		playBtn.classList.add('pause')
	}
}

function getAudioNext() {

	if (playNum == playList.length - 1) {
		playNum = 0
		playAudio()
	} else {
		playNum += 1
		playAudio()
	}
}

function getAudioPrev() {
	if (playNum > 0) {
		playNum -= 1
		playAudio()
	} else {
		playNum = playList.length - 1
		playAudio()
	}
}

playBtn.addEventListener('click', toggleAudio)
playNextBtn.addEventListener('click', getAudioNext)
playPrevBtn.addEventListener('click', getAudioPrev)
playBtn.addEventListener('click', toggleAudioIcons)
