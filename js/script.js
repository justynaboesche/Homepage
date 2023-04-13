{
    const welcome = () => {
        console.log("Cześć! Welcome GIT")
    };

    const changeBackground = () => {
        const bodyElement = document.querySelector(".js-body");
        const changeColourElement = document.querySelector(".js-changeColour");
        const buttons = document.querySelectorAll(".js-button")
        const headerElement = document.querySelector(".js-header__title")
        const navigation__linkElements = document.querySelectorAll(".navigation__link")
        const article__headerElements = document.querySelectorAll(".article__header")
        const imageOutlineElement = document.querySelector(".js-image");
        const sectionElements = document.querySelectorAll(".js-section")
        const articleBlueBackgroundElement = document.querySelector(".article--blueBackground")
        const article__foreignWordElements = document.querySelectorAll(".article__foreignWord")
        const section__linkElement = document.querySelector(".section__link")
        const tableHeaderElements = document.querySelectorAll(".table__cell--blueHeader")
        const footerElement = document.querySelector(".js-footer")

        bodyElement.classList.toggle("body--red");
        headerElement.classList.toggle("header__title--red");
        buttons.forEach((button) => {
            button.classList.toggle("button--red");
        });
        navigation__linkElements.forEach((navigation__linkElement) => {
            navigation__linkElement.classList.toggle("navigation__link--red");
        });
        article__headerElements.forEach((article__headerElement) => {
            article__headerElement.classList.toggle("article__header--red");
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
        tableHeaderElements.forEach((tableHeaderElement) => {
            tableHeaderElement.classList.toggle("table__cell--redHeader");
        });
        footerElement.classList.toggle("footer--red");
        changeColourElement.innerText = bodyElement.classList.contains("body--red") ? "niebieski" : "czerwony";
    };

    const showRemoveImage = () => {
        const imageElement = document.querySelector(".js-image");
        const showRemoveElement = document.querySelector(".js-showRemove");
        imageElement.classList.toggle("main__imageRemove");
        showRemoveElement.innerText = imageElement.classList.contains("main__imageRemove") ? "Pokaż" : "Ukryj";
    };

    const init = () => {
        const changeBackgroundButtonElement = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButtonElement.addEventListener("click", changeBackground);
        const showRemoveImageButtonElement = document.querySelector(".js-showRemoveImageButton");
        showRemoveImageButtonElement.addEventListener("click", showRemoveImage);

        welcome();
    };

    init();
}

