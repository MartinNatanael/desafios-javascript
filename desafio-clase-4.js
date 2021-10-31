let cliente = "";
let dia = "";
let horarios = "";



function saludar(){ 
    cliente = prompt (`¡Bienvenidos al area de turnos de LuaNails! 
Ingresa tu nombre por favor`)
if(cliente){

return alert(`Hola! ${cliente.toUpperCase()} 
Te solicitaremos algunos datos para agendar tu turno`);}

else{
   return alert("El nombre ingresado es incorrecto");
}
}
/* primero elegir dia y despues dar horarios de turnos disponibles
retornar el dia elegido y la hora*/



function eleccionTurno() {
    alert("¡Elegi el dia que queres venir!"+"\n"+"Ingres un numero del 1 al 5")
    dia = Number(prompt(`1-LUNES\n2-MARTES\n3-MIERCOLES\n4-JUEVES\n5-VIERNES`));
       
switch(dia){
    case 1:
      dia = "LUNES";
      break  
      case 2:
      dia = "MARTES";
      break 
      case 3:
      dia = "MIERCOLES";
      break 
      case 4:
      dia = "JUEVES";
      break 
      case 5:
      dia = "VIERNES";
      break  
      default:
          alert("El dia ingresado es incorrecto")
} 
alert("¿A que hora queres venir?")

horarios = Number(prompt(`1-15hs\n2-16hs\n3-17hs\n4-18hs\n5-19hs`));

switch(horarios){
    case 1:
      horarios = "15hs";
      break  
      case 2:
      horarios = "16hs";
      break 
      case 3:
      horarios = "17hs";
      break 
      case 4:
      horarios = "18hs";
      break 
      case 5:
      horarios = "19hs";
      break  
      default:
          alert("El horario ingresado es incorrecto")
} 

return alert(`${cliente.toUpperCase()} tu turno quedó reservado para el dia ${dia} las ${horarios}`);

}



saludar();
eleccionTurno();
