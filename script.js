/*pedindo cartas*/

let qtdCartas = prompt("Digite a quantidade de quartas que deseja (pares de 4 a 14):")

let contador;
while (contador !== 0) {
    if (qtdCartas >= 4 && qtdCartas <= 14 && (qtdCartas % 2 === 0)) {
        contador = 0;
        chamarCartas(qtdCartas)

    } else {
        qtdCartas = prompt("Digite a quantidade de quartas que deseja (pares de 4 a 14):")
    }
}

/*Distribuido as cartas */

function chamarCartas(numeroDesejado) {

    const jogo = document.querySelector('.game-zone')
    
    const cartasEmbaralhadas = sortear(numeroDesejado)
    cartasEmbaralhadas.sort(embaralhar)
    
    let entregue = 0;
    while (numeroDesejado > entregue) {
            jogo.innerHTML += `
                <div id="carta" class="carta" onclick="selecionarCarta(this)" data-carta="${cartasEmbaralhadas[entregue]}">
                    <div class="face" id="front"><img src="img/${cartasEmbaralhadas[entregue]}.gif" alt=""></div>
                    <div class="face" id="back"></div>
                </div>
                `

            entregue++;  
    }
}