// Check to make sure the document is ready
// document.addEventListener(
// 	'DOMContentLoaded',
// 	function (event) {
		// Mobile Menu Toggler
		// const navToggler = document.querySelector('.navbar-toggler');
		const mobileNav = document.querySelector('.offcanvas');
		mobileNav.addEventListener('hide.bs.offcanvas', (event) => {
			mobileNav.classList.add('hiding');
		});

		/*
		// navToggler.addEventListener('click', function () {
		// 	navToggler.classList.toggle('open');
		// });
		// Light/dark mode toggle
		// const lightswitch = document.querySelector('.light-switch');
		// lightswitch.addEventListener('click', (e) => {
		// 	console.log('clicked');
		// 	e.preventDefault();
		// 	document.body.classList.toggle('dark-mode');
		// 	lightswitch.classList.toggle('active');
		// 	lightswitch.classList.toggle('off');
		// });
		// Flickity Slider
const services = document.querySelector('.services-slider');
if (services) {
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
}

		// Hero animation
		const animation = document.querySelector('.chris-animated-container');
		// animation check script
		// const animationToggle = document.querySelector('.animation-toggle');
		// animationToggle.addEventListener('click', function () {
		// 	animation.classList.toggle('animating');
		// });
		// Creating a function that controls the animation using a random number system
		let randomAnimation = (min, max) => {
			// Get a random number between min and max
			let num = Math.floor(Math.random() * (max - min + 1)) + min,
				// Generating a random number to determine length of animation to play
				animLengthSeed = Math.floor(Math.random() * 100),
				// Animation total length variable
				animLength;
			// If the random number is less than or equal to 33, play the animation for 3.2 seconds
			if (animLengthSeed <= 33) {
				animLength = 3200;
				// If the random number is between 33 and 66, play the animation for 6.4 seconds
			} else if (animLengthSeed > 33 && animLengthSeed <= 66) {
				animLength = 6400;
				// If the random number is between 66 and 100, play the animation for 9 seconds
			} else {
				animLength = 9000;
			}
			// Add class that turns on animation
			animation.classList.add('animating');
			// Checking numbers to determine which animation to play
			// console.log(animLengthSeed);
			// console.log(animLength);

			// Timer to remove the animation class after the animation is finished
			setTimeout(() => {
				animation.classList.remove('animating');

				// Recursive function to play the animation again
				setTimeout(() => {
					randomAnimation(min, max);
				}, num);
			}, animLength);
		};
		// Initial call of the function to start the hero animation sequence
		if (animation) {
			randomAnimation(1000, 10000);
		}

*/
// 		// Animated portrait
// 		const portrait = document.querySelector('.contact-photo');
// 		const overlay = document.querySelector('.overlay');
// 		// Start the animation when the user clicks on the portrait
// if (portrait) {
// 	portrait.addEventListener('click', (e) => {
// 		let winWidth = window.innerWidth;
// 		e.preventDefault();
// 		if (winWidth > 575) {
// 			let portraitWrap = portrait.querySelector('.portrait-wrap'),
// 				portraitWidth = portraitWrap.offsetWidth,
// 				portraitHeight = portraitWrap.offsetHeight,
// 				portraitLeft = portrait.getBoundingClientRect().left + 12,
// 				portraitTop = portrait.getBoundingClientRect().top;
// 			// Add's class that turns on invisible overlay that is used to toggle off animation
// 			overlay.classList.add('active');
// 			// Creating space that the portrait was in now that it's set to position fixed
// 			portraitWrap.style.width = portraitWidth + 'px';
// 			portraitWrap.style.height = portraitHeight + 'px';
// 			if (winWidth < 768) {
// 				portrait.style.paddingTop = portraitHeight + 27 + 'px';
// 				portraitWrap.style.left =
// 					portraitLeft +
// 					(portrait.offsetWidth - 300) / 2 -
// 					12 +
// 					'px';
// 			} else {
// 				portrait.style.paddingTop = portraitHeight + 22 + 'px';
// 				portraitWrap.style.left = portraitLeft + 'px';
// 			}
// 			portraitWrap.style.top = portraitTop + 'px';
// 			// Add class to move to starting point of css animation
// 			portrait.classList.add('loading');
// 			setTimeout(() => {
// 				// Adding class to prepare for css animation
// 				portrait.classList.add('loaded');
// 				setTimeout(() => {
// 					// Adding class that turns on css animation
// 					portrait.classList.add('animated');
// 				}, 750);
// 			}, 100);
// 		}
// 	});
// }
// 		// Stop the animation when the user clicks on the overlay
// if (overlay) {
// 	overlay.addEventListener('click', (e) => {
// 		e.preventDefault();
// 		let portraitWrap = portrait.querySelector('.portrait-wrap');
// 		// Removing class that turns on invisible overlay that is used to toggle off animation
// 		overlay.classList.remove('active');
// 		portrait.classList.add('closing');
// 		setTimeout(() => {
// 			// Resetting inline CSS styles
// 			portrait.style.paddingTop = '';
// 			portraitWrap.style.width = '';
// 			portraitWrap.style.height = '';
// 			portraitWrap.style.left = '';
// 			portraitWrap.style.top = '';
// 			// Removing class that turns on css animation
// 			portrait.classList.remove('animated');
// 			// Removing class that prepares for css animation
// 			portrait.classList.remove('loaded');
// 			// Removing class that moves to starting point of css animation
// 			portrait.classList.remove('loading');
// 			portrait.classList.remove('closing');
// 		}, 500);
// 	});
// }
// 	},
// 	false
// );
