var swiper = new Swiper(".brand-carousel-swiper", {
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false
    },
    slidesPerView: 12,
    spaceBetween: 10,
    speed: 5000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});