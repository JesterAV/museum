import { createElement } from "../utils/utils.mjs";
import { createHeader } from "../header/header.mjs";
import { mainSectionLink } from "../links/links.mjs";
import { openWindow } from "../utils/utils.mjs";

export function createMain() {
    const main = createElement('div', 'main', document.body);
    main.id = 'Welcome';
    createHeader(main);
    const mainContainer = createElement('div', 'mainContaier', main);

    const mainTitleContainer = createElement('div', 'mainTitleContainer', mainContainer);
    const welcome = createElement('span', 'welcome', mainTitleContainer);
    const mainTitleText = createElement('h1', 'mainTitleText', mainTitleContainer);
    const mainSubTitle = createElement('span', 'mainSubTitle', mainTitleContainer);
    const mainBtnLink = createElement('a', 'mainBtnLink', mainTitleContainer);
    mainBtnLink.addEventListener('click', () => {
        openWindow(mainSectionLink);
    })
    const mainBtn = createElement('button', 'mainBtn', mainBtnLink);

    welcome.textContent = 'welcome';
    mainTitleText.textContent = 'to the Louvre';
    mainSubTitle.textContent = 'From the castle to the museum';
    mainBtn.textContent = 'Discover the Louvre';

    const mainImage = createElement('div', 'mainImage', mainContainer);
    const mainSlider = createElement('div', 'mainSlider', mainImage);

    const sliderPictureList = [
        '/museum/assets/images/jpeg/welcome-slider/monaLisa.jpg',
        '/museum/assets/images/jpeg/welcome-slider/freedom.jpg',
        '/museum/assets/images/jpeg/welcome-slider/beautifulFerronniere.jpg',
        '/museum/assets/images/jpeg/welcome-slider/jellyfishRaft.jpg',
        '/museum/assets/images/jpeg/welcome-slider/geographer.jpg'
    ];

    for (let i = 0; i < sliderPictureList.length; i++) {
        const sliderImage = createElement('div', 'sliderImage', mainSlider);
        sliderImage.style.backgroundImage = `
            linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%),
            url(${sliderPictureList[i]})`;
        sliderImage.style.backgroundSize = 'cover';
        sliderImage.style.backgroundPosition = 'center';
    }

    const sliderButtonsContainer = createElement('div', 'sliderButtonsContainer', mainContainer);
    const imageCounter = createElement('span', 'imageCounter', sliderButtonsContainer);
    const squareContainer = createElement('div', 'squareContainer', sliderButtonsContainer);
    const arrowButtonsContainer = createElement('div', 'arrowButtonsContainer', sliderButtonsContainer);
    const leftArrow = createElement('button', 'arrowButton', arrowButtonsContainer);
    const rightArrow = createElement('button', 'arrowButton', arrowButtonsContainer);

    const activeSquareList = [];

    for (let s = 0; s < sliderPictureList.length; s++) {
        const square = createElement('div', 'square', squareContainer);
        activeSquareList.push(square);
    }

    leftArrow.textContent = '←';
    rightArrow.textContent = '→';

    let currentImage = 1;
    let clicksCounter = 0;

    imageCounter.textContent = `0${currentImage} | 05`

    window.addEventListener('load', () => {
        activeSquareList[0].classList.add('active');
    });

    let moveLeft = -1000;
    let moveRight = 1000;
    let moveCounter = 0;

    function moveSliderToRight() {
        if (currentImage === 5) {
            return;
        }

        clicksCounter++;
        currentImage++;
        imageCounter.textContent = `0${currentImage} | 05`
        const allSquares = document.querySelectorAll('.square');
        allSquares.forEach(square => square.classList.remove('active'));
        activeSquareList[clicksCounter].classList.add('active');

        moveCounter += moveLeft;
        mainSlider.style.transform = `translateX(${moveCounter}px)`;
    }

    function moveSliderToLeft() {
        if (moveCounter === 0) {
            return;
        }

        clicksCounter--;
        currentImage--;
        imageCounter.textContent = `0${currentImage} | 05`
        const allSquares = document.querySelectorAll('.square');
        allSquares.forEach(square => square.classList.remove('active'));
        activeSquareList[clicksCounter].classList.add('active');

        moveCounter += moveRight;
        mainSlider.style.transform = `translateX(${moveCounter}px)`;
    }

    rightArrow.addEventListener('click', moveSliderToRight);
    leftArrow.addEventListener('click', moveSliderToLeft);
}