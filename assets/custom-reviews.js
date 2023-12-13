var swiper = new Swiper(".custom-reviews-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});