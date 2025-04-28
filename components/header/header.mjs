import { createElement } from "../utils/utils.mjs";

export function createHeader(main) {
    const header = createElement('header', 'header', main);

    function createHeaderElemants() {
        const headerContainer = createElement('div', 'headerContainer', header);
        const logo = createElement('div', 'logo', headerContainer);

        const logoImage = createElement('img', 'logoImage', logo);
        const logoText = createElement('span', 'logoText', logo);

        const haderList = createElement('ul', 'headerList', headerContainer);
        const listParagraphs = ['Visiting', 'Explore', 'Video', 'Tickets', 'Contacts'];

        for (let i = 0; i < listParagraphs.length; i++ ) {
            const listParagraph = createElement('li', 'listParagraph', haderList);
            const listParagraphLink = createElement('a', 'listParagraphLink', listParagraph);
            listParagraphLink.href = `#${listParagraphs[i]}`;
            listParagraphLink.textContent = listParagraphs[i];
        }

        logoImage.src = '/museum/assets/images/png/Vector.png';
        logoText.textContent = 'Louvre';
    }

    createHeaderElemants();
}