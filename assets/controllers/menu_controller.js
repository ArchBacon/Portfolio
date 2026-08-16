import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['overlay', 'menu'];

    open() {
        this.overlayTarget.classList.remove('opacity-0', 'pointer-events-none');
        this.overlayTarget.classList.add('opacity-60', 'pointer-events-auto');

        this.menuTarget.classList.remove('translate-x-full');
        this.menuTarget.classList.add('translate-x-0');

        document.body.classList.add('overflow-hidden');
    }

    close() {
        this.overlayTarget.classList.remove('opacity-60', 'pointer-events-auto');
        this.overlayTarget.classList.add('opacity-0', 'pointer-events-none');

        this.menuTarget.classList.remove('translate-x-0');
        this.menuTarget.classList.add('translate-x-full');

        document.body.classList.remove('overflow-hidden');
    }
}
