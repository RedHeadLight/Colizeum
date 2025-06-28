
let mapPreviewBtn = document.querySelector('.mapPreview__btn')
let mapClubs = document.querySelector('.mapPreview')

if (mapPreviewBtn && mapClubs) {
	mapPreviewBtn.addEventListener('click', () => {
		mapClubs.classList.toggle('mapPreview--active')
	})
}
