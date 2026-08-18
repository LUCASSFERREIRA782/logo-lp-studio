const logo = document.querySelector(".logo-container");

document.addEventListener("mousemove", (event) => {

    const x = (window.innerWidth / 2 - event.clientX) / 40;
    const y = (window.innerHeight / 2 - event.clientY) / 40;

    logo.style.transform = `
        perspective(1000px)
        rotateY(${x}deg)
        rotateX(${y}deg)
    `;

});