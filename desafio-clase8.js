// variable declaradas
let dia = "";
let horarios = "";
let precio = 0;
let total = 0;  
let saludar = document.querySelector(".saludos");



//Objetos declarados
class Cliente {
    constructor(nombre,edad,mail){
        this.nombre = nombre.toUpperCase();
        this.edad = Number(edad);
        this.mail = mail;
    }
    saludar(){
     saludar.innerHTML=`<h3>Hola! ${this.nombre}, ¡Gracias por elegirnos!</h3>`;
    }
    correo(){
        this.mail = prompt("Ingresa tu e-mail");
    }
}
let cliente1;

class Servicio{
    constructor(orden,trabajo,valor){
        this.orden = Number(orden);
        this.trabajo = trabajo;
        this.valor = Number(valor);
    }
}

// arrays
const servicios = [];
servicios.push(new Servicio(1, "Esmaltado en manos", 600))
servicios.push(new Servicio(2, "Esmaltado en pies", 500))
servicios.push(new Servicio(3, "Esmaltado en manos y pies", 1000))

//Funciones 

function bienvenida(){
    alert(`¡Bienvenidos al area de turnos de LuaNails! 
    A continuacion te solicitaremos Algunos datos para continuar`);
 
    cliente1 = new Cliente(prompt("¡Ingresa Tu nombre!"),prompt("Ingresa Tu edad")); 
    
    return cliente1.saludar();
   
}




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
          dia = 0;
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
          horarios = 0;

} 

return alert(`${cliente1.nombre} tu turno quedó reservado para el dia ${dia} las ${horarios}`);

}

let  serviciosHtml = document.querySelector("#servicios");

function mostrarServicios (){
    let texto = ``;
    for (const servicio of servicios) {
        texto += ` ${servicio.orden} ${servicio.trabajo} valor $ ${servicio.valor}\n\n `
    }
    return texto; 
}

let servicioElegido;
function eleccionServicio(){
    let eleccion = confirm("¡Tenes la posibilidad de elegir lo que vas a hacerte en tus uñas ahora!");
   
    if(eleccion){

      servicioElegido = Number(prompt(`Elegi tu Servicio Ingresando un Numero \n\n ${mostrarServicios()}`));
          
           
           switch (servicioElegido) {
               case 1:
                   servicioElegido = "Esmaltado en manos"
                   precio = 600;
                   
                   break;
               case 2:
                   servicioElegido = "Esmaltado en pies"
                   precio = 500;
                   
                   break;
               case 3:
                   servicioElegido = "Esmaltado en manos y pies"
                   precio = 1000;
                   
                   break;
               default:
                   alert("No ingresaste un valor correcto")
                   servicioElegido = "";
                   precio = 0;
           }
        }
      
   return servicioElegido = serviciosHtml.innerHTML = `<h3>Te vas a realizar ${servicioElegido} El total es $${precio}</h3>`;
   }

function descuento(){
    aplicarDescuento = confirm (`${cliente1.nombre.toUpperCase()} ¿Queres obtener un cupon de 10% de descuento en tu servicio?`) 
    
    if(aplicarDescuento){
        
        cliente1.correo();
        total = (precio) - (precio*0.1); 
    }
 else{
   total = precio;
 }
}

// mostrarServicios();
bienvenida();
// eleccionTurno();
eleccionServicio();
// descuento();
// alert(`Te vas a realizar ${servicios} El total es $${total}`);


