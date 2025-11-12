const texto=document.getElementById("texto");
const contador=document.getElementById("contador");
texto.addEventListener("keyup",function(){
    contador.innerText=texto.value.length
});