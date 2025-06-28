
let scrollUpBtn = document.querySelector('.scrollUp')

if (scrollUpBtn) {
	scrollUpBtn.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	})
}
