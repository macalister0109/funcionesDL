const ele1 = document.getElementById("color1");
const ele2 = document.getElementById("color2");
const ele3 = document.getElementById("color3");
const ele4 = document.getElementById("color4");



irANegro = () => "black";

ele1.addEventListener("click",() => {ele1.style.backgroundColor = irANegro()});
ele2.addEventListener("click",() => {ele2.style.backgroundColor = irANegro()});
ele3.addEventListener("click",() => {ele3.style.backgroundColor = irANegro()});
ele4.addEventListener("click",() => {ele4.style.backgroundColor = irANegro()});

