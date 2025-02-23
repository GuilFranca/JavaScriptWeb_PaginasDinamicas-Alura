const botoes = document.querySelectorAll('input[type="button"]');
const tela = document.querySelector('input[type="tel"]');

botoes.forEach(botao => {
    botao.addEventListener("click", function() {
        valor = botao.value;
        tela.value = tela.value + valor;

        botao.onkeydown = function(event) {
            // event.code = retorna o valor exato enviado pelo teclado
            // event.key = retorna o valor que foi selecionado para aparecer no software. se pressionar shift + 1, será eviado !
            if(event.code === "Enter" || event.code === "Space"){
                botao.classList.add('ativa');
            }
        }

        botao.onkeyup = function() {
                botao.classList.remove('ativa');
        }

    });
});

// const listaDeTeclas = document.querySelectorAll('input[type=button]');

// for (let indice = 0; indice < listaDeTeclas.length; indice++) {
//     const tecla = listaDeTeclas[indice];

//     tecla.onkeydown = function (evento) {
//         if (evento.code === "Enter" || evento.code === "Space") {
//             tecla.classList.add('ativa');
//         }
//     }
//     tecla.onkeyup = function () {
//         tecla.classList.remove('ativa');
//     }
// }