import { createMain } from "./components/main/main.mjs";
import { createVirtualTourSection } from "./components/virtual tour/virtual_tour.mjs";
import { createPictureExplore } from "./components/picture explore/picture_explore.mjs";
import { createVideoJourneySection } from "./components/video journey/video_journey.mjs";
import { createAptGallery } from "./components/apt gallery/apt_gallery.mjs";
import { createBuyTicketsSection } from "./components/buy tickets/buy_tickets.mjs";
import { createContactsSection } from "./components/contacts section/contacts_section.mjs";
import { createFooter } from "./components/footer/footer.mjs";
import { createParalax } from "./components/paralax/paralax.mjs";

createMain();
createVirtualTourSection();
createPictureExplore();
createVideoJourneySection();
createAptGallery();
createBuyTicketsSection();
createParalax();
createContactsSection();
createFooter();