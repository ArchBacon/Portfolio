import { Controller } from '@hotwired/stimulus';
import { createIcons, icons } from 'lucide';

export default class extends Controller {
    connect() {
        super.connect();

        createIcons({ icons });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.offsetHeight; // This will force the reflow
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
}
