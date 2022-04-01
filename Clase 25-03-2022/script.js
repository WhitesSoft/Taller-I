function agregar() {
    var name, correo, estudiante, nuevo;

    name = document.getElementById("name").value;
    correo = document.getElementById("correo").value;

    // estudiante = document.getElementsByTagName("section")[0];
    
    // nuevo = document.createElement("article");
    // nuevo.innerText = name+"---"+correo;

    // estudiante.appendChild(nuevo);

    localStorage.setItem(name, correo);
}

function eliminar(){
    // padre = document.getElementsByTagName("section")[0];
    // estudiante = padre.getElementsByTagName("article");
    // estudiante = estudiante[estudiante.length-1];
    // padre.removeChild(estudiante);

    localStorage.removeItem(localStorage.key(localStorage.length-1));
    mostrar();
}

function eliminar2(event){
    localStorage.removeItem(localStorage.key(event));
    mostrar();
}

function limpiar(){
    // padre = document.getElementsByTagName("section")[0];
    // estudiante = padre.getElementsByTagName("article");
    
    // for(const i = 0; i < estudiante.length;){
    //     padre.removeChild(estudiante[i]);
    // }
    localStorage.clear();
    mostrar();
}

function mostrar(){
    var cajadatos = document.getElementById("cajadatos");
    cajadatos.innerHTML = "";
    for(var i = 0; i < localStorage.length; i++){
        var clave = localStorage.key(i);
        var valor = localStorage.getItem(clave);

        cajadatos.innerHTML += "<tr><td>" + clave + "</td><td>" +valor+ "</td><td name = 'del' id="+f+">X</td></tr>";
    }
}

function iniciar() {

    document.getElementById("btnAdd").onclick = agregar;

    document.getElementById("btnRemove").onclick = eliminar;

    document.getElementById("btnClear").onclick = limpiar;

    var btn = document.getElementById("btnAdd")
    btn.addEventListener("click", mostrar, false)

    mostrar();

    var deleteId = document.getElementsByName("del")
    for(var i = 0; i < deleteId.length; i++){
        deleteId.addEventListener("click", eliminar2, false)
    }
   
}

window.onload = iniciar;