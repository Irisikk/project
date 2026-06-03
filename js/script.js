'use strict'

const bookButton = document.querySelector(".book-but");
const applications = document.querySelector(".apps");
// const bookConfirm = document.querySelector(".app-but");

if (bookButton && applications)
{
    bookButton.addEventListener("click", function(event)
            {
                applications.removeAttribute("hidden");
            }
        );

    window.addEventListener("click", function(event)
            {
                if (event.target === applications)
                {
                    applications.setAttribute("hidden", true);
                }
            }
        );
    // bookConfirm.addEventListener();
}
