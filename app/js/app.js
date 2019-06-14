// const anime = require('anime');
var windowWidth = window.innerWidth;
var intervalOurProjects;

var sliceText = function(selectop, count) {
    let listDescriptElems = document.querySelectorAll(selectop);
    for (let i = 0; i < listDescriptElems.length; i++) {
        let elem = listDescriptElems[i];
        if (elem.innerText.length > count) {
            elem.innerText = elem.innerText.slice(0, count).concat('...');
        }
    }
};

var close_accordion_section = function() {
    $('.accordion .accordion-section-title').removeClass('active');
    $('.accordion .accordion-section-content')
        .slideUp(300)
        .removeClass('open');
};

var carousel = function() {
    $('#carousel-reviews').owlCarousel({
        navigation: true,
        pagination: false,
        slideSpeed: 700,
        paginationSpeed: 400,
        items: windowWidth > 767 && windowWidth < 992 ? 1 : 1,
        nav: true,
        navigation: true,
        navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 68.41"><defs><style>.a{fill:#585858;}</style></defs><title>Asset 6</title><path class="a" d="M34.24,68.41a1.75,1.75,0,0,1-.7-.14,1.54,1.54,0,0,1-.56-.35L.56,35.51A1.81,1.81,0,0,1,0,34.21,1.57,1.57,0,0,1,.56,33L33,.56A1.57,1.57,0,0,1,34.21,0a1.81,1.81,0,0,1,1.3.56A1.75,1.75,0,0,1,36,1.83a1.71,1.71,0,0,1-.49,1.26L4.36,34.24,35.51,65.32a2,2,0,0,1,0,2.6,3,3,0,0,1-.6.35A1.52,1.52,0,0,1,34.24,68.41Z"/></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 68.41"><defs><style>.a{fill:#585858;}</style></defs><title>Asset 7</title><path class="a" d="M1.16,68.27a3,3,0,0,1-.6-.35,1.79,1.79,0,0,1,0-2.6L31.71,34.24.56,3.09A1.59,1.59,0,0,1,0,1.83,1.62,1.62,0,0,1,.56.56,1.62,1.62,0,0,1,1.83,0,1.6,1.6,0,0,1,3.09.56L35.51,33A1.69,1.69,0,0,1,36,34.21a2,2,0,0,1-.49,1.3L3.09,67.92a2.7,2.7,0,0,1-.59.35,1.55,1.55,0,0,1-.67.14A1.52,1.52,0,0,1,1.16,68.27Z"/></svg>'
        ],
        itemsDesktopSmall: [992, 1], // betweem 900px and 601px
        itemsTablet: [768, 1], //2 items between 600 and 0
        itemsMobile: 1 // itemsMobile disabled - inherit from itemsTablet option
    });
};

var mobGamburger = function() {
    $('#respMenu').aceResponsiveMenu({
        resizeWidth: '767', // Set the same in Media query
        animationSpeed: 'medium', //slow, medium, fast
        accoridonExpAll: false //Expands all the accordion menu on click
    });
};

var chooseCity = function() {
    var isShow = false;
    $('.toggle-list-city').click(function() {
        if (isShow) {
            return;
        }
        isShow = true;
        $('.list-city').toggle();
        setTimeout(function() {
            $('body').click(function(e) {
                $('.list-city').toggle();
                $('body').off('click');
                isShow = false;
            });
        }, 0);
    });
    $('.list-city li').click(function(e) {
        var listPhone = e.target.dataset.phone.split(';');
        $('.list-phone').html('');
        $('.name-city').text(e.target.innerText);
        listPhone.forEach(function(phone) {
            $('.phone-wraper div').append('<p>' + phone + '</p>');
        });
    });
};

var chooseCountry = function() {
    var isShow = false;
    $('.choose-country').click(function() {
        if (isShow) {
            return;
        }
        isShow = true;
        $('.wrapper-country ul').toggle();
        setTimeout(function() {
            $('body').click(function(e) {
                $('.wrapper-country ul').toggle();
                $('body').off('click');
                isShow = false;
            });
        }, 0);
    });
};

