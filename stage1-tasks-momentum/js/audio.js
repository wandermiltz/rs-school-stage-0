import playList from './playList.js'

const playBtn = document.querySelector('.play')
const playNextBtn = document.querySelector('.play-next')
const playPrevBtn = document.querySelector('.play-prev')
const playListContainer = document.querySelector('.play-list')

const audio = new Audio()
let playNum = 0
let isPlay = false

function playAudio() {
	audio.src = playList[playNum].src
	audio.currentTime = 0
	audio.play()
	isPlay = true

}

function pauseAudio() {
	audio.pause()
	isPlay = false
}

function toggleAudio() {
	if (!isPlay) {
		playAudio()
	} else {
		pauseAudio()
	}
}

function toggleAudioIcons() {
	if (!isPlay) {
		playBtn.classList.remove('pause')
	} else {
		playBtn.classList.add('pause')
	}
}

function getAudioPlayToggle() {
	toggleAudio()
	toggleAudioIcons()
}

function getAudioNext() {
	if (playNum == playList.length - 1) {
		playNum = 0
	} else {
		playNum += 1
	}
	playAudio()
	toggleAudioIcons()
}

function getAudioPrev() {
	if (playNum > 0) {
		playNum -= 1
	} else {
		playNum = playList.length - 1
	}
	playAudio()
	toggleAudioIcons()
}

playBtn.addEventListener('click', getAudioPlayToggle)
playNextBtn.addEventListener('click', getAudioNext)
playPrevBtn.addEventListener('click', getAudioPrev)
