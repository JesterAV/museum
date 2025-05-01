import { createElement, shuffleArray } from "../utils/utils.mjs";

export function createAptGallery() {
    const gallerySection = createElement('div', 'aptGallery', document.body);
    gallerySection.id = 'Gallery';

    const galleryContainer = createElement('div', 'galleryContainer', gallerySection);

    const galleryContainerTitle = createElement('span', 'galleryContainerTitle', galleryContainer).textContent = 'Art Gallery';
    const imagesContainer = createElement('div', 'imagesContainer', galleryContainer);

    const imagesOne = createElement('div', 'images', imagesContainer);
    const imagesTwo = createElement('div', 'images', imagesContainer);
    const imagesThree = createElement('div', 'images', imagesContainer);
    imagesOne.classList.add('one')
    imagesThree.classList.add('three')

    const galleryImagesList = [];

    let counterAdd = 0;
    let counterContainer = 0;

    fetch('/museum/galleryImages.json')
        .then(res => res.json())
        .then(data => {
            data.forEach(item => {
                galleryImagesList.push(item.img);
            });

            shuffleArray(galleryImagesList);

            for (let i = 0; i < galleryImagesList.length; i++) {
                if (counterContainer === 0) {
                    const galleryImage = createElement('img', 'galleryImage', imagesOne);
                    galleryImage.src = galleryImagesList[i];

                    counterAdd++;

                    if (counterAdd === 5) {
                        counterContainer = 1;
                        counterAdd = 0;
                    }
                } else if (counterContainer === 1) {
                    const galleryImage = createElement('img', 'galleryImage', imagesTwo);
                    galleryImage.src = galleryImagesList[i];

                    counterAdd++;

                    if (counterAdd === 5) {
                        counterContainer = 2;
                        counterAdd = 0;
                    }
                } else if (counterContainer === 2) {
                    const galleryImage = createElement('img', 'galleryImage', imagesThree);
                    galleryImage.src = galleryImagesList[i];

                    counterAdd++;
                } else {
                    console.error('Ошибка в добавлении фотографий', counterContainer);
                }
            }
        });
}