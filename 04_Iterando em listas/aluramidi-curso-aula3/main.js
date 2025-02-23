// function tocaSom(idElementoAudio) {
//     document.querySelector(idElementoAudio).play();
// }

// const listaDeTeclas = document.querySelectorAll('.tecla');

// for(let i = 0; i < listaDeTeclas.length; i++) {

//     const tecla = listaDeTeclas[i];
//     const instrumento = tecla.classList[1];
//     const idAudio = `#som_${instrumento}`;

//     tecla.onclick = function() {
//         tocaSom(idAudio);
//     }

// }

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(tecla => {
    tecla.addEventListener("click", function() {
        const instrumento = tecla.classList[1];
        document.querySelector(`#som_${instrumento}`).play();
    })
})
