const refs = {
  gallery: document.querySelector('.js-gallery'),
  largeImage: document.querySelector('.js-large-image'),
};

refs.gallery.addEventListener('click', onGalleryClick)

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return
  };
  const largeImageUrl = event.target.dataset.source;
  setLargeImageSrc(largeImageUrl);
};
function setLargeImageSrc(url) {
  refs.largeImage.src = url
};