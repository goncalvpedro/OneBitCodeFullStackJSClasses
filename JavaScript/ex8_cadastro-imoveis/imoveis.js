const imoveis = [] // Um array de objetos (imóvel).
let opcao = ""


do {
    opcao = prompt(
        "Bem-vindo ao Cadastro de Imóveis!" + "\nTotal de imóveis cadastrados: " + imoveis.length
        + "\n\nEscolha uma opção:" + "\n1. Cadastrar novo imóvel" + "\n2. Lista de imóveis" + "\n3. Sair")
    
    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietário")
            imovel.quartos = prompt("Quantos quartos esse imóvel possui?")
            imovel.banheiros = prompt("Quantos banheiros esse imóvel possui?")
            imovel.garagem = prompt("Esse imóvel possui garagem? (Sim/Não)")


            const confirma = confirm(
                "Deseja salvar esse imóvel?" + 
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos + 
                "\nBanheiros: " + imovel.banheiros + 
                "\nGaragem: " + imovel.garagem
            )

            if (confirma) {
                imoveis.push(imovel)
            }

            break;

        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel " + (i+1) +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos + 
                    "\nBanheiros: " + imoveis[i].banheiros + 
                    "\nGaragem: " + imoveis[i].garagem
                )
            }

            break

        case "3":
            alert("Encerrando")
            break

        default:
            alert("Opção inválida!")
            break;
    }
} while (opcao !== "3")
