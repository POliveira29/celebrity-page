$(document).ready(function () {
    $("#js-gallery__items").lightSlider({
      gallery: true,
      pager: false,
      item: 5,
      loop: true,
      enableDrag: false,
      currentPagerPosition: "left",
      onSliderLoad: function (el) {
        el.lightGallery({
          selector: "#js-gallery__items .lslide",
          download: false,
        });
      },
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            item: 7,
            autoWidth: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            item: 4,
            slideMargin: 6,
          }
        },
        {
          breakpoint: 700,
          settings: {
            item: 2,
            slideMove: 1
          }
        }
      ]
    });
  });
  