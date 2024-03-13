/* //En Javascript un ARRAY es un contenedor dinamico de multiples valores DEL MISMO TIPO, puedes tener un array de cadenas de caracteres o un array de una serie de números, pero no uno combinado con otro
*/

//Ejemplos de recorrido de array...
    const miArray = ["David", "Juan", "Kevin", "PepeJuan"];
    //console.log(miArray);

    //Recorrido con FOR
        /* for (let i = 0; i<miArray.length; i++){
            console.log("miArray["+i+"]:"+miArray[i]);
        } */
    //Recorrido con ForEach
        /* miArray.forEach(element => {
            console.log(element);
        }); */
    
    /* //Creación de un objeto...
        [Nota]: A diferencia de un ARRAY, un objeto está pensado para contener multiples tipos de datos relacionados, pero no necesariamente del mismo tipo
    */
        const persona = {
            nombre: "David", 
            edad: 24,
            comidaFavorita: "Hamburguesa",
        }; console.log(persona);
    //Re-Asignación de valores de un objeto
        persona.edad = 34;
        //console.log(persona.edad);
    //Añadido de valores
        persona.deporteFavorito = "Natación";
        //console.log(persona.deporteFavorito);
    //Eliminación de valores...
        delete persona.deporteFavorito;
        //console.log(persona.deporteFavorito);
    //Recorrer un objeto...
        //Usando Propiedades en KEY
        /* for(let key in persona){
            console.log(key+":", persona[key]);
        } */
//Otros Ejercicios...
console.log("=====================================");
    const arrayDeObjetos = [
        {
            nombre: "David",
            edad: 24,
            comidaFavorita: "Hamburguesa",
        },{
            nombre: "Sally",
            edad: 22,
            comidaFavorita: "Shawarma",
        },{
            nombre: "Steven",
            edad: 18,
            comidaFavorita: "Pizza",
        },{
            nombre: "Sol",
            edad: 50,
            comidaFavorita: "Sushi",
        }
    ];
    //Se muestran datos...
    for (let i in arrayDeObjetos){
        console.log("Nom: "+arrayDeObjetos[i].nombre
        +", Edad: "+arrayDeObjetos[i].edad
        +", FF:"+arrayDeObjetos[i].comidaFavorita);
    }
//Recorido de datos de un objeto con un array dentro...
console.log("=====================================");
    const objetoConArray = {
        nombre: "Objeto",
        arr: ['Abeja', 'Banana', 'Camión', 'Dado'],
    }
    //Con ForEach
    objetoConArray.arr.forEach(elmt => {
        console.log(elmt+"...");
    });
    //Con FOR...
    for (let i = 0; i < objetoConArray.arr.length; i++){
        console.log("objetoConArray.arr["+i+"]: "+objetoConArray.arr[i]);
    }


    



