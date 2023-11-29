'use strict';

import { User } from "./User.js"

class Subscriber {
    #pages;
    #groups;
    #canMonetize;

    constructor(pages, groups, canMonetize) {
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    get Pages() { return this.#pages; }
    get Groups() { return this.#groups; }
    get CanMonetize() { return this.#canMonetize; }

    getInfo() {
        return {
            pages: this.#pages,
            groups: this.#groups,
            canMonetize: this.#canMonetize,
        };
    }

    getInfoHTML() { 
        const subscriberInfo = this.getInfo();
        const pagesString = subscriberInfo.pages.join(', ');
        const groupsString = subscriberInfo.groups.join(', ');
    
        return `
                    <p>Pages: ${pagesString}</p>
                    <p>Groups: ${groupsString}</p>
                    <p>Can Monetize: ${subscriberInfo.canMonetize}</p>
                </div>
            </div>
        `;
    }
    
}

export { Subscriber };

