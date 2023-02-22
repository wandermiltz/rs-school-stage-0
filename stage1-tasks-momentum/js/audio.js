import playList from './playList.js'

const playBtn = document.querySelector('.play')
const playNextBtn = document.querySelector('.play-next')
const playPrevBtn = document.querySelector('.play-prev')
const playListContainer = document.querySelector('.play-list')
const soundBtn = document.querySelector('.sound')
const timeline = document.querySelector('.timeline')
const progressBar = document.querySelector('.progress')
const songCurrentTime = document.querySelector('.song-time .song-current-time')
const songDuration = document.querySelector('.song-time .song-duration')

playList.forEach(el => {
	const li = document.createElement('li')
	li.textContent = el.title
	li.classList.add('play-item')
	playListContainer.append(li)
})

const playListItems = document.querySelectorAll('.play-item')

function getPlayListItemActive() {
	if (isPlay) {
		playListItems.forEach(el => {
			el.classList.remove('item-active')
		})
		playListItems[playNum].classList.add('item-active')
	}
}

const audio = new Audio()
let playNum = 0
let isPlay = false

function playAudio() {
	audio.src = playList[playNum].src
	songDuration.textContent = playList[playNum].duration
	audio.currentTime = 0
	audio.autoplay = true
	audio.play()
	isPlay = true
}

audio.addEventListener('ended', () => {
	getAudioNext()
})

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
	getPlayListItemActive()
}

function getAudioNext() {
	if (playNum == playList.length - 1) {
		playNum = 0
	} else {
		playNum += 1
	}
	playAudio()
	toggleAudioIcons()
	getPlayListItemActive()
}

function getAudioPrev() {
	if (playNum > 0) {
		playNum -= 1
	} else {
		playNum = playList.length - 1
	}
	playAudio()
	toggleAudioIcons()
	getPlayListItemActive()
}

function toggleMute() {
	audio.muted = !audio.muted
}

function toggleMuteIcons() {
	if (!audio.muted) {
		soundBtn.classList.remove('mute')
	} else {
		soundBtn.classList.add('mute')
	}
}

playBtn.addEventListener('click', getAudioPlayToggle)
playNextBtn.addEventListener('click', getAudioNext)
playPrevBtn.addEventListener('click', getAudioPrev)
soundBtn.addEventListener('click', toggleMute)
soundBtn.addEventListener('click', toggleMuteIcons)

timeline.addEventListener('click', el => {
	const timelineWidth = window.getComputedStyle(timeline).width
	const timeToSeek = el.offsetX / parseInt(timelineWidth) * audio.duration
	audio.currentTime = timeToSeek
}, false)

function getTimeCodeFromNum(num) {
	let seconds = parseInt(num)
	let minutes = parseInt(seconds / 60)
	seconds -= minutes * 60
	const hours = parseInt(minutes / 60)
	minutes -= hours * 60

	if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`
	return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}`
}

setInterval(() => {
	progressBar.style.width = audio.currentTime / audio.duration * 100 + '%'
	songCurrentTime.textContent = getTimeCodeFromNum(
		audio.currentTime
	)
}, 500)