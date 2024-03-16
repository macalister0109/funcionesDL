a=Number(prompt("Ingrese un número"));
b=Number(prompt("Ingrese otro número"));
c=Number(prompt("Ingrese otro número"));
resultadoSpan=document.querySelector("#resultado");
resultadoSpan.innerHTML=0;

example = function(a,b,c){
    return a+b+c;
}

mostrarResultado = function(){
    resultadoSpan.innerHTML=example(a,b,c);
}


