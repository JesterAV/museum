import { createElement } from "../utils/utils.mjs";

export function createBuyTicketsSection() {
    const ticketsSection = createElement('div', 'ticketsSection', document.body);
    ticketsSection.id = 'Tickets';

    const ticketsSectionContainer = createElement('div', 'ticketsContainer', ticketsSection);
    const ticketsTitleContainer = createElement('div', 'ticketsTitleContainer', ticketsSectionContainer);
    const ticketsTitle = createElement('span', 'ticketsTitle', ticketsTitleContainer).textContent = 'Buy tickets';
    const ticketsContainers = createElement('div', 'ticketsContainers', ticketsSectionContainer);
    const ticketsContainerImage = createElement('img', 'ticketsContainerImage', ticketsContainers);

    ticketsContainerImage.addEventListener('click', () => {
        window.open('./booking.html');
    })

    ticketsContainerImage.src = '/museum/assets/images/png/buySectionPhoto.png'; 
    const buyMenu = createElement('div', 'buyMenu', ticketsContainers);

    const ticketTypeContainer = createElement('div', 'ticketTypeContainer', buyMenu);
    const listName = createElement('span', 'listName', ticketTypeContainer).textContent = 'Ticket Type';
    const types = ['Permanent exhibition', 'Temporary exhibition', 'Combined Admission'];
    const typesList = createElement('ul', 'typesList', ticketTypeContainer);
    
    let activeCounter = 0;
    for (let i = 0; i < types.length; i++) {
        const type = createElement('li', 'typeListParagraph', typesList);
        const typeName = createElement('span', 'typeName', type).textContent = types[i];

        type.addEventListener('click', () => {
            const allTypes = document.querySelectorAll('.typeListParagraph');
            allTypes.forEach(item => item.classList.remove('active'));

            type.classList.add('active');
        })

        if (activeCounter === 0) {
            type.classList.add('active');
            activeCounter++;
        }
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
        let currentValue = parseInt(inputCount.value) || 0;
        if (currentValue > 0) {
            currentValue--;
            inputCount.value = currentValue;
        }
    });

    plusButton.addEventListener('click', () => {
        inputCount.value++;
    });

    seniorMinusButton.addEventListener('click', () => {
        let currentValue = parseInt(seniorInputCount.value) || 0;
        if (currentValue > 0) {
            currentValue--;
            seniorInputCount.value = currentValue;
        }
    });

    seniorPlusButton.addEventListener('click', () => {
        seniorInputCount.value++;
    });

    
}