(function scrollTop() {
    gsap.registerPlugin(ScrollToPlugin)
    console.log('topbtn');
    function scrollTop(event) {
        event.preventDefault()
        
        if (scrollY !== 0) {
            console.log('top!')
            gsap.to(window, { 
                duration: 1, 
                scrollTo: 0, 
                ease: "power3.inOut" 
            })
        } else {
            console.log('go bottom')
            gsap.to(window, { 
                duration: 1, 
                scrollTo: 700, 
                ease: "power3.inOut" 
            })
        }
    }


    const topBtn = document.querySelector('#top-btn');

    topBtn.addEventListener("click", scrollTop)

    // If at top, btn invisible

    addEventListener('scroll', topBtnClassSwitch)

    function topBtnClassSwitch(event) {
        if (scrollY < 300) {
            topBtn.classList.add('top');
        } else {
            topBtn.classList.remove('top');
        }
    }
})()