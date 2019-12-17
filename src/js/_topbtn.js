(function scrollTop() {
    console.log('topbtn');
    function scrollTop(event) {
        event.preventDefault()
        console.log('top!')
        
        TweenMax.to(window, 1, {
            scrollTo: 0,
            ease: Power3.easeInOut
        })
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
}) ()