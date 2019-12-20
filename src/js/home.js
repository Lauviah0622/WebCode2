// isMobileDevice 和 _nav.js相依

/* =====Particles===== */
function createParticle() {
    particlesJS.load('particles', isMobileDevice ? './js/particles-mobile.json' : './js/particles.json', function () {
        console.log('particle.JS OK');
        particleFn = pJSDom[0].pJS.fn
        window.scrollTo(0, 0)
    })
}

window.onload = function () {
    createParticle()
};

/* prevent moues double click select*/
document.addEventListener('mousedown', function (event) {
    if (event.detail > 1) {
        event.preventDefault();
        // of course, you still do not know what you prevent here...
        // You could also check event.ctrlKey/event.shiftKey/event.altKey
        // to not prevent something useful.
    }
}, false);

