const botão= document.querySelector("button");
const imagem= document.querySelector(".imagem");
const texto= document.querySelector("h2");

botão.addEventListener("click", function() {
   document.body.classList.toggle("escuro");

if (document.body.classList.contains("escuro")) {
    botão.textContent = "🧅"
    texto.textContent = "31 DE OUTUBRO"
    imagem.style.backgroundImage = "url('jumpscare.jpg')";


} else {
    botão.textContent = "🧅";
    texto.textContent = "30 DE OUTUBRO"
    imagem.style.backgroundImage = "url('shrekbonito.jpg')";
}

});
