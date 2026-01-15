
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import getImagesByQuery from './js/pixabay-api';
//тут зроби перевірки на довжину масиву

if (data.hits.length === 0) {
    iziToast.error({
        title: 'No images found',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
    });
}   

import { createGallery, clearGallery } from './js/render-functions';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');