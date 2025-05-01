import { createElement } from "../utils/utils.mjs";

export function createPictureExplore() {
    const pictureExploreSection = createElement('div', 'pictureExploreSection', document.body);
    pictureExploreSection.id = 'Explore';

    const pictureExploreContainer = createElement('div', 'pictureExploreContainer', pictureExploreSection);
    const pictureExploreTextContainer = createElement('div', 'pictureExploreText', pictureExploreContainer);
    const pictureExploreImageContainer = createElement('div', 'pictureExploreImageContainer', pictureExploreContainer);
    const pictureExploreTitleContainer = createElement('div', 'pictureExploreTitleContainer', pictureExploreTextContainer);
    const pictureExploreTitle = createElement('span', 'pictureExploreTitle', pictureExploreTitleContainer);
    const pictureExploreTextParagraphOne = createElement ('p', 'pictureExploreParagraph', pictureExploreTextContainer);
    const pictureExploreTextParagraphTwo = createElement ('p', 'pictureExploreParagraph', pictureExploreTextContainer);
    const pictureExploreTextParagraphThree = createElement ('p', 'pictureExploreParagraph', pictureExploreTextContainer);
    const pictureExploreImage = createElement('img', 'pictureExploreImage', pictureExploreImageContainer);

    const yellowVeil = document.createElement('span');
    yellowVeil.textContent = '"yellow veil"';
    yellowVeil.style.color = '#9D8665';

    pictureExploreImage.src = '/museum/assets/images/png/picture-explore.png';
    pictureExploreTitle.textContent = 'Picture explore';
    pictureExploreTextParagraphOne.textContent = 'Las Meninas is a 1656 painting by Diego Velázquez, the leading artist of the Spanish Golden Age.';
    
    pictureExploreTextParagraphTwo.textContent = 'It was cleaned in 1984 to remove a ';
    pictureExploreTextParagraphTwo.innerHTML += '<span style = "color: #9D8665;"> "yellow veil" </span>';
    pictureExploreTextParagraphTwo.innerHTML += ' of dust that had gathered since the previous restoration in the 19th century.';
   
    pictureExploreTextParagraphThree.textContent = 'The cleaning provoked furious protests, not because the picture had been damaged in any way, but because it looked different.';

    const sliderContainer = createElement('div', 'sliderContainer', pictureExploreImageContainer);
    const sliderStripeOne = createElement('div', 'sliderStripeOne', sliderContainer);
    const sliderCircle = createElement('div', 'sliderCircle', sliderContainer);
    const sliderStripeTwo = createElement('div', 'sliderStripeTwo', sliderContainer);

    let isDragging = false;
    let startX;
    let origX;

    sliderContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;

        const rect = sliderContainer.getBoundingClientRect();
        origX = rect.left;

        sliderContainer.classList.add('move');
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const dx = e.clientX - startX;

        const containerRect = pictureExploreImageContainer.getBoundingClientRect();
        const sliderWidth = sliderContainer.offsetWidth;

        let newLeft = origX + dx;

        if (newLeft < containerRect.left) {
            newLeft = containerRect.left; 
        } else if (newLeft + sliderWidth > containerRect.right) {
            newLeft = containerRect.right - sliderWidth; 
        }

        sliderContainer.style.left = newLeft - containerRect.left + 'px'; 

        const sliderPosition = newLeft - containerRect.left;

        const maxOpacity = 1;
        const minOpacity = 0; 

        const distanceToSliderEdge = Math.max(0, sliderPosition);

        const containerWidth = containerRect.width;

        const opacityValue = Math.max(minOpacity, Math.min(maxOpacity, distanceToSliderEdge / (containerWidth - sliderWidth)));

        pictureExploreImage.style.opacity = opacityValue;
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            sliderContainer.classList.remove('move');
        }
    });

}