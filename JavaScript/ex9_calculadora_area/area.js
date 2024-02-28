// Escreva um programa em javascript para calcular a área de 
// diferentes formas geométricas. O programa deve iniciar com 
// um menu contendo as diferentes opções de cálculas. As 
// opções devem ser:
// área do triângulo: base * altura / 2
// área do retângulo: base * altura
// área do quadrado: lado²
// área do trapézio: (base maior + base menor) * altura / 2
// área do círculo: pi * raio² (considere pi = 3.14)
// Você deve escrever o programa usando funções 
// sempre que possível para separar os procedimentos. 
// O programa também deve ter uma opção de “Sair” e enquanto 
// ela não for escolhida deverá voltar ao menu

let opcao = ""

// opção 1
function triangulo(base, altura) {
    return (base*altura)/2
}

// opção 2
function quadrilatero(base, altura) {
    return (base*altura)
}

// opção 3
function trapezio(baseMaior, baseMenor, alturaTrapezio) {
    return (baseMaior + baseMenor) * alturaTrapezio / 2
}

// opção 4
function circulo(raio) {
    const pi = Math.PI
    return pi * (raio^2)
}
do {
    opcao = prompt(
        "Bem-vindo à calculadora geométrica! \n\n Escolha a geometria que deseja calcular a área:" + 
        "\n1. Triângulo \n2. Quadrilátero \n3. Trapézio \n4. Círculo \n5. Sair"
        )
    
    switch (opcao) {
        case "1":
            let baseTriangulo = prompt(
                "Insira o valor da base do triângulo em metros: "
                )
            let alturaTriangulo = prompt(
                "Insira o valor da altura do triângulo em metros: "
            )

            alert("A área desse triângulo é " + triangulo(baseTriangulo, alturaTriangulo) + " m²")
            break;
        
        case "2":
            let baseQuadrilatero = prompt(
                "Insira o valor da base do quadrilátero em metros: "
                )
            let alturaQuadrilatero = prompt(
                "Insira o valor da altura do quadrilátero em metros: "
            )

            alert(
                "A área desse quadrilátero é " + 
                quadrilatero(baseQuadrilatero, alturaQuadrilatero) + 
                " m²")
            break;
        
        case "3":
            let baseMaior = prompt(
                "Insira o valor da base maior do trapézio em metros: "
                )
            let baseMenor = prompt(
                "Insira o valor da base menor do trapézio em metros: "
            )
            let alturaTrapezio = prompt(
                "Insira o valor da altura do trapézio em metros: "
            )

            alert("A área desse trapézio é " + 
            trapezio(baseMaior, baseMenor, alturaTrapezio) + 
            " m²")
            break;

        case "4":
            let raioCirculo = prompt(
                "Insira o valor referente ao raio do círculo em metros:"
            )

            alert("A área desse círculo é " + circulo(raioCirculo) + " m²")
            break;

        case "5":
            const confirma = confirm("Deseja realmente sair?")
            if (confirma) {
                break
            }

        default:
            alert("Opção inválida")
            break;
    }
} while (opcao!=="5")