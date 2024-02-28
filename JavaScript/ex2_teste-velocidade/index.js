const velocidade1 = prompt("Digite a velocidade do carro Nº1: ")
const unidade1 = prompt("Indique qual a unidade de medida da velocidade do carro 1:")

const velocidade2 = prompt("Digite a velocidade do carro Nº2: ")
const unidade2 = prompt("Indique qual a unidade de medida da velocidade do carro 2:")

// padronização de unidades
let veiculo1 = parseFloat(velocidade1)
let veiculo2 = parseFloat(velocidade2)

if (unidade1.startsWith("m")) {
    veiculo1 = veiculo1/3.6
}
if (unidade2.startsWith("m")) {
    veiculo2 = veiculo2/3.6
} 


if (veiculo1 > veiculo2) {
    let diff = veiculo1 - veiculo2
    alert(
        "O veículo número 1 é " + diff + "km/h mais rápido que o veículo número 2")
}
    
if (veiculo2 > veiculo1) {
    let diff = veiculo2 - veiculo1
    alert(
        "O veículo número 2 é " + diff + "km/h  mais rápido que o veículo número 1"
        )
}

if (veiculo1 === veiculo2) {
    alert(
        "Os veículos estão na mesma velocidade."
    )
}
