const nome = prompt("Insira o nome do recruta:")
const sobrenome = prompt("Insira o sobrenome do recruta:")
const estudo = prompt("Insira o campo de estudo do recruta:")
const ano = prompt("Insira o ano de nascimento do recruta:")

alert(
    "Cadastro realizado com sucesso!\n" +
    "\nNome completo: " + nome +" "+ sobrenome +
    "\nCampo de estudo: " + estudo  +
    "\nIdade: " + (2024-parseFloat(ano))
)
