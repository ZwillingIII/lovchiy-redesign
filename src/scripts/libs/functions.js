document.addEventListener('DOMContentLoaded', function () {
  const banner = new Swiper('.banner-banner__items', {
    direction: 'horizontal',
    slidesPerView: 1,
    pagination: {
      el: '.banner-banner__paginations'
    },
    navigation: {
      nextEl: '.banner-banner__navs-next',
      prevEl: '.banner-banner__navs-prev'
    }
  });

  const sections = new Swiper('.main-sections__items', {
    direction: 'horizontal',
    slidesPerView: 6,
    spaceBetween: 20,
    navigation: {
      nextEl: '.main-sections__next',
      prevEl: '.main-sections__prev'
    }
  });

  const newsProducts = new Swiper('.news-products__items', {
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: '.news-products__next',
      prevEl: '.news-products__prev'
    }
  });

  const stocks = new Swiper('.stocks-items', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.stocks-navs__next',
      prevEl: '.stocks-navs__prev'
    }
  });

  const news = new Swiper('.news-items', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.news-navs__next',
      prevEl: '.news-navs__prev'
    }
  });

  const footer = new Swiper('.footer-slider__slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    pagination: {
      el: '.footer-slider__pagination'
    },
    navigation: {
      nextEl: '.footer-slider__navs-next',
      prevEl: '.footer-slider__navs-prev'
    }
  });

  const footerPickups = new Swiper('.footer-column__pickups-items', {
    direction: 'horizontal',
    slidesPerView: 1,
    navigation: {
      nextEl: '.footer-column__navs-next',
      prevEl: '.footer-column__navs-prev'
    }
  })
});