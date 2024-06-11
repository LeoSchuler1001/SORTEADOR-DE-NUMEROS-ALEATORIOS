function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numeroAleatorio;

    if (quantidade > (ate - de)) {
        alert ('Reveja os números inseridos!');
    } else {
        if (de >= ate) {
            alert ('Reveja os números inseridos!');
        } else {
        for (let i = 0; i < quantidade; i++){
                numeroAleatorio = obterNumeroAleatorio(de, ate);

                while (sorteados.includes(numeroAleatorio)) {
                numeroAleatorio = obterNumeroAleatorio(de,ate);
                }

                sorteados.push(numeroAleatorio);
            }
        }
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    ligarBotaoReiniciar();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function ligarBotaoReiniciar() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) { 
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } 
    
}

function reiniciar () {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    desligarBotaoReiniciar();
}

function desligarBotaoReiniciar() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao')) { 
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
}
}
