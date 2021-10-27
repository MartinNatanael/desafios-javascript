let alumno;
let alumnoModificado;

alert("Crearemos un listado de tus mejores 5 alumnos"+"\n"+"A continuacion ingrese sus Nombres:")


for(let i = 1; i < 6; i++){
    alumno += prompt("INGRESE SUS NOMBRES").toUpperCase() + "\n";
  
}
alert(alumno);

let modificacion = confirm("Usted puede modificar esta lista en cualquier momento\n"+"Desea modificarla?")

while(modificacion){
     
    for(let i=1; i < 6; i++){
        alumnoModificado += prompt("INGRESE SUS NOMBRES").toUpperCase() + "\n";
  }

guardar = confirm("¿Desea Guardar su lista?");
if (guardar){ 
    alert(alumnoModificado)
    break;
} else{
    alert(alumno);
}
}








