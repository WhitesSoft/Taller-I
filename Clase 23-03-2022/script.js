function agregar() {
    var name, correo, estudiante, nuevo;

    name = document.getElementById("name").value;
    correo = document.getElementById("correo").value;
    estudiante = document.getElementsByTagName("section")[0];
    
    nuevo = document.createElement("article");
    nuevo.innerText = name+"---"+correo;

    estudiante.appendChild(nuevo);
}

function eliminar(){
    padre = document.getElementsByTagName("section")[0];
    estudiante = padre.getElementsByTagName("article");
    estudiante = estudiante[estudiante.length-1];
    padre.removeChild(estudiante);
}

function limpiar(){
    padre = document.getElementsByTagName("section")[0];
    estudiante = padre.getElementsByTagName("article");
    
    for(const i = 0; i < estudiante.length;){
        padre.removeChild(estudiante[i]);
    }
}

function iniciar() {

    document.getElementById("btnAdd").onclick = agregar;

    document.getElementById("btnRemove").onclick = eliminar;

    document.getElementById("btnClear").onclick = limpiar;
}

window.onload = iniciar;