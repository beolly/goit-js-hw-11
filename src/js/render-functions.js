import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

createGallery(images) {
    const galleryContainer = document.querySelector('.gallery');
    const galleryItems = images.map(image => {  

        return `
        <a class="gallery__item" href="${image.largeImageURL}">
            <div class="photo-card">
                <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
                <div class="info">
                    <p class="info-item">
                        <b>Likes</b> ${image.likes}
                    </p>
                    <p class="info-item">   
                        <b>Views</b> ${image.views}
                    </p>
                    <p class="info-item">   
                        <b>Comments</b> ${image.comments}
                    </p>
                    <p class="info-item">       
                        <b>Downloads</b> ${image.downloads}
                    </p>        
                </div>
            </div>
        </a>
        `;
    }).join('');

    galleryContainer.innerHTML = galleryItems;
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    lightbox.refresh();
}

clearGallery() {
    const galleryContainer = document.querySelector('.gallery');
    galleryContainer.innerHTML = '';
}   
export { createGallery, clearGallery };