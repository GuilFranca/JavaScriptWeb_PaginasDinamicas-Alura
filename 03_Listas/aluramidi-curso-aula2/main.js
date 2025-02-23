function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

const botoes = document.querySelectorAll('.tecla');

botoes[0].onclick = tocaSomPom;
