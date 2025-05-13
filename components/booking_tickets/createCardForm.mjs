import { createElement } from "../utils/utils.mjs";

export function createCardForm(parent) {
    const frontSide = createElement('div', 'frontSide', parent);
    const backSide = createElement('div', 'backSide', parent);

    const cardNumber = createElement('span', 'sectionName', frontSide).textContent = 'Card number';

    const cardNumberInput = createElement('input', 'cardNumberInput', frontSide);
    cardNumberInput.setAttribute('type', 'text');    
    cardNumberInput.setAttribute('required', '');
    cardNumberInput.setAttribute('maxlength', '19');
    
    cardNumberInput.addEventListener('input', () =>{
        let value = cardNumberInput.value.replace(/\s/g, '');
        let formattedValue = '';

        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += ' ';
            }
        formattedValue += value[i];
        }

        cardNumberInput.value = formattedValue;
    });

    const reallyupto = createElement('span', 'sectionName', frontSide).textContent = 'Expiration date';
    const datesInputContainer = createElement('div', 'dateInputContainer', frontSide);
    const dateContainer = createElement('div', 'dateContainer', datesInputContainer);
    const yearContainer = createElement('div', 'dateContainer', datesInputContainer);

    const cardDateInput = createElement('input', 'cardDateInput', dateContainer);
    cardDateInput.setAttribute('type', 'text');    
    cardDateInput.setAttribute('required', '');
    cardDateInput.setAttribute('maxlength', '2');

    

    const cardYearInput = createElement('input', 'cardDateInput', yearContainer);
    cardYearInput.setAttribute('type', 'text');    
    cardYearInput.setAttribute('required', '');
    cardYearInput.setAttribute('maxlength', '4');

    const cardHolderName = createElement('span', 'sectionName', frontSide).textContent = 'Cardholder name';
    const cardHolderInput = createElement('input', 'cardHolderInput', frontSide);
    cardNumberInput.setAttribute('type', 'text');    
    cardNumberInput.setAttribute('required', '');

    const banksContainer = createElement('div', 'banksContainer', frontSide);
    const visa = createElement('img', 'visa', banksContainer);
    const mastercard = createElement('img', 'mastercard', banksContainer);
    visa.src = '/museum/assets/images/png/bookingTickets/banks/Visa.png';
    mastercard.src = '/museum/assets/images/png/bookingTickets/banks/Mastercard.png';

    const payLine = createElement('div', 'payLine', backSide);

    const codeInputContainer = createElement('div', 'codeInputContainer', backSide);
    const secureCode = createElement('span', 'secureCode', codeInputContainer).textContent = 'CVC/CVV';

    const codeInput = createElement('input', 'codeInput', codeInputContainer);
    codeInput.setAttribute('type', 'text');
    codeInput.setAttribute('require', '');
    codeInput.setAttribute('maxlength', '4');

    const descriptionCode = createElement('span', 'descriptionCode', codeInputContainer);
    descriptionCode.innerHTML = 'The last <br>3 or 4 digits <br>on back <br>of the card';

} 