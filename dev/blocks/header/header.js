let mobileMenuBtns = document.querySelectorAll('.header__mobileOpenBtn, .header__mobileCloseBtn')
let menuLinks = document.querySelectorAll('.header__menu a')

mobileMenuBtns.forEach((item) => {
	item.addEventListener('click', () => {
		document.querySelector('.header__menu').classList.toggle('header__menu--active')
	})
})

menuLinks.forEach((item) => {
	item.addEventListener('click', () => {
		document.querySelector('.header__menu').classList.remove('header__menu--active')
	})
})
