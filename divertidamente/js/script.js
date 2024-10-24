// DOM
const silhueta = document.querySelector('#alvo')
const botao_raiva = document.querySelector('#botao_raiva')
const botao_alegria = document.querySelector('#botao_alegria')
const botao_nojinho = document.querySelector('#botao_nojinho')
const botao_tristeza = document.querySelector('#botao_tristeza')

// Evento
botao_raiva.addEventListener('click',raiva)
botao_alegria.addEventListener('click',alegria)
botao_nojinho.addEventListener('click',nojinho)
botao_tristeza.addEventListener('click',tristeza)
silhueta.addEventListener('dblclick', padrao)

// Função
function raiva(){
    silhueta.src='images/01.png'
}

function alegria(){
    silhueta.src='images/02.png'
}

function nojinho(){
    silhueta.src='images/03.png'
}

function tristeza(){
    silhueta.src='images/04.png'
}

function padrao(){
    silhueta.src='images/silhueta.png'
}