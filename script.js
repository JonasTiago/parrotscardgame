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

/** Sortear as cartas*/

function sortear(qtdCartas) {
    const todasAsCartas = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
    let tipos = qtdCartas
    let escolhas = todasAsCartas.splice(0, tipos)
    
    return escolhas
}

function embaralhar() {
    return Math.random() - 0.5;

}


/* viranddo as cartas */

let primeiraCarta, segundaCarta;
let selecionadas = []
let jogadas = 0;

function selecionarCarta(carta) {
    carta.classList.add("giro");

   if (!primeiraCarta) {
        selecionadas.push(carta) 
        primeiraCarta = carta.dataset.carta;

    }else {
        selecionadas.push(carta)
        segundaCarta = carta.dataset.carta;

    }

    if(selecionadas.length == 2){
        setTimeout(comparandoCartas, 800)
     }
     else if(selecionadas.length > 2){
        alert("Apenas duas cartas por vez")
        selecionadas.forEach( (carta)=> {
            carta.classList.remove('giro')
        })
        selecionadas.splice(0, (selecionadas.length))
     }
}

/* Comparando as cartas */
let pares = 0;
function comparandoCartas() {
    if(primeiraCarta == segundaCarta){
        pares++
        setTimeout(fimDeJogo, 600)

    } else{
        selecionadas.forEach( (carta)=> {
            carta.classList.remove('giro')
        })

    }

    primeiraCarta = 0; 
    segundaCarta = 0;
    jogadas++
    return selecionadas.splice(0, 2)
}


/* Jogo0 finalizado*/

function fimDeJogo(){
   // const oMelhor = document.querySelector('span')
    if(jogadas == qtdCartas/2 && pares == qtdCartas/2){
        alert(`Finalizou o jogo em: ${jogadas} jogadas: Perfeito`)
       // oMelhor.classList.add("parabens")
        //oMelhor.innerHTML = `<img src="img/parabens.gif" alt="">`

    }else if(pares == qtdCartas/2){

        alert(`Finalizou o jogo em: ${jogadas} jogadas`)
    }
}
