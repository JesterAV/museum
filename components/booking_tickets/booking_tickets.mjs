import { createElement, createCalendar, createTimeForm, cloneElement } from "../utils/utils.mjs";
import { createCardForm } from "./createCardForm.mjs";

export function createBookingTickets() {
    const bookingSection = createElement('div', 'bookingSection', document.body);

    const markButtonContainer = createElement('div', 'markButtonContainer', bookingSection);
    const markLineOne = createElement('div', 'markLineOne', markButtonContainer);
    const markLineTwo = createElement('div', 'markLineTwo', markButtonContainer);

    const bookingContainerOne = createElement('div', 'bookingContainerOne', bookingSection);
    const bookingContainerTwo = createElement('div', 'bookingContainerTwo', bookingSection);

    const bookingLogoAndTitlesContainer = createElement('div', 'bookingLogoAndTitlesContainer', bookingContainerOne);
    const bookingLogoAndTitle = createElement('div', 'bookingLogoAndTitle', bookingLogoAndTitlesContainer);
    const bookingLogo = createElement('img', 'bookingLogo', bookingLogoAndTitle);
    bookingLogo.src = '/museum/assets/images/png/logoToBooking.png';
    const bookingTitle = createElement('span', 'bookingTitle', bookingLogoAndTitle).textContent = 'Booking tickets';
    const bookingSubtitleContainer = createElement('div', 'bookingSubtitleContainer', bookingLogoAndTitlesContainer);
    const bookingSubTitle = createElement('span', 'bookingSubtitle', bookingSubtitleContainer).textContent = 'Tour to Louvre';

    const formsAndEntryTicketsContainer = createElement('div', 'formsAndEntryTicketsContainer', bookingContainerOne);

    const dateAndTimeFormContainer = createElement('div', 'dateAndTimeFormContainer', formsAndEntryTicketsContainer);
    const dateForm = createElement('form', 'dateAndTimeForm', dateAndTimeFormContainer);
    createCalendar(dateForm);
    const timeForm = createElement('form', 'dateAndTimeForm', dateAndTimeFormContainer);
    createTimeForm(timeForm);

    const nameForm = createElement('form', 'bookingForm', formsAndEntryTicketsContainer);
    const nameFormIcon = createElement('img', 'nameFormIcon', nameForm);
    nameFormIcon.src = '/museum/assets/images/png/bookingTickets/name.png';
    const nameInput = createElement('input', 'formInput', nameForm);
    nameInput.type = 'text';
    nameInput.setAttribute('required', '');
    nameInput.placeholder = 'Name';
    nameInput.setAttribute('name', 'nameInput');

    const emailForm = createElement('form', 'bookingForm', formsAndEntryTicketsContainer);
    const emailFormIcon = createElement('img', 'emailFormIcon', emailForm);
    emailFormIcon.src = '/museum/assets/images/png/bookingTickets/email.png';
    const emailInput = createElement('input', 'formInput', emailForm);
    emailInput.type = 'email';
    emailInput.setAttribute('required', '');
    emailInput.placeholder = 'E-mail';
    emailInput.setAttribute('name', 'emailInput');

    const phoneForm = createElement('form', 'bookingForm', formsAndEntryTicketsContainer);
    const phoneFormIcon = createElement('img', 'phoneFormIcon', phoneForm);
    phoneFormIcon.src = '/museum/assets/images/png/bookingTickets/tel.png';
    const phoneInput = createElement('input', 'formInput', phoneForm);
    phoneInput.type = 'tel';
    phoneInput.setAttribute('required', '');
    phoneInput.placeholder = 'Phone';
    phoneInput.setAttribute('name', 'phoneInput');

    const ticketTypeForm = createElement('form', 'bookingForm', formsAndEntryTicketsContainer);
    const ticketTypeIcon = createElement('img', 'ticketTypeIcon', ticketTypeForm);
    ticketTypeIcon.src = '/museum/assets/images/png/bookingTickets/ballot.png'
    const selectMenu = createElement('select', 'selectMenu', ticketTypeForm);
    selectMenu.setAttribute('id', 'ticketType');
    selectMenu.setAttribute('required', '');
    const typesList = [
        'Permanent exhibition',
        'Temporary exhibition',
        'Combined Admission'
    ];

    const typeForTicketForm = createElement('option', 'typeForTicketForm', selectMenu);
    typeForTicketForm.textContent = 'Ticket Type';
    typeForTicketForm.value = '';

    for (let i = 0; i < typesList.length; i++) {
        const typeForTicketForm = createElement('option', 'typeForTicketForm', selectMenu);
        typeForTicketForm.textContent = typesList[i];
        typeForTicketForm.value = i + 1;
    }

    const typeBtn = createElement('button', 'formBtn', ticketTypeForm);
    typeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        selectMenu.showPicker();
    });

    const entryTicketsContainer = createElement('div', 'entryTicketsContainer', formsAndEntryTicketsContainer);
    const entryTicketsTitleContainer = createElement('div', 'entryTicketsTitleContainer', entryTicketsContainer);
    const entryTicketsTitle = createElement('span', 'entryTicketsTitle', entryTicketsTitleContainer).textContent = 'Entry ticket';

    const bookingInformationContainer = createElement('div', 'bookingInformationContainer', bookingContainerTwo);
    const titleAndSubtitleContainerTwo = createElement('div', 'titleAndSubtitleContainerTwo', bookingInformationContainer);
    const titleContainerTwo = createElement('span', 'titleContainerTwo', titleAndSubtitleContainerTwo).textContent = 'Overview';
    const subtitleContainerTwo = createElement('span', 'subtitleContainerTwo', titleAndSubtitleContainerTwo).textContent = 'Tour to Louvre';

    const bookingInformation = createElement('div', 'bookingInformation', bookingInformationContainer);
    
    const dateIconContainerI = document.createElement('div');
    dateIconContainerI.classList.add('dateIconContainer');
    const dateIconFirstI = createElement('img', 'dateIcon', dateIconContainerI);
    const dateIconSecondI = createElement('img', 'dateIcon', dateIconContainerI)
    dateIconFirstI.src = '/museum/assets/images/png/bookingTickets/date.png';
    dateIconSecondI.src = '/museum/assets/images/png/bookingTickets/date-1.png';
    dateIconSecondI.classList.add('secondIcon');
    
    const infoIconsList = [
        dateIconContainerI,
        '/museum/assets/images/png/bookingTickets/time.png',
        '/museum/assets/images/png/bookingTickets/doneIcon.png'
    ]

    const paragrapghsID = [
        'date',
        'time',
        'type'
    ]

    for (let i = 0; i < infoIconsList.length; i++) {
        const informationParagraph = createElement('div', 'informationParagraph', bookingInformation);

        if (i === 0) {
            informationParagraph.appendChild(infoIconsList[i])
            const paragrapghInformation = createElement('span', 'paragrapghInformation', informationParagraph);
            paragrapghInformation.textContent = '-';
            paragrapghInformation.id = paragrapghsID[i];
            continue;
        }

        const paragrapghIcon = createElement('img', 'paragrapghIcon', informationParagraph);
        paragrapghIcon.src = infoIconsList[i];
        const paragrapghInformation = createElement('span', 'paragrapghInformation', informationParagraph);
        paragrapghInformation.textContent = '-';
        paragrapghInformation.id = paragrapghsID[i];
    }

    const bookingImage = createElement('img', 'bookingImage', bookingInformationContainer);
    bookingImage.src = '/museum/assets/images/png/bookingTickets/bookingImage.png';

    let basicTarif = 0;
    let seniorTarif = 0;
    let totalSumResult = 0;

    const totalSumContainer = createElement('div', 'totalSumContainer', bookingContainerTwo);
    const tarifOne = createElement('div', 'tarifLine', totalSumContainer);
    const tarifTwo = createElement('div', 'tarifLine', totalSumContainer);

    const tarifLine = createElement('div', 'totalLine', totalSumContainer);

    const tarifNameContainer = createElement('div', 'tarifNameContainer', tarifOne);
    const cloneTarifNameContainer = cloneElement(tarifNameContainer, tarifTwo);
    const guestCountContainer = createElement('div', 'guestCountContainer', tarifNameContainer);
    const cloneGuestCountContainer = cloneElement(guestCountContainer, cloneTarifNameContainer);
    const guestCount = createElement('span', 'guestCount', guestCountContainer);
    const cloneGuestCount = cloneElement(guestCount, cloneGuestCountContainer);
    guestCount.textContent = '0';
    const tarifName = createElement('span', 'tarifName', tarifNameContainer);
    const cloneTarifName = cloneElement(tarifName, cloneTarifNameContainer);
    tarifName.textContent = `Basic (${basicTarif} €)`;
    const totalSumTarifOne = createElement('span', 'tarifName', tarifOne);
    const cloneTotalSumTarifOne = cloneElement(totalSumTarifOne, tarifTwo);
    totalSumTarifOne.textContent = `${basicTarif} €`;

    cloneGuestCount.textContent = '0';
    cloneTarifName.textContent = `Senior (${basicTarif} €)`;
    cloneTotalSumTarifOne.textContent = `${seniorTarif} €`;

    const totalContainer = createElement('div', 'totalContainer', totalSumContainer);
    const total = createElement('span', 'total', totalContainer).textContent = 'Total:';
    const totalSum = createElement('span', 'totalSum', totalContainer);
    totalSum.textContent = `${totalSumResult} €`;

    const cardFormContainer = createElement('div', 'cardFormContainer', bookingContainerTwo);
    createCardForm(cardFormContainer);
}