$('.mySlider').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    prevArrow: false,
    nextArrow: false
});

function toggleLights()
{
  for (let light of document.querySelectorAll('.light')) {
    light.classList.toggle('light--flash');
  }
  document.querySelector('.ambulance__headlight').classList.toggle('headlight--flash')
}
toggleLights();