console.log('hello world!~')

for (let i = 0; i < 100; i += 10) {
	console.log(i)
}

document.querySelector('.inject').innerHTML = (function () {
	let longWord = ''
	for (let i = 0; i < 100; i += 1) {
		longWord += 'CATS ARE THE BEST HAHA '
	}
	return longWord
})()

document.querySelector('.inject2').innerHTML = new Array(100)
	.fill(0)
	.map((_) => '<div>CATS ARE AMAZING</div>')
	.join('')
