import { createElement } from "../utils/utils.mjs";
import { createHeader } from "../header/header.mjs";

export function createMain() {
    const main = createElement('div', 'main', document.body);
    createHeader(main);
    const mainContainer = createElement('div', 'mainContaier', main);

    const mainTitleContainer = createElement('div', 'mainTitleContainer', mainContainer);
    const welcome = createElement('span', 'welcome', mainTitleContainer);
    const mainTitleText = createElement('h1', 'mainTitleText', mainTitleContainer);
    const mainSubTitle = createElement('span', 'mainSubTitle', mainTitleContainer);
    const mainBtn = createElement('button', 'mainBtn', mainTitleContainer);

    welcome.textContent = 'welcome';
    mainTitleText.textContent = 'to the Louvre';
    mainSubTitle.textContent = 'From the castle to the museum';
    mainBtn.textContent = 'Discover the Louvre';

    const mainImage = createElement('div', 'mainImage', mainContainer);
}