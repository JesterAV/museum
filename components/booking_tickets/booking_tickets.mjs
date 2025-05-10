import { createElement, createCalendar, createTimeForm } from "../utils/utils.mjs";

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

    const emailForm = createElement('form', 'bookingForm', formsAndEntryTicketsContainer);
    const phoneForm = createElement('form', 'bookingForm', formsAndEntryTicketsContainer);
    const ticketTypeForm = createElement('form', 'bookingForm', formsAndEntryTicketsContainer);

    const entryTicketsContainer = createElement('div', 'entryTicketsContainer', formsAndEntryTicketsContainer);
    const entryTicketsTitleContainer = createElement('div', 'entryTicketsTitleContainer', entryTicketsContainer);
    const entryTicketsTitle = createElement('span', 'entryTicketsTitle', entryTicketsTitleContainer).textContent = 'Entry ticket';
}