alert('¡Bienvenidas Mujeres Emprendedoras!\n');
var respuesta = confirm("¿Deseas saber acerca de autonomía económica de las mujeres? ");
if (respuesta == true) {
    alert("confirmacion");
    var nombre = prompt("Digite su nombre");
    alert("Hola " + nombre + "  te Invitamos a ser emprendedora y a desarrollar autonomía económica.");


}


/*
   var fecha = new Date();
   document.write("Día: "+fecha.getDate()+"\nMes: "+(fecha.getMonth()+1)+"\nAño: "+fecha.getFullYear());
   document.write("\nHora: "+fecha.getHours()+"\nMinuto: "+fecha.getMinutes()+"\nSegundo: "+fecha.getSeconds()+"\nMilisegundo: "+fecha.getMilliseconds());
*/

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec + " " + ap;
    var time = setTimeout(function(){ startTime() }, 500);
}

function checkTime(i)

{
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

window.onload = function () {
    startTime();
}