
import data from './data/harrypotter/data.js';


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

function mostrarTodosPer(){
  // mostrando en el label los datos del personaje (imprimir en HTML)
  document.getElementById("mostrarInicio").style.display = "none";
  document.getElementById("mostrarPersonajes").style.display = "block";
  mostrarPer.classList.add('pintarOpcionNav');
  inicio.classList.remove('pintarOpcionNav');
    
  for(let i=0; i<data.characters.length; i++){
        
    let nombre= data.characters[i].name;
    let fechaNacimiento= data.characters[i].birth;
    let especie = data.characters[i].species;
    let genero =data.characters[i].gender;
    let casa = data.characters[i].house;
    let varita = data.characters[i].wand;
    let patronus = data.characters[i].patronus;
    let image = data.characters[i].image;
    
    let personajes= document.getElementById("personajes");
    
    let divPersonajes= document.createElement("div");
    personajes.appendChild(divPersonajes);
    divPersonajes.classList.add('divPersonajes');
    
    let nombrePersonajes=document.createElement("div");
    nombrePersonajes.classList.add('nombrePersonajes');
    divPersonajes.appendChild(nombrePersonajes);
    nombrePersonajes.innerHTML+= nombre + '<br>';
    
    //creando etiqueta imagen
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
    personajes.appendChild(datosDiv);
    datosDiv.classList.add('datosDiv');
    
    datosDiv.innerHTML+='Nombre: ' + nombre + '<br>Fecha de Nac.: ' + fechaNacimiento + '<br>Especie: ' + especie + '<br>Género: ' + genero + '<br>Casa: ' + casa + '<br>Varita: '+ varita + '<br>';
  
crearCerrar(datosDiv);
  
});
  
    btnPatronus.addEventListener("click", () =>{
    
    let patronusDiv=document.createElement("div");
    personajes.appendChild(patronusDiv);
    patronusDiv.classList.add('patronusDiv');
    patronusDiv.innerText = 'Patronus: '+ patronus;
          
  crearCerrar(patronusDiv);
        
    });
     
      
  }
  opcionPersonaje.classList.add('pintarOpcionNav');
}

function crearCerrar(newDiv){
    let cerrar=document.createElement("button");
    cerrar.classList.add('cerrar');
    newDiv.appendChild(cerrar);
      
    cerrar.innerText = 'X';
    
cerrar.addEventListener('click',()=>{
  newDiv.style.display ='none';
});
  
}



