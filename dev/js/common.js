/**
 * Отправляет или запрашивает данные.
 * @param {?HTMLElement} form - Форма. Или можно передать data.
 * @param {?string} action - URL сервера. Если не передано - берётся у form.
 * @param {?data} data - Данные, которые надо передать (если нет form).
 * @param {?string} method - Метод. По умолчанию "POST".
 */

async function sendData(form, action, data, method) {
	let url = action ? action : form.action;

	let options = {
		method: method ? method : "POST",
	};

	let formData = null;

	if (form) {
		formData = new FormData(form);
	} else {
		formData = JSON.stringify(data);
	}

	if (options.method.toUpperCase() != "GET") {
		options.body = formData;
	}

	const res = await fetch(url, options);

	if (!res.ok) {
		console.warn(res);
		let err = new Error("HTTP status code: " + res.status);
		throw err;
	}

	return res;
}


// Закрытие модалки.
let modalCloseBtn = document.querySelector('.modal__close')
if (modalCloseBtn) {
	modalCloseBtn.addEventListener('click', () => {
		let modalOverlay = document.querySelector('.modalOverlay')
		let modal = modalCloseBtn.closest('.modal--visible')

		if(modalOverlay) {
			modalOverlay.classList.remove('modalOverlay--visible')
		}
		if(modal) {
			modal.classList.remove('modal--visible')
		}
	})
}

// Маска на поля с телефоном.
let phoneInputs = document.querySelectorAll('.phoneInput')

phoneInputs.forEach((item) => {
	IMask(
	  item.querySelector('.modalField__input'),
	  {
		mask: '+{7}(000)000-00-00'
	  }
	)
})
