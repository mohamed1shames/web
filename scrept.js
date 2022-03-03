let navber = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contacTinfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
    navber.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
;}

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navber.classList.remove('active');
    loginForm.classList.remove('active');
;}

document.querySelector('#user-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navber.classList.remove('active');
    searchForm.classList.remove('active');
;}

document.querySelector('#info-btn').onclick = () =>{
    contacTinfo.classList.add('active');
;}
document.querySelector('#close-contact-info').onclick = () =>{
    contacTinfo.classList.remove('active');
;}




window.onscroll = () =>{
    navber.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contacTinfo.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".reviews-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
});

var swiper = new Swiper(".blogs-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
});

var swiper = new Swiper(".logo-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        450: {
            slidesPerView: 2,
          },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1000: {
          slidesPerView: 5,
        },
      },
});



