function clicar(){ var nota1 = document.querySelector(".nota1").value;
var nota2 = document.querySelector(".nota2").value;
var nota3 = document.querySelector(".nota3").value;
var nota4 = document.querySelector(".nota4").value;

var resultado = parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4);
var media = parseInt(resultado) / 4;
document.querySelector(".resultado").innerHTML = "Nota " + media;

if(media >= 5){
    alert("Parabéns, com essa nota você seria aprovado.");
}else{
    alert("Infelizmente com essa nota você não seria aprovado.");
}}