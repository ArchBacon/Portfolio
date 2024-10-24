import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    discord(e) {
        navigator.clipboard.writeText('archbacon');

        let element = e.currentTarget;
        element.children[0].classList.replace("hidden", "block");
        setTimeout(function () {
            element.children[0].classList.replace("block", "hidden");
        }, 2000)
    }

    email(e) {
        navigator.clipboard.writeText('c.delicaat@hotmail.com');

        let element = e.currentTarget;
        element.children[0].classList.replace("hidden", "block");
        setTimeout(function () {
            element.children[0].classList.replace("block", "hidden");
        }, 2000)
    }
}
