new Splide(".splide-tecnologia", {
    perPage: 3,
    perMove: 3,
    breakpoints: {
        768: {
            perPage: 2,
            drag: true,
            type: "loop",
            autoplay: true,
            padding: {
                right: "",
            },
        },
        425: {
            perPage: 1,
            drag: true,
            type: "loop",
            autoplay: true,
            padding: {
                right: "",
            },
        },
    },
    type: "loop",
    pagination: false,
    gap: 5,
    arrows: false,
    autoplay: true,
    drag: true,
}).mount();


