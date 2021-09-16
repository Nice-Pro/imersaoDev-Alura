function converter(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);

    var valorEmDolarNumerico = valorEmReal / 5.24;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Dólar é $: " + valorEmDolarNumerico.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
}
function converter1(){
    var valorElemento = document.getElementById("valor1");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);

    var valorEmEuroNumerico = valorEmReal / 6.17;
    var elementoValorConvertido = document.getElementById("valorConvertido1");
    var valorConvertido = "O resultado em Euro é €: " + valorEmEuroNumerico.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
}
function converter2(){
    var valorElemento = document.getElementById("valor2");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);

    var valorEmBitcoin = valorEmReal / 250935.13;
    var elementoValorConvertido = document.getElementById("valorConvertido2");
    var valorConvertido = "O resultado em Bitcoin é ₿: " + valorEmBitcoin.toFixed(7);
    elementoValorConvertido.innerHTML = valorConvertido;
}