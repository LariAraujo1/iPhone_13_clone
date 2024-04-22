const  buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

// objetivo: quando muda a cor muda a imagem do celular e a borda azul vai para a opção clicada//

//1- caminhar com o selecter (borda)

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e);

        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });
        const button = e.target;
        const id = button.getAttribute("id");
        button.querySelector(".color").classList.add("selected");

        image.classList.toggle("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);
        setTimeout(() => {
            image.classList.toggle("changing");
        }, 200);
    });    
});
