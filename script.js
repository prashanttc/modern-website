const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function firstpageanim() {
    gsap.from(".nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    });

    gsap.to(".elembounding", {
        y: '0',
        ease: Expo.easeInOut,
        duration: 2,
        stagger: .2
    });
}

function chaptacircle() {
    let xscale = 1;
    let yscale = 1;
    let xprev = 0;
    let yprev = 0;

    window.addEventListener("mousemove", function(dets) {
        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        mousefollow(xscale, yscale, dets.clientX, dets.clientY);
    });
}

function mousefollow(xscale, yscale, clientX, clientY) {
    document.querySelector(".circlepointer").style.transform = `translate(${clientX}px, ${clientY}px) scale(${xscale}, ${yscale})`;
}

chaptacircle();
firstpageanim();

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot =0;

    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate ;
        rotate = dets.clientX
        


        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate : gsap.utils.clamp(-20,20,diffrot * .5),
        });
    });
    elem.addEventListener("mouseleave", function (dets) {


        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
 duration : 0.5,
        });
    });
});