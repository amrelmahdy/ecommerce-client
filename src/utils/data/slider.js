export const productSingleSlider = {
    rtl:true,
    margin: 0,
    nav: true,
    loop: false,
    dots: false,
    autoplay: false
}

export const prodThumbSlider = {
    margin: 8,
    items: 4,
    dots: false,
    nav: true,
    navText: [ '<i class="fas fa-chevron-left">', '<i class="fas fa-chevron-right">' ]
}

export const productExtendSlider = {
    rtl:true,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: false,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
}

export const HomeSlider = {
    autoplay: true,
    nav: false,
    dots: false,
    autoplayTimeout: 12000,
    navText: [ '<i class="icon-left-open-big">', '<i class="icon-right-open-big">' ],
    loop: true
}

export const blogSlider = {
    loop: false,
    margin: 20,
    autoplay: false,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        }
    }
}

export const postSlider = {
    margin: 0,
    dots: false,
    lazyLoad: true,
    nav: true,
    items: 1
}

export const productSlider = {
    rtl: true,
    loop: false,
    margin: 0,
    autoplay: false,
    dots: false,
    nav: true,
    items: 2,
    responsive: {
        576: {
            items: 3
        },
        768: {
            items: 3,
        },
        991: {
            items: 5,
        },
        1200: {
            items: 6
        }
    }
}

export const relatedProductSlider = {
    loop: false,
    margin: 20,
    autoplay: false,
    dots: true,
    nav: false,
    items: 2,
    responsive: {
        576: {
            items: 3
        },
        768: {
            items: 4,
        },
        991: {
            items: 4
        }
    }
}

export const categorySlider = {
    loop: false,
    margin: 20,
    autoplay: false,
    nav: true,
    dots: false,
    responsive: {
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 8
        }
    }
}

export const widgetFeaturedProductSlider = {
    rtl: true,
    margin: 20,
    loop: false,
    nav: true,
    navText: [ '<i class="icon-angle-left">', '<i class="icon-angle-right">' ],
    dots: false
}

export const infoBoxSlider = {
    loop: false,
    dots: false,
    responsive: {
        576: {
            items: 2
        },
        768: {
            items: 2,
        },
        1200: {
            items: 3
        },
        1500: {
            items: 4
        }
    }
}

export const bannerSlider = {
    margin: 20,
    responsive: {
        576: {
            items: 2
        },
        992: {
            items: 3,
        }
    }
}

export const brandSlider = {
    loop: true,
    margin: 30,
    autoHeight: true,
    autoplay: false,
    dots: false,
    nav: true,
    center: true,
    navText: [ '<i class="icon-left-open-big">', '<i class="icon-right-open-big">' ],
    items: 2,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 3
        },
        768: {
            items: 4
        },
        991: {
            items: 5
        },
        1200: {
            items: 6
        },
        1600: {
            items: 8
        }
    }
}