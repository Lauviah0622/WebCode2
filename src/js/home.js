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
    pageInAnimation()
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


/* movie move */
(function movieMoveStart() {
    movieMove()
    requestAnimationFrame(movieMoveStart);

})()


function movieMove() {
    const movie = document.querySelector('#visual');
    let Y = window.pageYOffset;
    movie.style.transform = isMobileDevice ? `translate(0, ${- Y / 30}%) rotate(${Y / 10}deg)` :`translate(0, ${- Y / 30}%) rotate(${Y / 10}deg)`;
}


/* pagn in animation */

function pageInAnimation() {
    const body = document.querySelector('body')
    const stroke = document.querySelector('#visual-stroke');
    const video = document.querySelector('#video');

    let tl = gsap.timeline();
    tl.to(window, {
        // 1. moveTop
        duration: 0.2,
        scrollTo: 0,
        ease: "power3.inOut"
    })
    .fromTo(stroke, {
        // 2. draw Line
        "stroke-dashoffset": 1000
    }, {
        duration: 4,
        "stroke-dashoffset": 0,
        ease: "power3.inOut"
    })
    .fromTo(stroke, {
        opacity: 1
    },{
        opacity: 0,
        duration: 1,
        ease: "power3.inOut"
    }, "-=0.8")
    .fromTo(video, {
        opacity: 0
    }, {
        opacity: 1,
        duration: 1,
        ease: "power3.inOut"
        
    }, "-=0.7")
    .call(() => {
        if (body.classList.contains('loading')) {
            body.classList.remove('loading')
        }
    })

}