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

    getInfo() {
        return {
            id: this.#id,
            name: this.#name,
            userName: this.#userName,
            email: this.#email,
        }
    };

    getInfoHTML() {
        const info = this.Info();
        return `
        <p>ID: ${info.id}</p>
        <p>Name: ${info.name}</p>
        <p>Username: ${info.userName}</p>
        <p>Email: ${info.email}</p>
        `;
    }
}

export { User };