new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,


  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
          return `<button class="btn btn_round ${className}" aria-label="Переключение слайда"></button>`
      }
  },
})