// valor aleatorio generado
  var y = Math.floor(Math.random() * 10 + 1 );
// contar el número de intentos
var guess = 1
// crear para el intento correcto
var x =document.getElementById("guessField").value;
  
// función para el número adivinado por el usuario     
function submit(){
    if(x = y) {
        alert("¡felicitaciones!" + player_name + "lo adivinaste bien" + guess + "intento " );
        guess=1;
    }
    else if(x>y){
        guess++;
        alert("ups nimodo intento fallido intenta con un numero mas pequeño" );
    }
    else {
        guess++;
        alert("ups nimodo intento fallido intenta con un numero mas grande" );
    }
}
function playAgain(){
    y= Math.floor(Math.random() *10 + 1 );
}


