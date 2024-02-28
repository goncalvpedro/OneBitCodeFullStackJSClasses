// Ter um um menu onde é possível escolher entre as diferentes funcionalidades 
// do sistema Listar vagas disponíveisCriar um nova vagaVisualizar uma vagaInscrever 
// um candidato em uma vagaExcluir uma vagaSair
// Listar vagas disponíveis ok
// Criar um nova vaga ok 
// Visualizar uma vaga
// Inscrever um candidato em uma vaga
// Excluir uma vaga
// Sair
// A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos 
// inscritos de todas as vagas.
// A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição 
// e uma data limite, e também deve pedir que o usuário confirme as informações 
// antes de salvá-las.
// A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as 
// informações dela: índice, nome, descrição, data limite, quantidade de candidatos 
// e o nome dos candidatos.
// A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice 
// da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
// A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações 
// e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

const vagas = []
let opcao = ""


// Exibe o menu interativo para navegar entre as funções do sistema
function exibirMenu() {
    opcao = prompt(
        "Bem-vindo ao Gerenciador de Vagas!\n" + 
        "Total de vagas abertas: " + vagas.length +
        "\nO que deseja fazer?" + 
        "\n1. Ver vagas disponíveis\n2. Criar uma vaga\n3. Visualizar uma vaga" +
        "\n4. Inscrever candidato\n5. Excluir vaga\n6. Sair"
    )
    return opcao
}


// Lista as vagas abertas no sistema
function listaVagas() {
    const vagaEmTexto = vagas.reduce(function(textoFinal, indice, vaga) {
        textoFinal += (indice + 1) + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")
}


// Adicionar nova vaga ao sistema 
function novaVaga() {
    const titulo = prompt("Informe um nome para a vaga: ")
    const empresa = prompt("Informe a empresa que esta oferecendo a vaga: ")
    const descricao = prompt("Informe uma descrição da vaga: ")
    const salario = prompt("Informe o salario oferecido: ")
    const beneficio = prompt("A empresa oferece beneficios? (Sim/Não)")


    const confirma = confirm(
        "Confirma o lançamento da vaga?\n" +
        "\n1. Cargo: " + titulo +
        "\n2. Empresa: " + empresa + 
        "\n3. Descrição: " + descricao +
        "\n4. Salario: " + salario + 
        "\n5. Beneficio: " + beneficio
    )
    

    if (confirma) {
        const novaVaga = {titulo, empresa, descricao, salario, beneficio, candidatos: []}
        vagas.push(novaVaga)
        alert(
            "Vaga criada com sucesso!"
        )
    }
}

// Buscar vaga pelo ID dela na lista de vagas abertas
function exibirVaga() {
    const indice = prompt("informe o ID da vaga que deseja exibir: ")
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato) {
        return textoFinal + "\n . " + candidato
    }, "")

    alert(
        "Vaga nº " + indice + 
        "\nTítulo: " + vaga.titulo +
        "\nEmpresa: " + vaga.empresa +
        "\nDescrição: " + vaga.descricao +
        "\nSalario inicial: " + vaga.salario +
        "\nBeneficio: "+ vaga.beneficio +
        "\nCandidatos na vaga: " + candidatosEmTexto

    )
}

// Inscrever candidato em alguma vaga
function inscreverCandidato() {
    const candidato = prompt("Informe o nome do(a) candidato(a): ")
    const indice = prompt("Informe o ID da vaga que ele está se candidatando: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?" +
        "\nTítulo: " + vaga.titulo +
        "\nEmpresa: " + vaga.empresa +
        "\nDescrição: " + vaga.descricao +
        "\nSalario inicial: " + vaga.salario +
        "\nBeneficio: "+ vaga.beneficio
    )

    console.log(confirmacao)

    if (confirmacao == true) {
        vaga.candidatos.push(candidato)
        alert(
            "Candidato adicionado a vaga com sucesso!"
        )
    }
}

// Exclui vaga pelo ID
function excluirVaga() {
    const indice = prompt("Informe o ID da vaga que deseja exceluir: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Confirma a exclusão da vaga: " +
        "\nTítulo: " + vaga.titulo +
        "\nEmpresa: " + vaga.empresa +
        "\nDescrição: " + vaga.descricao +
        "\nSalario inicial: " + vaga.salario +
        "\nBeneficio: "+ vaga.beneficio
    )

    if (confirmacao == true) {
        vagas.splice(indice,1)
        alert(
            "Vaga excluida com sucesso!"
        )
    }
}

function executar() {
    do {
        console.log(opcao)

        exibirMenu()
    
        switch (opcao) {
            // Listar vagas
            case "1":
                if (vagas.length == 0) {
                    const criarNovaVaga = confirm(
                        "Não há vagas para serem exibidas!\nDeseja criar uma vaga?")

                    if (criarNovaVaga == true) {
                        novaVaga()
                    }
                    else {
                        break
                    }
            
                }
                listaVagas()
                break
    
            // Criar vaga
            case "2":
                novaVaga()
                break;
            
            // Exibir vaga
            case "3":
                exibirVaga()
                break
    
            // Inscrever candidato
            case "4":
                inscreverCandidato()
                break
    
            // Excluir vaga
            case "5":
                excluirVaga()
                break
            
            // sair
            case "6":
                alert(
                    "Saindo ....."
                )
            break
    
            default:
                break;
        }
    
    } while(opcao!=="6")
}

executar()