// crea la función de inicio de sesión.
function Login(){
    player_name = document.getElementById("playername").Value;
    localStorage.setItem("player_name ", player_name);
    window.location = "gamepage.html";

}