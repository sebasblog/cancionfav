// window.onload = init;
//     function init(){
//         botonEnvio = document.querySelector('[type="button"]');
//         nuevoItem = document.querySelector('[type="text"]');
//         listaCanciones = document.getElementById("listaCanciones")

//         botonEnvio.addEventListener("click", anadir);
//     }

//     function anadir(e){
//         evento = e || window.event;
//         if (nuevoItem.value == ""){
//             evento.preventDefault();
//         }else{
//             var lista = document.createElement("li");
//             lista.innerHTML = nuevoItem.value;
//             lista.addEventListener("dblclick", eliminarLi);
//             listaCanciones.appendChild(lista);
//             nuevoItem.value = "";
//         }
//     }

//     function eliminarLi(){
//         this.parentNode.removeChild(this);
//     }

    function capturar(){
        function Cancion(nombre, artista, album, estilo){
            this.nombre = nombre;
            this.artista = artista;
            this.album = album;
            this.estilo = estilo;
        }
        var nombreCapturar = document.getElementById("nombre").value;
        //console.log(nombreCapturar);
        var artistaCapturar = document.getElementById("artista").value;
        var albumCapturar = document.getElementById("album").value;
        var estiloCapturar = document.getElementById("estilo").value;

        nuevaCancion = new Cancion(nombreCapturar, artistaCapturar, albumCapturar, estiloCapturar);
        console.log(nuevaCancion);
        agregar();
    }

    var baseDatos = [];
    function deleteRow(btn){
        var row = btn.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
    function agregar(){
        baseDatos.push(nuevaCancion);
        console.log(baseDatos);
        document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevaCancion.nombre+'</td><td>'+nuevaCancion.artista+'</td><td>'+nuevaCancion.album+'</td><td>'+nuevaCancion.estilo+'</td><td><input type="button" value="Eliminar" onclick="deleteRow(this)"/></td></tbody>';

    }
