const titreSpans = document.querySelectorAll('.home-text h1');
const btn = document.querySelectorAll('.btn');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const icon = document.querySelector('.logo_1');

window.addEventListener('load', () => {
	const TL = gsap.timeline({paused:true});

	TL
	.staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
	.staggerFrom(btn, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
	.from(icon, 1, {transform: "scale(0)", ease: "power2.out"}, 0.3, '-=2')
	.staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1')
	
	TL.play();
})