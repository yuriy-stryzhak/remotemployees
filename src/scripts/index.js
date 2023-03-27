import '../styles/index.scss';

import '../scripts/parallax-image';

// Swiper slider imports
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

//Isotop
import Isotope from 'isotope-layout';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';


//preloader
window.addEventListener('load', function () {
  const preloader = document.querySelector('.preloader');
  setTimeout(()=>{
    preloader.style.display = 'none';
  }, 500);
});


//hamburger
window.onload=()=>{
  const $ = document.querySelector.bind(document);

  $('.hamburger').onclick =()=>{
    $('.js-menu').classList.toggle('active');
    $('.hamburger').classList.toggle('rotate');
    $('.hamburger-line1').classList.toggle('rotate1');
    $('.hamburger-line2').classList.toggle('rotate2');
  };
};


//hero slider
const swiper1 = new Swiper('.js-hero-slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  speed: 1800,

  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.swiper-pagination',
  },

  on: {
    slideChange: function () {
      updateCounter('.js-hero-counter', swiper1);
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.js-hero-scrollbar',
    draggable: true,
  },

});

updateCounter('.js-hero-counter', swiper1);

function updateCounter(selector, slider) {
  const counter = document.querySelector(selector);
  const currentSlide = slider.realIndex + 1;
  const totalSlides = slider.slides.length;
  counter.innerHTML = currentSlide + ' / ' + totalSlides;
}


//spots slider
const swiper2 = new Swiper('.js-spots-slider', {
  direction: 'horizontal',
  loop: true,
  speed: 1800,

  autoplay: {
    delay: 5000,
  },

  on: {
    slideChange: function () {
      updateCounter('.js-spots-counter', swiper2);
    },
  },

  scrollbar: {
    el: '.js-spots-scrollbar',
    draggable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 60
    }
  }

});

updateCounter('.js-spots-counter', swiper2);


//pick slider
const swiper3 = new Swiper('.js-pick-slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  speed: 1800,
  spaceBetween: 60,

  autoplay: {
    delay: 5000,
  },

  on: {
    slideChange: function () {
      updateCounter('.js-pick-counter', swiper3);
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.js-pick-scrollbar',
    draggable: true,
  },

});

updateCounter('.js-pick-counter', swiper3);


//isotop
const isoInit = () => {
  const isMob = window.matchMedia('(max-width: 767px)').matches;

  isoElems.forEach(function(e) {
    new Isotope( e, {
      itemSelector: '.grid-item',
      layoutMode: isMob ? 'vertical' : 'masonry',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
      },
      sortBy: 'number',
      sortAscending: ascendingSort
    });
  });

  ascendingSort = !ascendingSort;
};

const isoElems = document.querySelectorAll('.js-pick-slide');

const sort = document.querySelector('.js-sort');
let ascendingSort = true;

sort.addEventListener('click', () => {
  sort.classList.toggle('active');
  isoInit();
});

window.addEventListener("resize", () => {
  setTimeout(function () {
    isoInit();
  }, 1000);
});

setTimeout(function () {
  AOS.init();
  isoInit();
}, 1000);

