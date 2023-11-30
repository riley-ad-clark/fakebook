'use strict';

import { User } from "./User.js"

class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize;

    constructor(id, name, userName, email, pages, groups, canMonetize) {
        super(id, name, userName, email);
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    get Pages() { return this.#pages; }
    get Groups() { return this.#groups; }
    get CanMonetize() { return this.#canMonetize; }

    get info() {
        return {
            pages: this.#pages,
            groups: this.#groups,
            canMonetize: this.#canMonetize,
        };
    }

    getInfoHTML() { 
        const info = this.info;
        const pageString = info.pages.join(', ');
        const groupsString = info.groups.join(', ');

        // I quite frankly love the HTML being in here...
        return `    ${super.getInfoHTML()}
                    <p>Pages: ${pageString}</p>
                    <p>Groups: ${groupsString}</p>
                    <p>Can Monetize: ${info.canMonetize}</p>
                </div>
            </div>
        `;
    }
}    

export { Subscriber };
