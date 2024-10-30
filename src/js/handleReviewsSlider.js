import EmblaCarousel from 'embla-carousel';

export function handleReviewsSlider() {
  const emblaNode = document.querySelector('[data-js="reviews-carousel"]');
  const prevButton = document.querySelector(
    '[data-js="products-reviews-button-prev"]'
  );
  const nextButton = document.querySelector(
    '[data-js="products-reviews-button-next"]'
  );

  const options = { loop: false };
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
