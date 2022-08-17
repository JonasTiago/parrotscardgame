const qtdCartas = prompt("quantas cartas")

if(qtdCartas > 0){
    const jogo = document.querySelector('.game-zone')
    let contador = 0;
    while(qtdCartas > contador){
        console.log(jogo.innerHTML)
        jogo.innerHTML += `<li></li>`
        contador++;
    }
}