var createAccordions = function() {
    if (window.innerWidth < 993) {
        $('.accordion-footer').beefup({
            trigger: '.beefup__head', // String: Name of the trigger element
            content: '.beefup__body', // String: Name of the collapsible content
            openClass: 'is-open', // String: Name of the class which shows if a accordion is triggered or not
            animation: 'slide', // String: Set animation type to "slide", "fade" or leave empty ""
            openSpeed: 200, // Integer: Set the speed of the open animation
            closeSpeed: 200, // Integer: Set the speed of the close animation
            scroll: false, // Boolean: Scroll to accordion
            scrollSpeed: 400, // Integer: Set the speed of the scroll feature
            scrollOffset: 0, // Integer: Additional offset to accordion position
            openSingle: true, // Boolean: Open just one accordion at once
            stayOpen: null, // Mixed: Leave one item open, accepts null, integer or string
            selfBlock: false, // Boolean: Block close event on click
            selfClose: false, // Boolean: Close on click outside
            hash: true, // Boolean: Open accordion with id on hash change
            breakpoints: null
        });
    } else {
        $('.beefup__body').show();
    }

    if (window.innerWidth < 767) {
        $('.our-projects .col.right .cell').beefup({
            trigger: 'h6', // String: Name of the trigger element
            content: 'p', // String: Name of the collapsible content
            openClass: 'is-open', // String: Name of the class which shows if a accordion is triggered or not
            animation: 'slide', // String: Set animation type to "slide", "fade" or leave empty ""
            openSpeed: 200, // Integer: Set the speed of the open animation
            closeSpeed: 200, // Integer: Set the speed of the close animation
            scroll: false, // Boolean: Scroll to accordion
            scrollSpeed: 400, // Integer: Set the speed of the scroll feature
            scrollOffset: 0, // Integer: Additional offset to accordion position
            openSingle: true, // Boolean: Open just one accordion at once
            stayOpen: null, // Mixed: Leave one item open, accepts null, integer or string
            selfBlock: false, // Boolean: Block close event on click
            selfClose: false, // Boolean: Close on click outside
            hash: true, // Boolean: Open accordion with id on hash change
            breakpoints: null
        });
    } else {
        $('.cell p').show();
    }
};

var accordionOurProjects = function() {
    if (intervalOurProjects) {
        clearInterval(intervalOurProjects);
    }
    if (window.innerWidth > 767 && window.innerWidth < 993) {
        sliceText('.our-projects .cell .text', 200);
    } else {
        sliceText('.our-projects .cell .text', 110);
    }

    if (window.innerWidth > 767) {
        $('.search .svg-img-search').click(function() {
            $('header .box').hide();
            setTimeout(function() {
                $('body').click(function(e) {
                    if (e.target.id !== 'input-search-2') {
                        $('header .box').show();
                        $('header .search-2').removeClass('active');
                        $('body').off('click');
                    }
                });
            }, 0);
            $('header .search-2').addClass('active');
        });
        let prodjects = document.querySelectorAll('.our-projects .col.right .cell');
        let intervalCount = 0;
        intervalOurProjects = setInterval(() => {
            prodjects[
                intervalCount === 0 ? prodjects.length - 1 : intervalCount - 1
            ].className = 'cell';
            prodjects[intervalCount].className += ' activ';
            let img = prodjects[intervalCount].querySelector('img').src;
            document.querySelector('.our-projects .left .photo').style.backgroundImage =
                'url(' + img + ')';
            if (intervalCount < prodjects.length - 1) {
                intervalCount++;
                return;
            }
            intervalCount = 0;
        }, 3000);
    }
};

$(document).ready(function() {
    $('.mobile.world-news .slider').slick({
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1,
        //breakpoint: 768,
        variableWidth: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    var video = document.querySelector('video');
    var videoSlider = document.createElement('div');
    var videoBoxLogo = document.querySelector('section.video .box');
    videoSlider.className = 'slider-for-video';
    videoSlider.style.height = video.offsetHeight + 'px';

    video.addEventListener(
        'ended',
        function() {
            video.remove();
            videoSlider.prepend(videoBoxLogo);
            document.querySelector('section.video').prepend(videoSlider);
        },
        false
    );

    window.addEventListener('resize', function() {
        // requestAnimationFrame(function() {
        accordionOurProjects();
        createAccordions();
        // });
    });
    createAccordions();
    mobGamburger();
    carousel();
    chooseCity();
    chooseCountry();
    accordionOurProjects();

    sliceText('.activity .descript .text', 200);
    sliceText('.world-news .descript .text', 150);
});
