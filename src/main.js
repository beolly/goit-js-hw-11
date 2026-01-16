import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, hideLoader, showLoader,clearGallery } from './js/render-functions';

const searchForm = document.querySelector('.form');
const searchInput = document.querySelector('input');
const button = document.querySelector('button');

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
    clearGallery();
    button.disabled = true;
    showLoader();
  const query = searchInput.value.trim();
  if (query === '') {
    iziToast.warning({
      title: 'Empty search query',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }
  clearGallery();
  showLoader();
  try {
    const data = await getImagesByQuery(query);
    if (data.hits.length === 0) {
      iziToast.info({
        title: 'No images found',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }
    createGallery(data.hits);
  } catch (error) {
    console.error('Error fetching images:', error);
    iziToast.error({
        
      title: 'Error searching images',
      message:
        'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  }
  finally {
  button.disabled = false;
  hideLoader();
  searchForm.reset();
}
});
