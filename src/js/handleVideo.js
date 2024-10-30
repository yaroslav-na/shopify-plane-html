export function handleVideo() {
  const button = document.querySelector('[data-js="home-video-button"]');
  const video = document.querySelector('[data-js="home-video"]');
  const videoContainer = document.querySelector(
    '[data-js="home-video-container"]'
  );

  button.addEventListener('click', () => {
    video.play();
    videoContainer.classList.add('features__media-wrapper--playing');
  });
}
