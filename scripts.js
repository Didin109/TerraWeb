document.addEventListener('DOMContentLoaded', function() {
    const serverIP = 'terra.ranstoredigital.me';
    const port = 19132;
    const onlinePlayersElement = document.getElementById('online-players');

    fetch(`https://api.mcapi.us/server/status?ip=${terra.ranstoredigital.me}&port=${19132}`)
    .then(response => response.json())
    .then(data => {
        if (data.online) {
            onlinePlayersElement.innerHTML = `Online Players: ${data.players.now}/${data.players.max}`;
        } else {
            onlinePlayersElement.innerHTML = "Server is offline";
        }
    })
    .catch(error => {
        console.error('Error fetching server data:', error);
        onlinePlayersElement.innerHTML = "Failed to load player count";
    });
});