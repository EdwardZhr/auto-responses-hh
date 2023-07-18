async function fuu() {
	let text = 'Здравствуйте! Меня очень заинтересовала данная вакансия, так как я хочу развиваться в сфере frontend разработки в интересной и перспективной компании с серьезным отношением к используемым технологиям.\nИмею опыт создания нескольких учебных проектов реализованных с использованием React, чистого JS и NodeJs с которыми можно ознакомиться по ссылке https:'+'/'+'/github.com/EdwardZhr,  закончил ЯндексПрактикум по направлению web-разработка.\nНа данный момент я 3 года работаю бизнес-аналитиком в Ozon над HR-tech проектами и имею соответствующий опыт в процессе продуктовой разработки. В мои обязанности входит коммуникация со стейкхолдерами, разработчиками и дизайнерами, сбор требований, написание ТЗ. В настоящий момент ищу новое место работы в сфере фронтенда.\nЯ люблю изучать новые технологии и писать код, быстро усваиваю информацию, поэтому считаю, что справлюсь и с теми задачами, с которыми раньше не сталкивался, а мой предыдущий опыт работы поможет быстро адаптироваться и начать приносить пользу команде.\nНадеюсь, что вас заинтересовала моя кандидатура, и вы подробно ознакомитесь с моим резюме.'
	let query = 'https://hh.kz/search/vacancy?text=frontend&salary=&area=1&ored_clusters=true'
	let respondBtns = document.querySelectorAll('a.bloko-button_kind-success')
	let attachBtn
	let sendBtn
	let textArea
	let counter = 0

	function timeout(ms) {
    		return new Promise(resolve => setTimeout(resolve, ms));
	}
	
	async function getElement(selector, order) {
		let element = document.querySelectorAll(selector)[order]
		counter ++
		console.log(counter)
		if (counter === 10) {
		await timeout(10000)
		window.location.href=query
		await timeout(5000)
		fuu()
	}
		if (!element) {
			await timeout(1000)
			element = await getElement(selector, order)
		}
		counter = 0
		return element
	}

	  for (const respondBtn of respondBtns) {
		console.log(respondBtn.href)
		respondBtn.click()
		attachBtn = await getElement('.bloko-link.bloko-link_pseudo', 1)
		attachBtn.click()
		textArea = await getElement('.bloko-textarea.bloko-textarea_sized-rows', 0)
		textArea.textContent = text
		sendBtn = await getElement('.bloko-form-row > .bloko-button', 0)
		sendBtn.click()
		await timeout(10000)
  }
}
