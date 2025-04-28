import { createElement } from "../utils/utils.mjs";

export function createVideoJourneySection() {
    const videoSection = createElement('div', 'videoSection', document.body);
    videoSection.id = 'Video';
    const videoContainer = createElement('div', 'videoContainer', videoSection)
    const videoJourney = createElement('iframe', 'videoJourney', videoContainer);
    videoJourney.src = 'https://www.youtube.com/embed/zp1BXPX8jcU'; 

    const videoTextContainer = createElement('div', 'videoTextContainer', videoSection);
    const viedoSectionTitle = createElement('span', 'viedoSectionTitle', videoTextContainer);
    const videoSectionSubTitle = createElement('span', 'videoSectionSubTitle', videoTextContainer);

    viedoSectionTitle.textContent = 'Video journey';
    videoSectionSubTitle.innerHTML = "Enter and visit one of the most famous museums in the world and enjoy<br> masterpieces such as Mona Lisa or Hammurabi's Code";
}