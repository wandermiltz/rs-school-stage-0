import playList from './playList.js'

const playBtn = document.querySelector('.play')
const playNextBtn = document.querySelector('.play-next')
const playPrevBtn = document.querySelector('.play-prev')
const playListContainer = document.querySelector('.play-list')
const soundBtn = document.querySelector('.sound')
const timeline = document.querySelector('.timeline')
const progressBar = document.querySelector('.progress')
const songCurrentTime = document.querySelector('.song-current-time')
const songDuration = document.querySelector('.song-duration')
const currentSongName = document.querySelector('.current-song-name')
const volumeSlider = document.querySelector('.volume-slider')
const volumePercentage = document.querySelector('.volume-percentage')

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
			el.querySelector('.player-icon-small').classList.remove('pause')
		})
		playListItems[playNum].classList.add('item-active')
		playListItems[playNum].querySelector('.player-icon-small').classList.add('pause')
	}
}



playListItems.forEach(el => {
	const btn = document.createElement('button')
	btn.classList.add('play')
	btn.classList.add('player-icon')
	btn.classList.add('player-icon-small')
	el.appendChild(btn)
})

const audio = new Audio()
let playNum = 0
let isPlay = false
audio.volume = 0.25

function playAudio() {
	audio.src = playList[playNum].src
	currentSongName.textContent = playList[playNum].title
	songDuration.textContent = playList[playNum].duration
	audio.currentTime = 0
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
		playListItems[playNum].querySelector('.player-icon-small').classList.remove('pause')
	} else {
		playBtn.classList.add('pause')
		playListItems[playNum].querySelector('.player-icon-small').classList.add('pause')

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

volumeSlider.addEventListener('click', el => {
	const sliderWidth = window.getComputedStyle(volumeSlider).width
	const newVolume = el.offsetX / parseInt(sliderWidth)
	audio.volume = newVolume
	volumePercentage.style.width = newVolume * 100 + '%';
}, false)



playListItems.forEach((el, i) => {

	el.addEventListener('click', e => {
		playNum = i

		if (!el.classList.contains('item-active')) {
			isPlay = false
			const smallPlayBtns = document.querySelectorAll('.player-icon-small')
			smallPlayBtns.forEach(el => {
				el.classList.remove('pause')
			})
		}

		getAudioPlayToggle()

		const smallPlayBtn = el.querySelector('.player-icon-small')

		if (!isPlay) {
			smallPlayBtn.classList.remove('pause')
		} else {
			smallPlayBtn.classList.add('pause')
		}
	})
})
