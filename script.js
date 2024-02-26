function toogle(event) {
	let elem = event.currentTarget;

	if (elem.tagName != 'IMG') return false;

	if (elem.src.indexOf('plus') != -1) {
		elem.src = './assets/images/icon-minus.svg';
	} else {
		elem.src = './assets/images/icon-plus.svg';
	}

	let answer = elem.parentElement.nextElementSibling;

	answer.classList.toggle('hidden');
}
