const dropdownBtns = document.querySelectorAll('.header__item');
const dropdownLists = document.querySelectorAll('.header__dropdown-list');
const dropdownIcons = document.querySelectorAll('.header__arrow');
const tabButtons = document.querySelectorAll('[data-tab-button]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const burger = document.querySelector('.header__burger');
const burgerNav = document.querySelector('.header__nav');
const cartButtons = document.querySelectorAll('.card-tabs__button');

dropdownBtns.forEach(function (item) {
      item.addEventListener('click', function () {
            const dropdownList = this.querySelector('.header__dropdown-list');
            const dropdownIcon = this.querySelector('.header__arrow');

            dropdownLists.forEach(function (item) {
                  if (item !== dropdownList) {
                        item.classList.remove('header__dropdown-list--active')
                  }
            })
            dropdownIcons.forEach(function (item) {
                  if (item !== dropdownIcon) {
                        item.classList.remove('header__dropdown-list--active')
                  }
            })


            
            
            dropdownIcon.classList.toggle('header__arrow--active')
            dropdownList.classList.toggle('header__dropdown-list--active')
      })
})

// TABS 

tabButtons.forEach(function(item) {
      item.addEventListener('click', function() {
            const content = this.closest('.product__tabs').querySelector('#' + this.dataset.tabButton);

            tabContents.forEach(function(item) {
                  if (item !== content) {
                        item.classList.remove('tabs__content--active');
                  }
            })

            tabButtons.forEach(function(item) {
                  if (item !== this) {
                        item.classList.remove('tabs__button--active');
                  }
                  
            })

            
            content.classList.add('tabs__content--active')
            item.classList.add('tabs__button--active');
            
      });
});

// SLIDER

const swiper = new Swiper('.product-swiper', {
      slidesPerView: '1',
      spaceBetween: '30',
      navigation: {
            nextEl: '.product-button-next',
            prevEl: '.product-button-prev',
      },
      speed: 650,
      breakpoints: {
            // when window width is >= 320px
            570: {
              slidesPerView: 2,
              spaceBetween: 60,
            },
            // when window width is >= 480px
            875: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            // when window width is >= 640px
            1215: {
              slidesPerView: 4,
              spaceBetween: 45,
            }
      },
});

const swiper2 = new Swiper('.reviews-swiper', {
      slidesPerView: '1',
      spaceBetween: '40',
      navigation: {
            nextEl: '.reviews-button-next',
            prevEl: '.reviews-button-prev',
      },
      speed: 650,
      breakpoints: {
            // when window width is >= 320px
            720: {
              slidesPerView: 2,
              spaceBetween: 60,
            },
            // when window width is >= 480px
            1060: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
      },
});

// BURGER

burger.addEventListener('click', function() {
      burger.classList.toggle('header__burger--active');
      burgerNav.classList.toggle('header__nav--active');

      document.body.classList.toggle('no-scroll');
})

// CART

cartButtons.forEach(function(item) {
      item.addEventListener('click', function() {
            let counter = document.querySelector('.cart__counter');

            counter.innerText = ++counter.innerText;
            
      })
})