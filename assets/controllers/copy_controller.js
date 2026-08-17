import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['popup'];
    static values = { text: String };

    async copy() {
        await navigator.clipboard.writeText(this.textValue);

        this.popupTarget.classList.remove('opacity-0', 'pointer-events-none');
        this.popupTarget.classList.add('opacity-100');

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.popupTarget.classList.remove('opacity-100');
            this.popupTarget.classList.add('opacity-0', 'pointer-events-none');
        }, 1200);
    }
}
