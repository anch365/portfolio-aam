let fondSombre = document.querySelector("#fond-sombre");
let fenetre = document.querySelector("#fenetre");
let menuBurger = document.querySelector("#menuB");

menuBurger.addEventListener("click", handleClickMenu);

function handleClickMenu() {
    fenetre.classList.remove("hidden");
    fenetre.classList.add("flex");
    fondSombre.classList.remove("hidden");
};

fondSombre.addEventListener("click", handleClickFondSombre);
function handleClickFondSombre() {
    fenetre.classList.add("hidden");
    fenetre.classList.remove("flex");
    fondSombre.classList.add("hidden");
}