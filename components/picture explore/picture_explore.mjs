import { createElement } from "../utils/utils.mjs";

export function createPictureExplore() {
    const pictureExploreSection = createElement('div', 'pictureExploreSection', document.body);
    const pictureExploreContainer = createElement('div', 'pictureExploreContainer', pictureExploreSection);
    const pictureExploreTextContainer = createElement('div', 'pictureExploreText', pictureExploreContainer);
    const pictureExploreImageContainer = createElement('div', 'pictureExploreImageContainer', pictureExploreContainer);
    const pictureExploreTitleContainer = createElement('div', 'pictureExploreTitleContainer', pictureExploreTextContainer);
    const pictureExploreTitle = createElement('span', 'pictureExploreTitle', pictureExploreTitleContainer);
    const pictureExploreTextParagraphOne = createElement ('p', 'pictureExploreParagraph', pictureExploreTextContainer);
    const pictureExploreTextParagraphTwo = createElement ('p', 'pictureExploreParagraph', pictureExploreTextContainer);
    const pictureExploreTextParagraphThree = createElement ('p', 'pictureExploreParagraph', pictureExploreTextContainer);
    const pictureExploreImage = createElement('img', 'pictureExploreImage', pictureExploreImageContainer);

    pictureExploreImage.src = '/museum/assets/images/png/picture-explore.png';
    pictureExploreTitle.textContent = 'Picture explore';
    pictureExploreTextParagraphOne.textContent = 'Las Meninas is a 1656 painting by Diego Velázquez, the leading artist of the Spanish Golden Age.';
    pictureExploreTextParagraphTwo.textContent = 'It was cleaned in 1984 to remove a "yellow veil" of dust that had gathered since the previous restoration in the 19th century.';
    pictureExploreTextParagraphThree.textContent = 'The cleaning provoked furious protests, not because the picture had been damaged in any way, but because it looked different.';

}