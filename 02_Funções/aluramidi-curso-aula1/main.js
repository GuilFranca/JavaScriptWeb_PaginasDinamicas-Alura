function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

// Guardando uma função em um atributo onclick 
// Não pode colocar a função com ()
document.querySelector('.tecla_pom').onclick = tocaSomPom;

// const pom = document.querySelector('.tecla_pom');

// pom.addEventListener("click", function() {
//     document.getElementById('som_tecla_pom').play();
// })

const clap = document.querySelector('.tecla_clap');

clap.addEventListener("click", function() {
    document.getElementById('som_tecla_clap').play();
})