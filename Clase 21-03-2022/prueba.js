document.writeln("CR7777");

function agregar() {
    var nom,fech,elem, nuevo;
    nom=document.getElementById("usuario").value;
    fech=document.querySelector("[name='nacimiento']").value;
    elem=document.getElementsByTagName("section")[0];
    nuevo = document.createElement("P");
    nuevo.innerText=nom+"---"+fech;
    elem.appendChild(nuevo);
}
function siu(){
    alert("siuu");
}
function iniciar() {
    
    document.getElementById("add").onclick=agregar;

    document.getElementById("siu").onclick = siu;
}



window.onload=iniciar;

