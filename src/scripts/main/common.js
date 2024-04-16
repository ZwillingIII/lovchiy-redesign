async function initMap() {
  await ymaps3.ready;

  const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker, YMapControls} = ymaps3;

  const {YMapZoomControl, YMapGeolocationControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

  const map = new YMap(
    document.getElementById('map'),
    {
      location: {
        center: [37.588144, 55.733842],
        zoom: 14,
      }
    },
  );

  map.addChild(
    // Here we place the control on the right
    new YMapControls({position: 'right'})
      // Add the first zoom control to the map
      .addChild(new YMapZoomControl({}))
      .addChild(new YMapGeolocationControl({}))
  );

  const markerElement = document.createElement('img');
  markerElement.className = 'contacts-map__marker';
  markerElement.src = '../assets/images/other/map-point.png';

  map.addChild(new YMapDefaultFeaturesLayer({}));
  map.addChild(new YMapMarker({coordinates: [37.588144, 55.733842]}, markerElement))
  map.addChild(new YMapDefaultSchemeLayer({}));
}

initMap();

document.addEventListener('DOMContentLoaded', function() {
  const detailBitPag = new Swiper('.catalog-detail__img-pagination_items', {
    direction: 'horizontal',
    spaceBetween: 10,
    slidesPerView: "auto",
  });
  const detailBigImg = new Swiper('.catalog-detail__img-big_items', {
    direction: 'horizontal',
    slidesPerView: 1,
    navigation: {
      nextEl: '.catalog-detail__img-big_next',
      prevEl: '.catalog-detail__img-big_prev'
    },
    thumbs: {
      swiper: detailBitPag,
    },
  });

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
    // if (window.innerWidth > 1000) {
      $(this).toggleClass('active');
      $(this).parent().find('.catalog-filter__body').slideToggle(300);
    // }
  });

  if ($('select').length) {
    $('select').selectize({})
  }

  $(document).on('click', '.catalog-detail__tabs-point', function () {
    const tab = $(this);
    const activeTab = $('.catalog-detail__tabs-point.active');
    const id = tab.attr('data-tab');
    const list = $('.catalog-detail__tabs-list[data-tab=' + id + ']');
    const activeList = $('.catalog-detail__tabs-list.active');

    if (!tab.hasClass('active')) {
      activeTab.removeClass('active');
      tab.addClass('active');
      activeList.removeClass('active');
      list.addClass('active')
    }
  });

  // start cart
  $(document).on('change', '#select-all', function() {
    const cartItem = $('.cart-products__item');
    const checkboxItem = cartItem.find('#products');

    if ($(this).prop('checked')) {
      checkboxItem.prop('checked', true);
    } else {
      checkboxItem.prop('checked', false);
    }
  });

  $(document).on('click', '.cart-products__item-count_button', function() {
    const btn = $(this);
    const direction = btn.attr('data-direction');
    const productID = btn.attr('data-product-id')
    const input = $('.cart-products__item-count input[data-product-id=' + productID + ']');
    const inputMax = input.attr('max');
    const inputMin = input.attr('min');

    let inputVal = parseInt(input.val());

    if (!btn.hasClass('disabled')) {
      switch (direction) {
        case 'plus':
          inputVal++;
          if (inputVal >= inputMax) btn.addClass('disabled');
          if (inputVal > inputMin && $('.cart-products__item-count_button[data-direction="min"]').hasClass('disabled')) $('.cart-products__item-count_button[data-direction="min"]').removeClass('disabled')
          break;
        case 'min':
          inputVal--;
          if (inputVal <= inputMin) btn.addClass('disabled');
          if (inputVal < inputMax && $('.cart-products__item-count_button[data-direction="plus"]').hasClass('disabled')) $('.cart-products__item-count_button[data-direction="plus"]').removeClass('disabled')
          break;
      }
      input.val(inputVal);
    }
  });

  $(document).on('click', '#delete-select', function() {
    const selectItems = $('#products:checked');

    if (selectItems.length > 0) {
     for (let i = 0; i < selectItems.length; i++) {
       $('.cart-products__item[data-id=' + selectItems[i].getAttribute('data-id') + ']').remove();
     }
     if ($('.cart-products__item').length <= 0) {
       $('.cart-content').css('display', 'none');
       $('.cart-empty').addClass('active');
     }
    }
  })
  // end cart

  // start order
  $('.order-form__section-header').on('click', function (e) {
    e.stopPropagation();

    $(this).toggleClass('active');
    $(this).parent().find('.order-form__section-body').slideToggle(300);
  });

  $('.order-info__items-header').on('click', function (e) {
    e.stopPropagation();

    $(this).toggleClass('active');
    $(this).parent().find('.order-info__items-body').slideToggle(300);
  });
  // end order

  // start contacts
  // end contacts
})