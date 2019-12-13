console.log('nav');

const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navMenu = document.querySelector('#nav-menu');
const isMobileDevice = (function () {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
})()



const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args)
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc)
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args)
                    lastRan = Date.now()
                }
            }, limit - (Date.now() - lastRan))
        }
    }
}

function addNavEvent(ele, eventType, open = null, eventCallBack) {
    ele.addEventListener(eventType, function (e) {
        switchNav(open)
        eventCallBack(e)
    })
}

// switch Nav


// open Nav


// close Nav


navBtn.addEventListener('click', function (e) {
    // click button open nav
    switchNav()
    // 
    e.stopPropagation()
})

document.addEventListener('click', function (e) {
    // click outside close anv
    nav.classList.remove('open');
})

navMenu.addEventListener('click', function (e) {

    e.stopPropagation()
})

document.addEventListener('scroll', throttle((e) => {
    // scroll close anv
    // console.log(e);
    nav.classList.remove('open');

}, 200))







function switchNav(closeOrOpen = null) {
    const navState = nav.classList.contains('open');
    if (!navState) {
        nav.classList.add('open');
    } else {
        nav.classList.remove('open');
    }

    if (closeOrOpen === true) {
        nav.classList.add('open');

    } else if (closeOrOpen === false) {
        nav.classList.remove('open');

    }
}