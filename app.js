
const burguer = document.querySelector(#burguer-menu);
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burguer.addEventListener("click", () => {
    ul.classList.toggle("show");
});

const navLink = document.querySelectoAll(".nav-link");

nav.Link.forEach((link) => 
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

//Selección de desplazar hacia arriba

const scrollUp = document.querySelector("#scroll-up");

//Funcionalidad de desplazar hacia arriba

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

