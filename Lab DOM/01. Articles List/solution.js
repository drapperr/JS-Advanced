function createArticle() {
	let title = document.getElementById('createTitle');
	let contentText = document.getElementById('createContent');

	if (title.value !== '' && contentText.value !== '') {
		let article = document.getElementById('articles').appendChild(document.createElement('article'));
		article.appendChild(document.createElement('h3')).innerHTML = title.value;
		article.appendChild(document.createElement('p')).innerHTML = contentText.value;
	}

	title.value = '';
	contentText.value = '';
}