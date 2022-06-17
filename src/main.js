import data from './data/harrypotter/data.js';
import { sortData } from './data.js';

//mostrar inicio
let inicio = document.getElementById("mostrarI");
//llamando al li:personaje
let opcionPersonaje=document.getElementById('mostrarPersonaje');

//pintar opcion inicio al inicializar
inicio.classList.add('pintarOpcionNav');

inicio.addEventListener ("click", () =>{
document.getElementById("mostrarInicio").style.display = "block";
document.getElementById("mostrarPersonajes").style.display = "none"; 
  inicio.classList.add('pintarOpcionNav');
   mostrarPer.classList.remove('pintarOpcionNav');
});

//llamando a la section para mostrar los personajes
let mostrarPer = document.getElementById("mostrarPersonaje");
mostrarPer.addEventListener ("click",mostrarTodosPer);

let personajes = document.getElementById("personajes");
let personajesOrdenados = document.getElementById("personajesOrdenados");

function mostrarTodosPer(){
  // mostrando en el label los datos del personaje (imprimir en HTML)
  document.getElementById("mostrarInicio").style.display = "none";
  document.getElementById("mostrarPersonajes").style.display = "block";
  mostrarPer.classList.add('pintarOpcionNav');
  inicio.classList.remove('pintarOpcionNav');
  opcionPersonaje.classList.add('pintarOpcionNav');

  crearDivs(data.characters,personajes); 
}

function crearCerrar(newDiv, newDiv2){
    let cerrar=document.createElement("button");
    cerrar.classList.add('cerrar');
    newDiv.appendChild(cerrar);
      
    cerrar.innerText = 'X';
    
cerrar.addEventListener('click',()=>{
  newDiv.style.display ='none';
  newDiv2.style.display ='none'; 
});
}


let perO = document.getElementById("personajesOrdenados");
let pos=[];
let orden = document.getElementById("orden");
orden.addEventListener ("change", (e) =>{
  let res=e.target.selectedIndex;
  while (perO.firstChild) {
    perO.removeChild(perO.firstChild);
  }
    pos=sortData(data.characters,res);
    crearDivs(pos,personajesOrdenados);
  });
 

function crearDivs(array,padre){
  let iter=0;
  for(let i=0; i<array.length; i++){
    if(array==data.characters){
    iter = i;
    }
    if(array==pos){
    iter = array[i];
    }
  let nombre= data.characters[iter].name;
    let fechaNacimiento= data.characters[iter].birth;
    let especie = data.characters[iter].species;
    let ancestros = data.characters[iter].ancestry;
    let genero = data.characters[iter].gender;
    let casa = data.characters[iter].house;
    let colorCabello = data.characters[iter].hair_color;
    let colorOjos = data.characters[iter].eye_color;
    let varita = data.characters[i].wand;
    let libros = data.characters[iter].books_featured_in;

    let patronus = data.characters[iter].patronus;
    let imgPatronus = data.characters[iter].imgPatronus;
    let image = data.characters[iter].image;

    if (padre==personajes){
    padre = document.getElementById("personajes");
    }

    if (padre==personajesOrdenados){
    padre = document.getElementById("personajesOrdenados");
    }
    
    let divPersonajes = document.createElement("div");
    padre.appendChild(divPersonajes);
    divPersonajes.classList.add('divPersonajes');
    
    let nombrePersonajes=document.createElement("div");
    nombrePersonajes.classList.add('nombrePersonajes');
    divPersonajes.appendChild(nombrePersonajes);
    nombrePersonajes.innerHTML+= nombre + '<br>';
    
    //creando etiqueta imagen de personaje
    let divImagen = document.createElement("div");
    divImagen.classList.add('divImagen');
    divPersonajes.appendChild(divImagen);
    
    let contenedorImagen = document.createElement("img");
    divImagen.appendChild(contenedorImagen);
    contenedorImagen.classList.add('contenedorImagen');
    contenedorImagen.src = image;
    
    let divBtn=document.createElement("div");
    divBtn.classList.add('divBtn');
    divPersonajes.appendChild(divBtn);
    
    let btnDatos=document.createElement("button");
    btnDatos.classList.add('btnDatos');
    divBtn.appendChild(btnDatos);
    btnDatos.innerText = 'DATOS';
        
    let btnPatronus = document.createElement("button");
    btnPatronus.classList.add('btnPatronus');
    divBtn.appendChild(btnPatronus);
    btnPatronus.innerText = 'PATRONUS';
    
    btnDatos.addEventListener("click", () =>{
    
    let datosDiv=document.createElement("div");
    padre.appendChild(datosDiv);
    datosDiv.classList.add('datosDiv');
      
    datosDiv.innerHTML+= 'Nombre: ' + nombre + '<br>'+'<br>Fecha de Nac.: '+ fechaNacimiento+'<br>' +'<br>Especie: '+ especie +'<br>'+ '<br>Ancestros: '+ ancestros +'<br>'+ '<br>Género: ' + genero +'<br>'+ '<br>Casa: ' + casa +'<br>'+ '<br>Color de Cabello: ' + colorCabello +'<br>'+'<br>Color de ojos: ' + colorOjos +'<br>'+ '<br>Varita: '+ varita +'<br>'+ '<br>Libros en los que aparece: '+ libros + '<br>';
      
crearCerrar(datosDiv);
  
});
  
    btnPatronus.addEventListener("click", () =>{
     
    let patronusDiv =document.createElement("div");
    padre.appendChild(patronusDiv);
    patronusDiv.classList.add('patronusDiv');

      //creando div que contiene nombre patronus y el btn cerrar
    let divNomPatCerrar=document.createElement("div");
    patronusDiv.appendChild(divNomPatCerrar);
   divNomPatCerrar.classList.add('divNomPatCerrar');
       
    let nombrePatro=document.createElement("div");
    divNomPatCerrar.appendChild(nombrePatro);
      
    nombrePatro.innerText = 'Patronus: '+ patronus;

    let divImgPatronus = document.createElement("div");
    divImgPatronus.classList.add('divImgPatronus');
    patronusDiv.appendChild(divImgPatronus);
    
    let contenedorImagenPatronus = document.createElement("img"); divImgPatronus.appendChild(contenedorImagenPatronus);
    contenedorImagenPatronus.classList.add('contenedorImagenPatronus');
    contenedorImagenPatronus.src = imgPatronus;
          
  crearCerrar(divNomPatCerrar, patronusDiv);   
    });     
  } 
  opcionPersonaje.classList.add('pintarOpcionNav');
}

