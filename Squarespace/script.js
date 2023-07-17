var tl = gsap.timeline();

tl.from ("#nav .logo, #nav h4, #nav button", {
    y: -100,
    duration: 1,
    delay: 0.8,
    opacity: 0,
    stagger: 0.2
});

tl.from ("#main h1", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})

tl.from ("#main>img", {
    scale: 0,
    opacity: 0,
    stagger: 0.3
});

tl.from ("h5", {
    scale: 0,
    opacity: 0,

})

tl.to ("h5", {
    y: 20,
    repeat: -1,
    duration: 0.7,
    yoyo: true
})