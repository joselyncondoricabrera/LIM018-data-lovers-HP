
import data from './data/harrypotter/data.js';
import { sortData,
  filterCasa,
  filterEspecie,
  filterGenero,
  filterAscendencia, } from './data.js';


//mostrar inicio
let inicio = document.getElementById("mostrarI");
//llamando al li:personaje
let opcionPersonaje=document.getElementById('mostrarPersonaje');

//pintar opcion inicio al inicializar
inicio.classList.add('pintarOpcionNav');

inicio.addEventListener ("click", () =>{
document.getElementById("mostrarInicio").style.display = "block";
document.getElementById("mostrarPersonajes").style.display = "none"; 
document.getElementById("mostrarHechizos").style.display = "none";  document.getElementById("mostrarPociones").style.display = "none"; 
  //pintar el nav inicio
  inicio.classList.add('pintarOpcionNav');
  // despintar los nav personaje,hechizo y pociones
   mostrarPer.classList.remove('pintarOpcionNav');
   mostrarHechizo.classList.remove('pintarOpcionNav');
   mostrarPociones.classList.remove('pintarOpcionNav');
  
  
});

//llamando a la section para mostrar los personajes
let mostrarPer = document.getElementById("mostrarPersonaje");
mostrarPer.addEventListener ("click",mostrarTodosPer);

let personajes = document.getElementById("personajes");
let personajesOrdenados = document.getElementById("personajesOrdenados");
let personajesFiltrados = document.getElementById("personajesFiltrados");

