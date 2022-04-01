
// function listarDOM(padre){

//     console.log(padre)
//     for(let i = 0; padre.childNodes.length; i++){
//         console.log(padre.childNodes[i]);
//         if(padre.childNodes[i].childNodes.length > 0){
//             console.log(padre);
//         }
//     }

//     inicio = document;
// }

function cambiar(){
    element = document.getElementById("hola");
    element.setAttribute("align", "right")
}

function iniciar(){
    btn = document.getElementById("listar").onclick = cambiar;
    //btn.addEventListener("click", cambiar, false);
}

window.onload = iniciar;