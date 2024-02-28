let queue = []
let option = ''



do {
    let pacients = ''
    for (let i=0;i <= queue.length; i++) {
        pacients += (i + 1)+"º" + ' - ' + queue[i] + '\n'
     }

    let action = prompt("Atualmente, a fila de espera contém\n" + queue.length + " pacientes esperando\n" +
    queue + 
    "\n------------------------\n" 
    + "O que deseja fazer:" +
    "\n 1 - Novo paciente" + 
    "\n 2 - Consultar Paciente" +
    "\n 3 - Sair")


    if (action === 1) {
        let pacientName = prompt('Digite o nome do paciente:')
        queue.push(pacientName)
    }


} while (action !== '3' || action !== 'sair');