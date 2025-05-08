import { createElement } from "../utils/utils.mjs";

export function createBookingTickets() {
    const bookingSection = createElement('div', 'bookingSection', document.body);

    const bookingContainerOne = createElement('div', 'bookingContainerOne', bookingSection);
    const bookingContainerTwo = createElement('div', 'bookingContainerTwo', bookingSection);

    const markButtonContainer = createElement('div', 'markButtonContainer', bookingSection);
    const markLineOne = createElement('div', 'markLineOne', markButtonContainer);
    const markLineTwo = createElement('div', 'markLineTwo', markButtonContainer);
}