'use strict';

import { User } from "./User.js"

class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize;

    constructor(name, userName, id, email, pages, groups, canMonetize) {
        super(name, userName, id, email);
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    getInfoHTML() {
        const baseHTML = super.getInfoHTML();

        const subscriberInfo = this.getInfo();
        const subscriberHTML = `
        <p>Pages: ${subscriberInfo.pages.join(', ')}</p>
        <p>Groups: ${subscriberInfo.groups.join(', ')}</p>
        <p>Can Monetize: ${subscriberInfo.canMonetize}</p>
        `;

        return baseHTML + subscriberHTML;
    }
}

export { Subscriber };