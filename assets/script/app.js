'use strict';

import { User } from './User.js';
import { Subscriber } from './Subscriber.js';

document.addEventListener('DOMContentLoaded', function () {
    const userIcon = document.querySelector('.profile');
    const htmlBody = document.querySelector('body');
    let postContainer = document.querySelector('.post-container');
    const postContentInput = document.querySelector('.post-content');
    const imageInput = document.querySelector('#imageInput'); 
    const postBtn = document.querySelector('.post');
    const imageInputLabel = document.querySelector('.image-input-label');

    const user = new User(
        123, // id
        'Jay Jonah Jameson', // name
        'JJJ_DA_BEST', // username
        'jjj@jmail.jom', // email
    );

    const subscriber = new Subscriber(
        ['Page 1', 'Page 2', 'Page 3'], // pages
        ['Spider-lovers', 'Spider-haters'], // groups
        true, // canMonetize
    );

    postBtn.addEventListener('click', function () {
        const currentDate = new Date();
        const formattedDate = `${currentDate.toLocaleString('default', { month: 'short' })} ${currentDate.getDate()}, ${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;
    
        // Get user input
        const postText = postContentInput.value;
        const selectedPhoto = imageInput.files[0];
    
        if (postText.trim() !== '') {
            // Reinitialize postContainer after deleting the placeholder post
            postContainer = document.querySelector('.post-container');
            
            // Create a new post box HTML with an object URL for the image
            const postBoxHTML = createPostBoxHTML(formattedDate, postText, selectedPhoto);

            if (postContainer) {
                // Insert the post box HTML at the beginning of the post container
                postContainer.insertAdjacentHTML('afterbegin', postBoxHTML);
    
                postContentInput.value = '';
                imageInput.value = '';
                imageInputLabel.innerHTML = '';
            }
        }
    });

    // Update the image input label when a file is selected
    if (imageInputLabel !== false) {
        imageInput.addEventListener('change', function () {
            const selectedPhoto = imageInput.files[0];
            const maxCharacters = 20;
            const displayedFileName = selectedPhoto ? (selectedPhoto.name.length > maxCharacters ? selectedPhoto.name.substring(0, maxCharacters) + '...' : selectedPhoto.name) : 'No file selected';

            if (selectedPhoto) {
                // Display the URL of the selected image next to the photo select button
                imageInputLabel.textContent = `Image: ${displayedFileName}`;
            } else {
                imageInputLabel.textContent = '';
            }
        });
    }

    const modalBox = document.createElement('div');
    modalBox.classList.add('modal-box');

    userIcon.addEventListener('click', function () {
        // Toggle the class to show or hide the modal box
        modalBox.classList.toggle('show');

        if (modalBox.classList.contains('show')) {
            // If it's visible, show the html from classes
            modalBox.innerHTML = user.getInfoHTML() + subscriber.getInfoHTML();
            htmlBody.appendChild(modalBox);
            document.addEventListener('click', closeIfClickedOutside);
        } else {
            // If it's hidden, remove the html from classes...
            modalBox.innerHTML = '';
            modalBox.remove();
            document.removeEventListener('click', closeIfClickedOutside);
        }
    });

    function closeIfClickedOutside(event) {
        // Check if the click is outside the modal box and userIcon
        if (
            !modalBox.contains(event.target) &&
            event.target !== userIcon &&
            !userIcon.contains(event.target)
        ) {
            modalBox.classList.remove('show');
            modalBox.innerHTML = '';
            document.removeEventListener('click', closeIfClickedOutside);
        }
    }

    // Function to create a post box HTML
    function createPostBoxHTML(datePosted, postText, postImage) {
        const userName = user.UserName;

        // Check if an image is selected
        if (postImage instanceof File) {
            const imageURL = URL.createObjectURL(postImage);

            return `
                <div class="user-post">
                    <div class="post-header">
                        <div class="un-icon">
                            <img src="./assets/images/profile-picture.jpg" alt="user's profile picture">
                            <p class="user-name">${userName}</p>
                        </div>
                        <div class="post-date">
                            <p class="date-posted">${datePosted}</p>
                        </div>
                    </div>
                    <div class="post-content">
                        <p class="post-text">${postText}</p>
                        <img src="${imageURL}" class="post-image">
                    </div>
                </div>`;
        } else {
            // Handle the case when no image is selected
            return `
                <div class="user-post">
                    <div class="post-header">
                        <div class="un-icon">
                            <img src="./assets/images/profile-picture.jpg" alt="user's profile picture">
                            <p class="user-name">${userName}</p>
                        </div>
                        <div class="post-date">
                            <p class="date-posted">${datePosted}</p>
                        </div>
                    </div>
                    <div class="post-content">
                        <p class="post-text">${postText}</p>
                    </div>
                </div>`;
        }
    }
});
