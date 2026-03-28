'use strict'

import funcionarios from "./funcionarios.json" with { type: "json" }
function criarCard (funcionario){
    const card =document.createElement('div')
card.className = 'card'
const foto = document.createElement('img')
foto.src = `./img/${funcionario.imagem}`
foto.alt = `./foto de ${funcionario.nome}`

const nome = document.createElement('h3')
nome.textContent = funcionario.nome

const cargo = document.createElement('Span')
cargo.textContent = funcionario.cargo

card.append (foto,nome, cargo)
return card


}

const cards = funcionarios.map(criarCard)
document.getElementById('container').append(...cards)
console.log (cards)



