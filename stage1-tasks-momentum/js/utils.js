export function getRandomNum(max, min) {
	return Math.floor(min + Math.random() * (max + 1 - min))
}