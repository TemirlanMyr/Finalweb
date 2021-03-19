const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');
		const titleEl = document.querySelector('.title');
		const descrEl = document.querySelector('.description');

		link.forEach(el => {
			el.addEventListener('click', () => {
				langEl.querySelector('.active').classList.remove('active');
				el.classList.add('active');

				const attr = el.getAttribute('language');

				titleEl.textContent = data[attr].title;
				descrEl.textContent = data[attr].description;
			});
		});
		
		var data = {
			  "english": 
			  {
			    "title": "About us",
			    "description": 
				    "We do not provide any services for the sale of cars or any other vehicles. Our site is created solely for informational purposes, so we do not assume any responsibility on our part in the event of unforeseen circumstances."
			  },
			  "russian": 
			  {
			    "title": "О нас",
			    "description": 
				    "Мы не предоставляем никаких услуг по продаже автомобилей или любых других транспортных средств. Наш сайт создан исключительно в информационных целях, поэтому мы не несем никакой ответственности с нашей стороны в случае непредвиденных обстоятельств."
			  }
			 
			}