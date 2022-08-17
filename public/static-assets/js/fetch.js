const featProj = document.querySelector('.featured-work');
if (featProj) {
	const featProjLink = featProj.querySelector('.btn-link');
	featProjLink.addEventListener('click', (e) => {
		e.preventDefault();
		fetch('project_01.html')
			.then(function (response) {
				return response.text();
			})
			.then(function (html) {
				// console.log(html);
				const parser = new DOMParser();
				const doc = parser.parseFromString(html, 'text/html');

				const project = doc.querySelector('body').innerHTML;
				document.querySelector('body').innerHTML = project;
				// Follow this method of finding all scripts with a class on them
				// These will all be removed and re-added using the method below
				// so JS can reinitalize where needed
				// Try using classes on "body" tag to see if you can stop certain things from being redefined like mobile nav const that was throwing error before.
				const scripts = doc.querySelectorAll('script');
				// scripts.forEach((script) => {
				const newScript = document.createElement('script');
				newScript.src = 'js/flick.js';
				// script.remove();
				document.querySelector('script.remove').remove();
				document.body.appendChild(newScript);
				// });
			})
			.catch(function (error) {
				console.warn(error);
			});
	});
}
