document.addEventListener('DOMContentLoaded', function() {
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
    slidesPerView: 2,
    spaceBetween: 5,
    breakpoints: {
      580: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1000: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: '.main-sections__next',
      prevEl: '.main-sections__prev'
    }
  });

  const newsProducts = new Swiper('.news-products__items', {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 5,
    breakpoints: {
      580: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1000: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: '.news-products__next',
      prevEl: '.news-products__prev'
    }
  });

  const stocks = new Swiper('.stocks-items', {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 5,
    breakpoints: {
      580: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: '.stocks-navs__next',
      prevEl: '.stocks-navs__prev'
    }
  });

  const news = new Swiper('.news-items', {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 5,
    breakpoints: {
      580: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
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
  });

  $(document).on('click', '#open-catalog-menu', function () {
    const btn = $(this);
    const active = btn.hasClass('active');
    const menu = $('.menu-catalog');

    if (active) {
      btn.removeClass('active');
      menu.removeClass('active');
      $('body').css('overflow', 'auto');
    } else {
      btn.addClass('active');
      menu.addClass('active');
      $('body').css('overflow', 'hidden');
    }
  });

  $(".header-top__menu-link .drop-list").hide();
  $(".header-top__menu-link.drop").hover(function(){
    $(this).find('.drop-list').stop().fadeToggle(300);
  });

  $(document).on('click', '.menu-catalog__section', function() {
    const id = $(this).attr('data-id');
    const page = $('.menu-catalog__page[data-id='+ id +']');

    $('.menu-catalog__section.active').removeClass('active');
    $('.menu-catalog__page.active').removeClass('active');
    $(this).addClass('active');
    page.addClass('active');
  });

  $(document).on('click', '#open-mobil-menu', function() {
    const btn = $(this);
    const menu = $('.mobil-menu');

    if (btn.hasClass('active')) {
      btn.removeClass('active');
      menu.removeClass('active');
      $('body').css('overflow', 'auto');
    } else {
      btn.addClass('active');
      menu.addClass('active');
      $('body').css('overflow', 'hidden');
    }
  });

  $(document).on('click', '.mobil-menu__item.internal, .mobil-menu__internal-item_section.internal', function () {
    const code = $(this).attr('data-open-id');
    const internal = $('.mobil-menu__internal-item[data-open-id=' + code + ']');

    internal.addClass('active');
  });

  $(document).on('click', '.mobil-menu__internal-item_title img', function() {
    const code = $(this).attr('data-open-id');

    $('.mobil-menu__internal-item[data-open-id=' + code + ']').removeClass('active');
  });

  // * Переключает видимость у блоков в блоке фильтр на пк версии
  $('.catalog-filter__header').on('click', function (e) {
    e.stopPropagation();
    if (window.innerWidth > 1000) {
      $(this).toggleClass('active');
      $(this).parent().find('.catalog-filter__body').slideToggle(300);
    }
  });
})