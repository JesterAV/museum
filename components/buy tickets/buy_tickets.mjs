import { createElement } from "../utils/utils.mjs";

export function createBuyTicketsSection() {
    const ticketsSection = createElement('div', 'ticketsSection', document.body);
    const ticketsSectionContainer = createElement('div', 'ticketsContainer', ticketsSection);
    const ticketsTitleContainer = createElement('div', 'ticketsTitleContainer', ticketsSectionContainer);
    const ticketsTitle = createElement('span', 'ticketsTitle', ticketsTitleContainer).textContent = 'Buy tickets';
    const ticketsContainers = createElement('div', 'ticketsContainers', ticketsSectionContainer);
    const ticketsContainerImage = createElement('img', 'ticketsContainerImage', ticketsContainers);
    ticketsContainerImage.src = '/museum/assets/images/png/buySectionPhoto.png'; 
    const buyMenu = createElement('div', 'buyMenu', ticketsContainers);

    const ticketTypeContainer = createElement('div', 'ticketTypeContainer', buyMenu);
    const listName = createElement('span', 'listName', ticketTypeContainer).textContent = 'Ticket Type';
    const types = ['Permanent exhibition', 'Temporary exhibition', 'Combined Admission'];
    const typesList = createElement('ul', 'typesList', ticketTypeContainer);
    
    for (let i = 0; i < types.length; i++) {
        const type = createElement('li', 'typeListParagraph', typesList).textContent = types[i];
    }

    const amountContainer = createElement('div', 'amountContainer', buyMenu);
    const amountName = createElement('span', 'amountName', amountContainer).textContent = 'Amount';
    const ageName = createElement('span', 'ageName', amountContainer).textContent = 'Basic 18+';
    const ageCounterContainer = createElement('div', 'ageCounterContainer', amountContainer);
    const minusButton = createElement('button', 'counterBtn', ageCounterContainer);
    minusButton.textContent = '-';
    const inputCount = createElement('input', 'inputCount', ageCounterContainer);
    inputCount.value = 0;
    const plusButton = createElement('button', 'counterBtn', ageCounterContainer);
    plusButton.textContent = '+';

    const seniorName = createElement('div', 'ageName', amountContainer).textContent = 'Senior 65+';
    const seniorCounterContainer = createElement('div', 'ageCounterContainer', amountContainer);
    const seniorMinusButton = createElement('button', 'counterBtn', seniorCounterContainer);
    seniorMinusButton.textContent = '-';
    const seniorInputCount = createElement('input', 'inputCount', seniorCounterContainer);
    seniorInputCount.value = 0;
    const seniorPlusButton = createElement('button', 'counterBtn', seniorCounterContainer);
    seniorPlusButton.textContent = '+';

    let result = 0;

    const totalSum = createElement('span', 'totalSum', amountContainer);
    totalSum.textContent = `Total €${result}`;

    minusButton.addEventListener('click', () => {
        if (inputCount >= 0) {
            inputCount.value--;
        } else {
            return;
        }
    });

    plusButton.addEventListener('click', () => {
        inputCount.value++;
    });

    seniorMinusButton.addEventListener('click', () => {
        if (seniorInputCount >= 0) {
            seniorInputCount.value--;
        } else {
            return;
        }
    });

    seniorPlusButton.addEventListener('click', () => {
        seniorInputCount.value++;
    });

    

}