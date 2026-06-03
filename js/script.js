'use strict'

const bookButton = document.querySelector(".book-but");
const applications = document.querySelector(".apps");
const cancelButton = document.querySelector(".app-cncl");

if (bookButton && applications && cancelButton)
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
    
    cancelButton.addEventListener("click", function()
        {
            applications.setAttribute("hidden", true);
        }
    );
}
