var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function() {
    document.querySelector(".container").classList.toggle("show-menu");

})

/* Forma simplificada 
document.querySelector(".hambuguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);*/