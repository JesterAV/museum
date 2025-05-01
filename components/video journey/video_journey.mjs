import { createElement } from "../utils/utils.mjs";
import { linkOne, linkThree, linkFour, linkFive } from "../links/links.mjs";

export function createVideoJourneySection() {
    const videoSection = createElement('div', 'videoSection', document.body);
    videoSection.id = 'Video';

    const videoContainer = createElement('div', 'videoContainer', videoSection);

    const videoTextContainer = createElement('div', 'videoTextContainer', videoContainer);
    const viedoSectionTitle = createElement('span', 'viedoSectionTitle', videoTextContainer);
    const videoSectionSubTitle = createElement('span', 'videoSectionSubTitle', videoTextContainer);

    viedoSectionTitle.textContent = 'Video journey';
    videoSectionSubTitle.innerHTML = "Enter and visit one of the most famous museums in the world and enjoy<br> masterpieces such as Mona Lisa or Hammurabi's Code";

    const videoJourney = createElement('iframe', 'videoJourney', videoContainer);
    videoJourney.src = linkOne;

    const videoSliderContainer = createElement('div', 'videoSliderContainer', videoSection);

    const videoSlider = createElement('div', 'videoSlider', videoSliderContainer);
    const videoSliderButtons = createElement('div', 'sliderButtons', videoSliderContainer);
    const leftButton = createElement('button', 'videoSliderButton', videoSliderButtons);
    leftButton.textContent = '«';

    const sliderParagraphsList = [];

    for (let i = 0; i < 2; i++) {
        const sliderParagraph = createElement('div', 'sliderParagraph', videoSliderButtons);
        sliderParagraphsList.push(sliderParagraph);
    }

    const rightButton = createElement('button', 'videoSliderButton', videoSliderButtons);
    rightButton.textContent = '»';

    let videoSliderCounter = 0;

    window.addEventListener('load', () => {
        sliderParagraphsList[videoSliderCounter].classList.add('active');
    });

    const videoSectionLinks = [
        linkThree,
        linkFour,
        linkFive,
        linkOne
    ];

    for (let v = 0; v < videoSectionLinks.length; v++) {
        const sliderVideo = createElement('iframe', 'sliderVideo', videoSlider);
        sliderVideo.src = videoSectionLinks[v];
    }

    const distanceMovie = 494;
    let movie = 0;

    rightButton.addEventListener('click', () => {
        movie -= distanceMovie;
        videoSliderCounter++;
        videoSlider.style.transform = `translateX(${movie}px)`;

        const activeParagraph = document.querySelectorAll('.sliderParagraph');
        activeParagraph.forEach(p => p.classList.remove('active'));

        sliderParagraphsList[videoSliderCounter].classList.add('active');
    });

    leftButton.addEventListener('click', () => {
        movie += distanceMovie;
        videoSliderCounter--;

        videoSlider.style.transform = `translateX(${movie}px)`;

        const activeParagraph = document.querySelectorAll('.sliderParagraph');
        activeParagraph.forEach(p => p.classList.remove('active'));

        sliderParagraphsList[videoSliderCounter].classList.add('active');
    });
}