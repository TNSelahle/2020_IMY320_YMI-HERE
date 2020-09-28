setTimeout(function(){anime.timeline({loop: 1})
    .add({
        targets: '.lines',
        easing: "easeInOutExpo",
        opacity: [0.3,1],
        scaleX: [0,1],
        duration: 700
    }).add({
        targets: '.lines',
        easing: "easeOutExpo",
        translateY: [function (elm, i) { return (-0.6 + 0.6*2*i) + "em";}],
        duration: 600
    }).add({
        targets: '#mid',
        easing: "easeOutExpo",
        opacity: [0,1],
        scaleY: [0.5, 1],
        duration: 600,
        offset: '-=600'
    }).add({
        targets: '#left',
        easing: "easeOutExpo",
        opacity: [0,1],
        translateX: ["0.5em", 0],
        duration: 800,
        offset: '-=300'
    }).add({
        targets: '#right',
        opacity: [0,1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 800,
        offset: '-=600'
    }).add({
        targets: '#wrap',
        opacity: 1,
        duration: 2000,
        easing: "easeOutExpo",
        delay: 1000
    });},3500)
