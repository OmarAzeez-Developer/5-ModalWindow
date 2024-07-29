// activate strict mode
'use strict';

// Modal Window
/*
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

// querySelector to select single element
// querySelectorAll to select all elements
const btnsOpenModal = document.querySelectorAll(".show-modal");

// console.log(btnsOpenModal);

// open modal function
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

// close modal function
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

// loop through the NodeList which is the 3 show modal button then get there content
for (let i = 0; i < btnsOpenModal.length; i++) {
    // console.log(btnsOpenModal[i].textContent);

    // btnsOpenModal[i].addEventListener("click", function () {
    //     console.log("Button clicked");
    //     // show the hidden class from modal
    //     // we do NOT use (.hidden) because it is not a selecter
    //     modal.classList.remove("hidden");
    //     // show the hidden class from overlay
    //     overlay.classList.remove("hidden");
    // });
    // same as below
    // use closeModal NOT closeModal()
    btnsOpenModal[i].addEventListener("click", openModal);

    // // close from x button(x at the top left after clicking show modal)
    // btnCloseModal.addEventListener("click", function () {
    //     closeModal();
    // });
    // same as below
    // use closeModal NOT closeModal()
    btnCloseModal.addEventListener("click", closeModal);

    // // close from overlay (click outside the modal)
    // overlay.addEventListener("click", function () {
    //     closeModal();
    // });
    // same as below
    // use closeModal NOT closeModal()
    overlay.addEventListener("click", closeModal);   
}

    // click the Escape button to close the modal
    // we do NOT call the function 
    // we only define the function
    document.addEventListener("keydown", function (event) {
        // console.log("A key was pressed");
        console.log(event.key);

        // check if (Escape) button was pressed and if modal does NOT contain hidden class then close the modal
        if (event.key === "Escape" && !modal.classList.contains("hidden")) {
            // call closeModal function
            closeModal();
        }
    });
*/
