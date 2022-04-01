function menuInicio(){
    var sec = document.getElementById("sec");
    var as = document.getElementById("as");
    var padre = document.getElementById("padre");
    var contenedortTabla = document.getElementById("contenedorTabla");
    var tabla = document.getElementById("tabla");


    sec.style.width = "100%";
    sec.style.height = "calc(100vh - 120px)";

    as.style.display = "none";

    padre.style.display = "flex";

    contenedortTabla.style.display = "none";

    tabla.style.display = "none";
}

function menuRegistro(){
    var sec = document.getElementById("sec");
    var as = document.getElementById("as");
    var padre = document.getElementById("padre");
    var hijo = document.getElementById("hijo");
    var contenedortTabla = document.getElementById("contenedorTabla");
    var tabla = document.getElementById("tabla");

    sec.style.width = "70%";

    as.style.width = "30%";
    as.style.height = "calc(100vh - 120px)";
    as.style.display = "flex";

    padre.style.display = "none";

    hijo.style.display = "flex";

    contenedortTabla.style.display = "flex";
    contenedortTabla.style.width = "60%";
    contenedorTabla.style.marginTop = "16%";


    // contenedortTabla.style.color = "white";
    // contenedortTabla.style.fontSize = "60px";
    // contenedortTabla.innerText = "Registre su planete en la base de datos.";

    tabla.style.display = "none";
}

function menuPlaneta(){
    var sec = document.getElementById("sec");
    var as = document.getElementById("as");
    var padre = document.getElementById("padre");
    var hijo = document.getElementById("hijo");
    var contenedor = document.getElementById("contenedorTabla");
    var table = document.getElementById("tabla");


    sec.style.width = "100%";
 
    as.style.display = "none";

    padre.style.display = "none";

    hijo.style.display = "none";

    contenedor.style.display = "flex";
    contenedor.style.width = "40%";
    contenedor.style.marginTop = "8%";
    // contenedor.style.fontSize = "auto";
    // contenedor.innerText = "";

    table.style.display = "table";

    var cajadatos = document.getElementById("cajadatos");
    cajadatos.innerHTML = "";
    mostrar();

}

function agregar(){
    var name, date;
    name = document.getElementById("name").value;
    date = document.getElementById("fecha").value;

    localStorage.setItem(name, date);

    alert("Planeta registrado.")
}

function mostrar(){
    var cajadatos = document.getElementById("cajadatos");

    for(i = 0; i < localStorage.length; i++){
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);

        fila = cajadatos.insertRow(-1);

        nameColum = fila.insertCell(0);
        nameColum.innerText = "\n" + key;

        dateColum = fila.insertCell(1);
        dateColum.innerText = "\n" + value;

        deleteColum = fila.insertCell(2);
        var btnDelete = document.createElement("button");
        btnDelete.textContent = "Eliminar";
        deleteColum.appendChild(btnDelete);

        btnDelete.addEventListener("click", (event) =>{
            event.target.parentNode.parentNode.remove();
            localStorage.removeItem(key);
            console.log(event.target.parentNode.parentNode.children[0])
        });

    }
}



function iniciar(){

    //mostrar();

    inicio = document.getElementById("home").onclick = menuInicio;
    registrar = document.getElementById("registro").onclick = menuRegistro;
    planeta = document.getElementById("lista").onclick = menuPlaneta;

    btnAgregar = document.getElementById("btnAdd").onclick = agregar;
   
    btnDel = document.getElementsByName("del");
    for(i = 0; i < btnDel.length; i++){
        btnDel[i].addEventListener("click", eliminar, false);
    }


}

window.onload = iniciar;