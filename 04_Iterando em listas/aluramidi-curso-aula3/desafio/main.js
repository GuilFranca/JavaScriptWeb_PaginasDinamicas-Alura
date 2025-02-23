const botoes = document.querySelectorAll('input[type="button"]');
const tela = document.querySelector('input[type="tel"]');

botoes.forEach(botao => {
    botao.addEventListener("click", function() {
        valor = botao.value;
        tela.value = tela.value + valor;
    })
});