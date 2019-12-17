console.log('home');
(function () {
    console.log('hihi');
    const throttle = (func, limit) => {
        let inThrottle = null;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args)
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit)
            }
        }
    }

    function isScrolledIntoView(el) {
        let {
            top: elemTop,
            bottom: elemBottom
        } = el.getBoundingClientRect();

        let isVisible = elemTop <= window.innerHeight;
        if (scrollY !== 0 ) {
            return isVisible;
        } 
    }


    let fillTransitionElements = Array.from(document.querySelectorAll('.fill-in-effect'));

    /* set scroll trigger */
    addEventListener('scroll', throttle(animationPlay, 20));
    addEventListener('load', throttle(animationPlay, 20));
    // requestAnimationFrame(animationPlay)

    // fillTransitionElements.forEach(el => {
    //     el.classList.add('fill-in')
    // })

    function animationPlay() {
        let counter = 0;
        fillTransitionElements.forEach((el, index) => {
            if (isScrolledIntoView(el)) {
                setTimeout(() => {
                    el.classList.add('fillEnd')
                    console.log(counter * 20, index)
                }, 50 * counter)
                counter++;
                fillTransitionElements = fillTransitionElements.filter(element => element !== el)
            }
        })
    }
}) ()