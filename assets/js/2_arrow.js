d=Number(prompt("Ingrese un número"));
e=Number(prompt("Ingrese otro número"));

resultadoSSpan=document.querySelector("#resultadoS");
resultadoSSpan.innerHTML=0;
suma = (d, e) => d+e;

mostrarResultadoSuma = function(){
    resultadoSSpan.innerHTML=suma(d,e);
}