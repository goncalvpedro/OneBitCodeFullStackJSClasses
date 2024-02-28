const arr = ['Batman','Superman', 'Wonder Woman', 'Flash', 'Chaves', 'Kiko', 'Chiquinha', 'Seu Madruga', 'Nhonho']
console.log(arr)

// Adicionar elementos no array

// push
arr.push('Dona Florinda')
console.log(arr)

// unshift
arr.unshift('Professor Girafales')
console.log(arr)

// Remover Elementos
// pop
let ultimoElemento = arr.pop()

console.log(arr)
console.log(ultimoElemento)

// shift
let primeiroElemento = arr.shift()
console.log(primeiroElemento)

// Pesquisar un Elemento
// includes

const inclui = arr.includes('Batman')
console.log(inclui)

// indexOf
const index = arr.indexOf('Chaves')
console.log(index)

// Cortar e Concatenar
// slice

const justiceLeague = arr.slice(0,4)
console.log(justiceLeague)

const marvel = ['Deadpool', 'Wolverine', 'Thor', 'Spider-Man', 'Black Panther', 'Iron-Man', 'Captain-America']
const dc = ['Batman', 'Superman', 'Wonder-Woman', 'Aquaman', 'Flash', 'Robin', 'Penguin', 'Joker']

const hero = dc.slice(0,6)

const heroes = marvel.concat(hero)
console.log(hero, heroes)

// Substituição de Elementos
// splicer

// Devolve o elemento devolvido
const villains = dc.splice(0,6,['Loki', 'Thanos', 'Sandman', 'Pedro','Paulo','Alex'])
console.log(villains)

for (let indice = 0; indice < heroes.length; indice++) {
    const elemento = heroes[indice]
    console.log(elemento + " se encontra na posição " + indice)
}