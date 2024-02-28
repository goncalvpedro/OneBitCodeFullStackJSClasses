function addPlayer() {
    const player_name = document.getElementById('player-name').value
    const player_number = document.getElementById('add-player-number').value
    const player_position = document.getElementById('player-position').value

    const confirmacao = confirm(
        "Escalar " + player_name + " como " + player_position + "?")
    
    if (confirmacao) {
        const teamList = document.getElementById("team-list")
        const li = document.createElement('li')
        li.id = 'player-' + player_number
        li.innerText = player_position + ": " + player_name + " (" + player_number + ")"
        teamList.appendChild(li)
 
        document.getElementById('player-name').value = ""
        document.getElementById('add-player-number').value = ""
        player_position = document.getElementById('player-position').value = ""
    }
}


function removePlayer() {

    

}

