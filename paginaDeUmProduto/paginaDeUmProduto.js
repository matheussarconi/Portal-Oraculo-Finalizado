

const comprar = document.querySelector(".comprar")
let popup = document.querySelector(".popup")
let main = document.querySelector(".main")
const confirmarCompra = document.querySelector(".confirmar")
let compraConfirmada = document.querySelector(".compraConfirmada")





comprar.addEventListener("click", () => {
    let stylePopup = window.getComputedStyle(popup);
    let displayPopup = stylePopup.getPropertyValue('display');

    if(displayPopup == "none"){
        popup.style.display = "flex";
        main.style.display = "none";
    }else{
        popup.style.display = "none";
        main.style.display = "flex";
    }
});

const addCarrinho = document.querySelector("#addCarrinho")

addCarrinho.addEventListener("click" , () => {
    const poçãoInvisibilidade = localStorage.setItem('produto' , 'poção de invisibilidade')

});