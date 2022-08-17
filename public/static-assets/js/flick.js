// Flickity Slider
const services = document.querySelector('.services-slider');
const servicesSlider = new Flickity(services, {
	cellSelector: '.single-service',
	cellAlign: 'left',
	contain: true,
	pageDots: false,
	prevNextButtons: false,
	on: {
		ready: function () {
			// Make all .single-service elements equal height
			const serviceElements =
				document.querySelectorAll('.single-service');
			let maxHeight = 0;
			if (serviceElements.length > 0) {
				serviceElements.forEach(function (element) {
					let elHeight = element.offsetHeight;
					if (elHeight > maxHeight) {
						maxHeight = elHeight;
					}
				});
				serviceElements.forEach(function (element) {
					element.style.height = maxHeight + 'px';
				});
			}
		},
	},
});
