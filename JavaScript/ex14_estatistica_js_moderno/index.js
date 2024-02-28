// Calculate average
const numbers = prompt('Digite os números que deseja obter a media separados por vírgulas.\n' + 
                        'Use . para separar as casas decimais').split(',').map(Number)
console.log(numbers)
const media = (...numbers) => {

    let sum = 0
    for (let number, i = 0; number = numbers.length; i++) {
        sum += number
    }
    return sum / numbers.length
}

// Calcula média ponderada
const ponderada = (...numbers) => {
    let sum = 0
    for (let number, i = 0; number = numbers.length; i++) {
        sum += number * (i + 1)
    }
    return sum / numbers.length
}


