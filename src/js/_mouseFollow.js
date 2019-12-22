(function mouse() {
    const sign = document.querySelector('#mouse-follow');
    let aniOn = false;
    let fading = false;
    
    /* mousefollow Animaiton */
    
    let mouse = {
        x: 0,
        y: 0
    };
    
    let signX = innerWidth / 2,
        signY = innerHeight / 2;
    
    addEventListener('mousemove', (event) => {
        // trakcing mouse coordinate
        mouse.x = event.pageX;
        mouse.y = event.y;
    })
    
    function setSignCoord() {
        sign.style.left = signX + 'px';
        sign.style.top = signY + 'px';
    }
    
    function mouseFollow() {
        // set  move speed
        let v = 0.1;
        // calculate next coord
        signX += (mouse.x - signX) * v;
        signY += (mouse.y + scrollY - signY) * v;
        setSignCoord()
    }
    
    (function startMouseFollow() {
        mouseFollow()
        // refresh sign coord as Frame
        requestAnimationFrame(startMouseFollow);
    })()
    
    // test IIFE
    function addMouseFollowScrollTrigger() {
        addEventListener('scroll', throttle(followOrBack, 50))
    }
    addMouseFollowScrollTrigger()
    

    /* folow trigger */
    function followOrBack() {
        if (fading === true) return
        let top = 400;
        const svg = document.querySelector('#mouse-wrapper')
        console.log(svg.classList.contains('show'))
        if (scrollY > top && !aniOn) {
            // invi
            aniOn = true;
            svg.classList.add('show')
        } else if (scrollY <= top) {
            // out of visual
            aniOn = false;
            svg.classList.remove('show')
        }
    }
    
}) ()