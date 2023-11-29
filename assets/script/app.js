// app.js
import { User } from './User.js';
import { Subscriber } from "./Subscriber.js";

document.addEventListener('DOMContentLoaded', function () {
    const userIcon = document.querySelector('.profile');
    const htmlBody = document.querySelector('body');

    const user = new User(
        123, // id
        'Jay Jonah Jameson', // name
        'JJJ_DA_BEST', // username
        'jjj@jmail.jom' // email
    )

    const subscriber = new Subscriber(
        ['Page 1', 'Page 2', 'Page 3'], // pages
        ['Spider-lovers', 'Spider-haters'], // groups
        true // canMonetize
    );

    userIcon.addEventListener('click', function () {
        const userInformationDiv = document.createElement('div');
        userInformationDiv.innerHTML = user.getInfoHTML() + subscriber.getInfoHTML();
        htmlBody.appendChild(userInformationDiv);
    });
    
    });
