$(function(){
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
         nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
    });

    var swiper = new Swiper('.zt_header',{
       // spaceBetween: 30,
       speed:300,
        effect: 'fade',
        loop:true,
        autoplay:3000
    })
})