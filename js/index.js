// SWIPER
var swiper = new Swiper(".bannerSwiper", {
   slidesPerView: 1,
   // spaceBetween: 30,
   loop: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   // autoplay: {
   //    delay: 2500,
   //    disableOnInteraction: false,
   // },
});

var swiper = new Swiper(".blog-swiper", {
   slidesPerView: 3,
   spaceBetween: 30,
   loop: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});

// Scroll to top button

// const navlink = document.querySelectorAll('.menu ul li a');
// console.log(navlink);
// navlink.forEach(item => {
//    item.addEventListener('click', e => e.preventDefault());
// })

// Product js
const productTitles = document.querySelectorAll(".prod-title h4");
productTitles.forEach((item) => {
   item.addEventListener("click", (e) => {
      window.location.href = "http://127.0.0.1:5500/product-details.html";
      window.location.replace("http://127.0.0.1:5500/product-details.html");
      window.title = "Product Details";
   });
});

// backto top
// const backToTopBtn = document.querySelector('.backtoTop');
// backToTopBtn.addEventListener('click', e => {
//    e.preventDefault();
//    document.html.animate({scrollTop:0}, '300');
// })

var thumbs_swiper = new Swiper(".thumbnail-swiper", {
   loop: true,
   spaceBetween: 10,
   slidesPerView: 4,
   freeMode: true,
   watchSlidesProgress: true,
});
var prod_swiper = new Swiper(".prodImg-slider", {
   loop: true,
   spaceBetween: 10,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   thumbs: {
      swiper: thumbs_swiper,
   },
});

// backto home
const btnBackToHome = document.getElementById("back-to-home");
btnBackToHome.addEventListener("click", (e) => {
   window.history.pushState("home", "Trang chủ", "http://127.0.0.1:5500/index.html")
   window.location.assign("http://127.0.0.1:5500/index.html")
});
