'use strict';

class User {
    #id;
    #name;
    #userName;
    #email;

    constructor(id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    get Id() { return this.#id; }
    get Name() { return this.#name; }
    get UserName() { return this.#userName; }
    get Email() { return this.#email }
}