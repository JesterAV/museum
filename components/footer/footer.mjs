import { createElement } from "../utils/utils.mjs";
import { youtubeLink, instagramLink, facebookLink, twitterLink, pinterestLink } from "../links/links.mjs";

export function createFooter() {
    const footer = createElement('footer', 'footer', document.body);
    const footerContainer = createElement('div', 'footerContainer', footer);

    const footerLogoContainer = createElement('div', 'footerLogoContainer', footerContainer);
    const footerLogoImage = createElement('img', 'logoImage', footerLogoContainer);
    const footerLogoText = createElement('span', 'logoText', footerLogoContainer);

    footerLogoImage.src = '/museum/assets/images/png/Vector.png';
    footerLogoText.textContent = 'Louvre';

    const footerNav = createElement('nav', 'footerNav', footerContainer);
    
    const footerNavigationList = ['Welcome', 'Visiting', 'Explore',
        'Video', 'Tickets', 'Contacts'
    ];
    
    const firstList = createElement('ul', 'navList', footerNav);
    const secondList = createElement('ul', 'navList', footerNav);

    for (let i = 0; i < footerNavigationList.length; i++) {
        if (i <= (footerNavigationList.length / 2) -1) {
            const listParagrapgh = createElement('li', 'footerListParagraph', firstList);
            const listParagrapghLink = createElement('a', 'listParagrapghLink', listParagrapgh)
            listParagrapghLink.textContent = footerNavigationList[i];
            listParagrapghLink.href = `#${footerNavigationList[i]}`;
        } else {
            const listParagrapgh = createElement('li', 'footerListParagraph', secondList);
            listParagrapgh.textContent = footerNavigationList[i]; 
        }
    }

    const iconsContainer = createElement('div', 'iconsContainer', footerContainer);

    const iconsList = [
        '/museum/assets/images/svg/youtube.svg',
        '/museum/assets/images/svg/instagram.svg',
        '/museum/assets/images/svg/facebook.svg',
        '/museum/assets/images/svg/twitter.svg',
        '/museum/assets/images/svg/pinterest.svg'
    ]

    const iconsLinksList = [
        youtubeLink,
        instagramLink,
        facebookLink,
        twitterLink,
        pinterestLink
    ]

    for (let p = 0; p < iconsList.length; p++) {
        const iconLink = createElement('a', 'iconLink', iconsContainer)
        const iconButton = createElement('div', 'iconButton', iconLink)
        const icon = createElement('img', 'socialIcons', iconButton);
        icon.src = iconsList[p];
        iconLink.href = iconsLinksList[p];
        iconLink.target = '_blank';
    }

    const footerLine = createElement('div', 'footerLine', footer);
    const lastString = createElement('div', 'lastString', footer);
    
    const lastStringList = [
        '© 2021',
        'The Rolling Scopes School',
        'JesterAV'
    ]

    for (let s = 0; s < lastStringList.length; s++) {
        const listWord = createElement('span', 'listWord', lastString);
        listWord.textContent = lastStringList[s];
    }
}