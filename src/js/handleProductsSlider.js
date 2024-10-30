import EmblaCarousel from 'embla-carousel';

export function handleProductsSlider() {
  const emblaNode = document.querySelector('[data-js="products-carousel"]');
  const prevButton = document.querySelector(
    '[data-js="products-carousel-button-prev"]'
  );
  const nextButton = document.querySelector(
    '[data-js="products-carousel-button-next"]'
  );

  const options = { loop: false, align: 'end' };
  const emblaApi = EmblaCarousel(emblaNode, options);

  emblaApi.on('init', checkDisabled);
  emblaApi.on('select', checkDisabled);

  prevButton.addEventListener('click', emblaApi.scrollPrev);
  nextButton.addEventListener('click', emblaApi.scrollNext);

  function checkDisabled() {
    prevButton.disabled = !emblaApi.canScrollPrev();
    nextButton.disabled = !emblaApi.canScrollNext();
  }
}
