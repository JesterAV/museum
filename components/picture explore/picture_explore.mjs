import { createElement } from "../utils/utils.mjs";

export function createPictureExplore() {
    const pictureExploreSection = createElement('div', 'pictureExploreSection', document.body);
    const pictureExploreContainer = createElement('div', 'pictureExploreContainer', pictureExploreSection);
    const pictureExploreTextContainer = createElement('div', 'pictureExploreText', pictureExploreContainer);
    const pictureExploreImageContainer = createElement('div', 'pictureExploreImage', pictureExploreContainer);
    const pictureExploreTitleContainer = createElement('div', 'pictureExploreTitleContainer', pictureExploreTextContainer);
    const pictureExploreTitle = createElement('span', 'pictureExploreTitle', pictureExploreTitleContainer);
    const pictureExploreTextParagraphOne = createElement ('p', 'pictureExploreParagraph');
}