import { createElement } from "../utils/utils.mjs";
import { apiMap } from "../api keys/api_keys.mjs";
import { createMap } from "../utils/utils.mjs";

export function createContactsSection() {

    const contactsSrction = createElement('div', 'contactsSection', document.body);
    const contactsContainer = createElement('div', 'contactsContainer', contactsSrction);

    const contactsTitleContainer = createElement('div', 'contactsTitleContainer', contactsContainer);
    const contactsTitle = createElement('span', 'contactsTitle', contactsTitleContainer);

    const contactsContainerTwo = createElement('div', 'contactsContainerTwo', contactsContainer);
    const contactsInfoContainer = createElement('div', 'contactsInfoContainer', contactsContainerTwo);
    const infoContainerTitle = createElement('h2', 'infoContainerTitle', contactsInfoContainer);
    
    const contacts = [
        'address: 75001 Paris, France',
        'phone: +33(0) 1 40 20 50 50',
        'mail: info@louvre.fr'
    ];

    for (let i = 0; i < contacts.length; i++) {
        const contact = createElement('p', 'contact', contactsInfoContainer);
        contact.textContent = contacts[i];
    }

    infoContainerTitle.innerHTML = 'Palais Royal<br>Musee du Louvre';
    contactsTitle.textContent = 'Contacts';

    const mapContainer = createElement('div', 'mapContainer', contactsContainerTwo);
    mapContainer.id = 'map';

    createMap(apiMap);
}