function mostrarTodosPer(){
  // mostrando en el label los datos del personaje (imprimir en HTML)
  document.getElementById("mostrarInicio").style.display = "none";
document.getElementById("mostrarPociones").style.display = "none"; document.getElementById("mostrarHechizos").style.display = "none";
  document.getElementById("mostrarPersonajes").style.display = "block";
  //pintar nav personajes
  mostrarPer.classList.add('pintarOpcionNav');
  //despintar nav inicio, hechizo,pociones
  inicio.classList.remove('pintarOpcionNav');
  mostrarHechizo.classList.remove('pintarOpcionNav');
  mostrarPociones.classList.remove('pintarOpcionNav');

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
// LLAMANDO AL BOTON PARA ORDENAR PERSONAJES
let btnOrdenar = document.getElementById("btnOrdenar");
btnOrdenar.addEventListener ("click", () =>{
  //LLAMNDO AL COMBOBOX  DE ORDENAR PERSONAJES VISIBLE
document.getElementById("orden").style.display = "block";
//reiniciar el select de los demas
filtrarCasa.selectedIndex=0;
filtrarEspecie.selectedIndex=0;
filtrarGenero.selectedIndex=0;
filtrarAsc.selectedIndex=0;
// reiniciar el select de ascendente o descendente
orden.selectedIndex=0;

//despintar los label de filtros

labelCasa.classList.remove('pintarFiltros');
labelEspecie.classList.remove('pintarFiltros');
labelGenero.classList.remove('pintarFiltros');
labelAscende.classList.remove('pintarFiltros');

//cargar datos de los 48
document.getElementById("personajes").style.display = "flex";  
document.getElementById("personajesContainer").style.display = "flex"; 






});

let pos=[];

//llamando al comboboX orden (ascendente,descendente)
let orden = document.getElementById("orden");



//EJECUTA EL COMBOBOX DE ACUERDO A LA SELECCION
orden.addEventListener ("change", (e) =>{
  let res=e.target.selectedIndex;
  while (personajesOrdenados.firstChild) {
    personajesOrdenados.removeChild(personajesOrdenados.firstChild);
  }
    document.getElementById("personajes").style.display = "none";  
    document.getElementById("personajesContainer").style.display = "none"; 
    document.getElementById("personajesOrdenados").style.display = "flex";  
    document.getElementById("persContainerOrdenado").style.display = "flex";
  
    pos=sortData(data.characters,res);
    crearDivs(pos,personajesOrdenados);
 
  });
 

function crearDivs(array,padre){
  let iter=0;
  for(let i=0; i<array.length; i++){
    if(array==data.characters){
    iter = i;
    }
    else{
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
    let varita = data.characters[iter].wand;
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

    if (padre==personajesFiltrados){
    padre = document.getElementById("personajesFiltrados");
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

let filtrarCasa=document.getElementById("casa");
// llamando a todo los label filtros
let labelCasa = document.getElementById("filtrosCasa");
let labelEspecie = document.getElementById("filtrosEspecie");
let labelGenero = document.getElementById("filtrosGenero");
let labelAscende = document.getElementById("filtrosAscendencia");

filtrarCasa.addEventListener('change', () => {
 //pintar label cuando selecciona el select
labelCasa.classList.add('pintarFiltros');
//despintar los demas label
labelEspecie.classList.remove('pintarFiltros');
labelGenero.classList.remove('pintarFiltros');
labelAscende.classList.remove('pintarFiltros');

ocultarParaFiltrar();
let casaVal=filtrarCasa.value;
let filCasa=filterCasa(data.characters, casaVal);

//console.log(filCasa);
//console.log(typeof(casaVal));

crearDivs(filCasa,personajesFiltrados);

//reiniciar el select de los demas
filtrarEspecie.selectedIndex=0;
filtrarGenero.selectedIndex=0;
filtrarAsc.selectedIndex=0;

orden.style.display='none';

});

let filtrarEspecie=document.getElementById("especie");
filtrarEspecie.addEventListener('change', () => {
  //pintar label cuando selecciona el select
labelEspecie.classList.add('pintarFiltros');
//despintar los demas label
labelCasa.classList.remove('pintarFiltros');
labelGenero.classList.remove('pintarFiltros');
labelAscende.classList.remove('pintarFiltros');

ocultarParaFiltrar();
let especieVal=filtrarEspecie.value;
let filEspecie=filterEspecie(data.characters, especieVal);
crearDivs(filEspecie,personajesFiltrados);

//reiniciar el select de los demas
filtrarCasa.selectedIndex=0;
filtrarGenero.selectedIndex=0;
filtrarAsc.selectedIndex=0;

orden.style.display='none';

//console.log(filEspecie);
//console.log(especieVal);
});

let filtrarGenero=document.getElementById("genero");
filtrarGenero.addEventListener('change', () => {
  //pintar label cuando selecciona el select
labelGenero.classList.add('pintarFiltros');
//despintar los demas label
labelCasa.classList.remove('pintarFiltros');
labelEspecie.classList.remove('pintarFiltros');
labelAscende.classList.remove('pintarFiltros');


ocultarParaFiltrar();
let generoVal=filtrarGenero.value;
let filGenero=filterGenero(data.characters, generoVal);
crearDivs(filGenero,personajesFiltrados);

//reiniciar el select de los demas
filtrarEspecie.selectedIndex=0;
filtrarCasa.selectedIndex=0;
filtrarAsc.selectedIndex=0;

orden.style.display='none';

//console.log(filGenero);
//console.log(generoVal);

});

let filtrarAsc=document.getElementById("asc");
filtrarAsc.addEventListener('change', () => {
  //pintar label cuando selecciona el select
labelAscende.classList.add('pintarFiltros');
//despintar los demas label
labelCasa.classList.remove('pintarFiltros');
labelEspecie.classList.remove('pintarFiltros');
labelGenero.classList.remove('pintarFiltros');

  ocultarParaFiltrar();
  let ascVal=filtrarAsc.value;
let filAsc=filterAscendencia(data.characters, ascVal);
crearDivs(filAsc,personajesFiltrados);
//reiniciar el select de los demas
filtrarEspecie.selectedIndex=0;
filtrarGenero.selectedIndex=0;
filtrarCasa.selectedIndex=0;

orden.style.display='none';

//console.log(ascVal);
//console.log(filAsc);

});

function ocultarParaFiltrar(){
  document.getElementById("personajesOrdenados").style.display = "none"; 
  document.getElementById("persContainerOrdenado").style.display = "none";
  document.getElementById("personajes").style.display = "none"; 
  document.getElementById("personajesContainer").style.display = "none";
  while (personajesFiltrados.firstChild) {
    personajesFiltrados.removeChild(personajesFiltrados.firstChild);
  }
}

// PÁGINA DE HECHIZO

let mostrarHechizo = document.getElementById("mostrarH");
mostrarHechizo.addEventListener ("click",mostrarHech);

let hechizos = document.getElementById("hechizos");

function mostrarHech(){
  document.getElementById("mostrarHechizos").style.display = "block";
document.getElementById("mostrarPersonajes").style.display = "none";
document.getElementById("mostrarInicio").style.display = "none";
document.getElementById("mostrarPociones").style.display = "none"; 

  crearDivsHech(data.spells,hechizos);
  //pintar nav hechizos
  mostrarHechizo.classList.add('pintarOpcionNav');
  //despintar nav inicio, personaje y pociones
  inicio.classList.remove('pintarOpcionNav');
  mostrarPer.classList.remove('pintarOpcionNav');
  mostrarPociones.classList.remove('pintarOpcionNav');
  
}

function crearDivsHech(array,padre){
  let iter=0;
  for(let i=0; i<array.length; i++){
    if(array==data.spells){
      iter = i;
    }
    else{
      iter = array[i];
    } 
    let nombre= data.spells[iter].name;
    let otroNombre= data.spells[iter].other_name;
    let pronunciacion = data.spells[iter].pronunciation;
    let tipo = data.spells[iter].spell_type;
    let descripcion = data.spells[iter].description;
    let mencion = data.spells[iter].mention;
    let etimologia = data.spells[iter].etymology;
    let nota = data.spells[iter].note;
    
    padre = document.getElementById("hechizos");
    
    let divHechizos = document.createElement("div");
    padre.appendChild(divHechizos);
    divHechizos.classList.add('divHechizos');
    
    let nombreHechizo=document.createElement("div");
    nombreHechizo.classList.add('nombreHechizos');
    divHechizos.appendChild(nombreHechizo);
    nombreHechizo.innerHTML+= nombre + '<br>'+'<br>';
    
    let btnDatos=document.createElement("button");
    btnDatos.classList.add('btnDatos');
    divHechizos.appendChild(btnDatos);
    btnDatos.innerText = 'DATOS';
         
    btnDatos.addEventListener("click", () =>{
    
    let datosDivHechizos=document.createElement("div");
    padre.appendChild(datosDivHechizos);
    datosDivHechizos.classList.add('datosDivHechizos');
      
    datosDivHechizos.innerHTML+= 'Nombre: ' + nombre + '<br>'+'<br>Otro nombre: '+ otroNombre+'<br>' +'<br>Pronunciación: '+ pronunciacion +'<br>'+ '<br>Tipo: '+ tipo +'<br>'+ '<br>Descripción: ' + descripcion +'<br>'+ '<br>Mención: ' + mencion +'<br>'+ '<br>Etimología: ' + etimologia +'<br>'+'<br>Nota: ' + nota +'<br>';
      
crearCerrar(datosDivHechizos);
  
});
  
}
}

// PÁGINA DE POCIONES

let mostrarPociones = document.getElementById("mostrarP");
mostrarPociones.addEventListener ("click",mostrarPo);

let pociones = document.getElementById("pociones");

function mostrarPo(){
document.getElementById("mostrarPociones").style.display = "block"; document.getElementById("mostrarHechizos").style.display = "none";
document.getElementById("mostrarPersonajes").style.display = "none";
document.getElementById("mostrarInicio").style.display = "none";

  crearDivsPo(data.potions,pociones);
  //Pintar nav posiciones
  mostrarPociones.classList.add('pintarOpcionNav');
  //despintar nav inicio, personaje y hechizos
  inicio.classList.remove('pintarOpcionNav');
  mostrarPer.classList.remove('pintarOpcionNav');
  mostrarHechizo.classList.remove('pintarOpcionNav');
  
}

function crearDivsPo(array,padre){
  let iter=0;
  for(let i=0; i<array.length; i++){
    if(array==data.potions){
      iter = i;
    }
    else{
      iter = array[i];
    } 
    let nombre= data.potions[iter].name;
    let descripcion= data.potions[iter].description;
        
    let divPociones = document.createElement("div");
    padre.appendChild(divPociones);
    divPociones.classList.add('divPociones');
    
    let nombrePociones=document.createElement("div");
    nombrePociones.classList.add('nombrePociones');
    divPociones.appendChild(nombrePociones);
    nombrePociones.innerHTML+= nombre + '<br>';
    
    let descriDiv=document.createElement("div");
    divPociones.appendChild(descriDiv);
    descriDiv.classList.add('descriDiv');
      
    descriDiv.innerHTML+= '<br>Descripción: ' + descripcion +'<br>';
        
}
}

// llamando al boton para ordenar hechizos
let btnOrdenarH = document.getElementById("btnOrdenarH");
btnOrdenarH.addEventListener ("click", () =>{
document.getElementById("ordenH").style.display = "block";
});

let ordenH = document.getElementById("ordenH");
ordenH.addEventListener ("change", (e) =>{
  let res=e.target.selectedIndex;
  while (hechizos.firstChild) {
    hechizos.removeChild(hechizos.firstChild);
  }
    pos=sortData(data.spells,res);
    crearDivsHech(pos,hechizos);
  });


// llamando al botone para ordenar pociones
let btnOrdenarP = document.getElementById("btnOrdenarP");
btnOrdenarP.addEventListener ("click", () =>{
document.getElementById("ordenP").style.display = "block";
});

let ordenP = document.getElementById("ordenP");
ordenP.addEventListener ("change", (e) =>{
  let res=e.target.selectedIndex;
  while (pociones.firstChild) {
    pociones.removeChild(pociones.firstChild);
  }
    pos=sortData(data.potions,res);
    crearDivsPo(pos,pociones);
  });




