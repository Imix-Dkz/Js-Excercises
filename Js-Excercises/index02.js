function isNum_(n){ //Como IsNum, pero regresa CERO si no lo es
    let num = Number(n.value);
    console.log("isNum_:"+num+", isNaN:"+isNaN(num));
    if( isNaN(num) ){ //Se comprueba que sea un dato valido
        n.value="0";
        num=0;
    }
    return num;
}

function calcula(){
    let txtOpr1 = document.getElementById('op1');
    let txtOpr2 = document.getElementById('op2');
    let SelVal = document.getElementById('operacion');
    let t_oper = SelVal.value;
    //console.log('txtOpr1:'+txtOpr1+', txtOpr2:'+txtOpr2+', t_oper:'+t_oper);

    //Se validan datos de entrada...
    let num1 = isNum_(txtOpr1);
    let num2 = isNum_(txtOpr2);
    //console.log("num1:"+num1+", num2:"+num2);

    let resultado 
    switch (t_oper) {
        case "sum": resultado = num1+num2; break;
        case "res": resultado = num1-num2; break;
        case "mul": resultado = num1*num2; break;
        case "div": //En el caso de que num2 sea 0, se entregará de resultado INFINITO
            if (num2===0)
                { resultado = "INFINITO, no se puede dividir por cero"; }
            else{ resultado = num1/num2; }
            break;
        default:break;
    }

    pResultado = document.getElementById("Res");
    pResultado.innerText = "Resultado:"+resultado;




}