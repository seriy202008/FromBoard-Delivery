import jquery from "jquery";
import slick from "slick-slider";

jquery(document).ready(function () {
    jquery('.reviews--list').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1157,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
        ]
    });
});


let burgerBtn = document.querySelector('.header--burger');
let header = document.querySelector('.header');
let wrapper = document.querySelector('.wrapper');
let body = document.querySelector('body');

burgerBtn.addEventListener('click', function (e) {
    header.classList.toggle('_active');
    wrapper.classList.toggle('_disactive');
});
wrapper.addEventListener('click', function (e) {
    if (!e.target.closest('.header') || e.target.closest('.nav--link')) {
        header.classList.remove('_active');
        wrapper.classList.remove('_disactive');
    }
});
window.addEventListener('scroll', function (e) {
    header.classList.remove('_active');
    wrapper.classList.remove('_disactive');
});