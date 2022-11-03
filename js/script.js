console.log("Cześć! Welcome GIT");

let changeBackgroundButtonElement = document.querySelector(".js-changeBackgroundButton");
let bodyElement = document.querySelector(".js-body");
let changeColourElement = document.querySelector(".js-changeColour");
let navigation__linkElements = document.querySelectorAll(".navigation__link")
let imageOutlineElement = document.querySelector(".js-image");
let sectionElements = document.querySelectorAll(".js-section")
let articleBlueBackgroundElement = document.querySelector(".article--blueBackground")
let article__foreignWordElements = document.querySelectorAll(".article__foreignWord")
let section__linkElement = document.querySelector(".section__link")

changeBackgroundButtonElement.addEventListener("click", () => {
    bodyElement.classList.toggle("body--red");

    navigation__linkElements.forEach((navigation__linkElement) => {
        navigation__linkElement.classList.toggle("navigation__link--red");
    });

    imageOutlineElement.classList.toggle("main__image--red");

    sectionElements.forEach((sectionElement) => {
        sectionElement.classList.toggle("section--red");
    });

    articleBlueBackgroundElement.classList.toggle("article--redBackground");

    article__foreignWordElements.forEach((article__foreignWordElement) => {
        article__foreignWordElement.classList.toggle("article__foreignWord--red");
    });

    section__linkElement.classList.toggle("section__link--red");


    changeColourElement.innerText = bodyElement.classList.contains("body--red") ? "niebieski" : "czerwony";
});


let showRemoveImageButtonElement = document.querySelector(".js-showRemoveImageButton");
let imageElement = document.querySelector(".js-image");
let showRemoveElement = document.querySelector(".js-showRemove");

showRemoveImageButtonElement.addEventListener("click", () => {
    imageElement.classList.toggle("main__imageRemove");

    showRemoveElement.innerText = imageElement.classList.contains("main__imageRemove") ? "Pokaż" : "Ukryj"
});



