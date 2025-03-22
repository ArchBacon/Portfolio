import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

/*
* Lucide icons are imported here: assets/controllers/icon_controller.js
*
* This file is only loaded at initial load and not after, this causes the icons
* on the page to only be visible on initial load and not after any other page load
* or void url (javascript:void(0))
*/

// -------------------------- CHATGPT CODE BELOW -------------------------------
// Show scrol to top CTA
const checkScroll = () => {
    const portfolioElement = document.querySelector('#portfolio');
    const totopCTA = document.getElementById('totop-cta');
    const portfolioRect = portfolioElement.getBoundingClientRect();

    if (portfolioRect.top <= window.innerHeight * 0.6) {
        totopCTA.classList.replace("opacity-0", "opacity-100"); // Show to-top CTA
    } else {
        totopCTA.classList.replace("opacity-100", "opacity-0"); // Hide to-top CTA
    }
};
window.addEventListener('scroll', checkScroll);
checkScroll();