function saludar(nombre, edad){
    console.log("Hola "+nombre+", tu edad es "+edad);
}
//saludar('PepeJuan', 33);

function multiplicar(num1, num2){
    let resultado = num1*num2;
    return resultado;    
}
//console.log("Resultado de funcion multiplicar:"+multiplicar(2,3));

/* let miArreglo = ['Imix', 'Illimani', 'Corral', 'Millán'];
for(let i=0; i<miArreglo.length; i++){
    let mostrar = "[i:"+i+"]:"+miArreglo[i];
    console.log(mostrar);
} */

//Objetos
    let persona1 = {
        nombre: "Juan",
        edad : 21,
        masculino:false,
    }; console.log(persona1);

    persona1.comidaFav = "Hamburguesa";
    console.log(persona1);
    console.log(persona1.nombre);
    let persona2 = {
        nombre: "Pepe",
        edad : 22,
        masculino:true,
    }

//Arreglo de Objetos
