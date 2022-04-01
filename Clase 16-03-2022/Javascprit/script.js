
document.writeln("Me quiero morir, ayudaaaaa");

var contador;

function p_click(){
    alert("Un click");
}

function btn_click(){
    alert("btn Click: " + contador);
    contador++; 
}

function iniciar(){
    document.getElementById('btn2').onclick=btn_click
    contador = 1
}

window.onload=iniciar