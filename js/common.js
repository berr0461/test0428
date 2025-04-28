$(document).ready(function(){ //시작

  // 2차메뉴
  /*
  mouseenter : 마우스가 올라갓을때
  mouseleave : 마우스가 나갓을때
  hover : 마우스가 올라갈때, 벗어날때는 각각 이벤트를 발생시킴
  */

  $(".gnb > li").hover(function(){
    $(this).children(".depth2").stop().fadeToggle();
  });

  // 모바일 메뉴
  $(".ham").click(function(){
    $(".dim").fadeIn();
    $(".mgnb-wrap").animate({"right" : "0"});
  });

  $(".mgnb-close").click(function(){
    $(".dim").fadeOut();
    $(".mgnb-wrap").animate({"right" : "-100%"});
  });

  //검색
  $(".btn-search").click(function(){
    $(".search").fadeIn();
  });

  $(".search-close").click(function(){
    $(".search").fadeOut();
  });

  const visual_list = new Swiper(".visual-list", {
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
  });


  const about_txt_list = new Swiper(".about-txt-list", {
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
  });


  const about_img_list = new Swiper(".about-img-list", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
  });

  about_txt_list.controller.control = about_img_list;
  about_img_list.controller.control = about_txt_list;


  const prd_list = new Swiper(".prd-list", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    speed: 1000,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".prd-next",
        prevEl: ".prd-prev",
    },
    breakpoints: {
        1000: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
        },
    },
  });



}); // 끝