//console.log("Hola Mundo...");

//Variables enteras...
    var miVariable1 = -5;
    console.log("miVariable1: "+miVariable1);

//Variables float...
    let miVariable2 = 5.5;
    console.log("miVariable2: "+miVariable2);

//Variables boleana...
    const miVariable3 = true;
    console.log("miVariable3: "+miVariable3);

//Variables concatenadas...
    var miVariable4 = 34;
    console.log("miVariable: "+miVariable4);
    miVariable4 = 43;
    console.log("miVariable ahora es: "+miVariable4);

//Las constantes NO PUEDEN CAMBIAR
    const miConstante = 10;
    console.log("miConstante:"+miConstante);
    //miConstante = 11;
    //console.log(miConstante); //HACER ESO ARROJA ERROR

//Si las variables so númericas se pueden hacer operaciones aritmetricas de forma directa...
    let num1 = 1;
    let num2 = 2;
    let resultado = num1 + num2;
    console.log("resultado:"+resultado);

//Condicionales...
    let miNumero = 6;
    //let resultadoPregunta = miNumero==7;
    //if(resultadoPregunta)
    if(miNumero==6)
        { console.log('miNumero es: '+miNumero); }
    else{ console.log('miNumero NO ES SEIS,6, es:'+miNumero); }

    miNumero = 45;
    let numComparativo = 45;
    if(miNumero != numComparativo)
        { console.log('miNumero es: '+miNumero); }
    else{ console.log('miNumero '+numComparativo+', NO es: '+miNumero); }

    //Condicional combinada...
    miNumero = 6;
    miNommbre = "Davidd";
    if(miNumero>2 && miNommbre=="David"){
    //if(miNumero>2 && miNommbre=="David"){
        console.log("Nombre:"+miNommbre+", Num:"+miNumero+", correctos...");
    }else{ console.log('Datos incorrectos...'); }

//Test
    let miNumero2 = 5;
    if(miNumero2>0){
        console.log('El num, es positivo...');
    }else if(miNumero2===0){
        console.log('El numero es CERO');
    }else{ console.log('El número es negativo'); }

//Ciclos...
    /*let contador = 0;
    while(contador<5){
        console.log("hola i:"+contador);
        contador++;
    } */
    for (let i = 1; i <= 10; i++){
        console.log('i:'+i);
    }



