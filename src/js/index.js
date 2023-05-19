const ligar = document.querySelector(".ligar");
const desligar = document.querySelector(".desligar");
const lampada = document.querySelector(".lampada");

function lampadaEstaQuebrada(){
    return lampada.src.indexOf("quebrada") > -1;
}

function ligarLampada() {
    if (!lampadaEstaQuebrada()) {
        lampada.setAttribute("src", "./src/images/ligada.jpg");
        
    }
}

function desligarLampada() {
    if (!lampadaEstaQuebrada()) {
        lampada.setAttribute("src", "./src/images/desligada.jpg");
       
    }
}

function quebrarLampada() {
    lampada.setAttribute("src", "./src/images/quebrada.jpg");
   
}

console.log(lampada);


ligar.addEventListener("click", ligarLampada);
desligar.addEventListener("click", desligarLampada);
lampada.addEventListener("mouseover", ligarLampada);
lampada.addEventListener("mouseleave", desligarLampada);
lampada.addEventListener("dblclick", quebrarLampada);






