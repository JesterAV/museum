import { createElement } from "../utils/utils.mjs";
import { openWindow } from "../utils/utils.mjs";
import { RoyalPalaceLink, DenonWingLink, ColonnadePerraultLink, GreekHallLink, MonaLisaLink, NightPalaceLink } from "../links/links.mjs";

export function createVirtualTourSection() {
    const virtualTour = createElement('div', 'virtualTourSection', document.body);
    const virtualTourContainer = createElement('div', 'virtualTourContainer', virtualTour);
    const virtualTourTitleContainer = createElement('div', 'virtualTourTitleContainer', virtualTourContainer);
    const virtualTourTitle = createElement('span', 'virtualTourTitle', virtualTourTitleContainer);
    const virtualTourCards = createElement('div', 'virtualTourCards', virtualTourContainer);

    virtualTourTitle.textContent = 'Virtual tour'

    let cardImage = [];
    let cardName = [];

    const cardsUrlList = [RoyalPalaceLink, DenonWingLink, ColonnadePerraultLink, GreekHallLink, MonaLisaLink, NightPalaceLink];

    function createCards() {
        fetch('/museum/tourImages.json')
        .then(res => res.json())
        .then(data => {
            data.forEach(item => {
                cardImage.push(item.img);
                cardName.push(item.name);
            });

            for(let i = 0; i < cardImage.length; i++) {
                const virtualTourCard = createElement('div', 'virtualCard', virtualTourCards);
                const virtualCardImage = createElement('img', 'virtualCardImage', virtualTourCard);
                const virtualCardName = createElement('p', 'virtualCardName', virtualTourCard);
                const virtualTour360 = createElement('p', 'virtualTour360', virtualTourCard);
                const tourPanorama = createElement('p', 'tourPanorama', virtualTourCard);

                virtualTour360.textContent = '360° Virtual Tour';
                tourPanorama.textContent = 'Google Street Panorama View';

                virtualCardImage.src = cardImage[i];
                virtualCardName.textContent = cardName[i];

                virtualTourCard.addEventListener('click', () => {
                    openWindow(cardsUrlList[i]);
                });
            };
        });
    };

    createCards();
};