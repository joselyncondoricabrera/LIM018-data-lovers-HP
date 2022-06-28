import data from './data/harrypotter/data.js';
import { sortData,
  filterCasa,
  filterEspecie,
  filterGenero,
  filterAscendencia,
  computeStats, } from './data.js';

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
  document.getElementById("mostrarPociones").style.display = "none"; 
  document.getElementById("mostrarHechizos").style.display = "none";
  document.getElementById("mostrarPersonajes").style.display = "block";
  //pintar nav personajes
  mostrarPer.classList.add('pintarOpcionNav');
  //despintar nav inicio, hechizo,pociones
  inicio.classList.remove('pintarOpcionNav');
  mostrarHechizo.classList.remove('pintarOpcionNav');
  mostrarPociones.classList.remove('pintarOpcionNav');

  document.getElementById("personajes").style.display = "flex";  
  document.getElementById("personajesContainer").style.display = "flex"; 
  while (personajesOrdenados.firstChild) {
    personajesOrdenados.removeChild(personajesOrdenados.firstChild);
  }
  while (personajesFiltrados.firstChild) {
    personajesFiltrados.removeChild(personajesFiltrados.firstChild);
  }
  while (personaBuscada.firstChild) {
    personaBuscada.removeChild(personaBuscada.firstChild);
  }
  document.getElementById('conteo').style.display="none";
  document.getElementById('conteo').innerHTML = "";

  crearDivs(data.characters,personajes); 
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

// LLAMANDO AL BOTON PARA ORDENAR PERSONAJES
let btnOrdenar = document.getElementById("btnOrdenar");

btnOrdenar.addEventListener ("mouseenter", () =>{
  //LLAMNDO AL COMBOBOX  DE ORDENAR PERSONAJES VISIBLE
document.getElementById("orden").style.display = "block";
menuCasa.style.display="none";
menuEspecie.style.display="none";
menuGenero.style.display="none";
menuAsc.style.display="none";
menuBuscador.style.display="none"
document.getElementById('conteo').style.display="none";
document.getElementById("personajeBuscado").style.display = "none";

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
while (personajesOrdenados.firstChild) {
  personajesOrdenados.removeChild(personajesOrdenados.firstChild);
}
while (personajesFiltrados.firstChild) {
  personajesFiltrados.removeChild(personajesFiltrados.firstChild);
}
document.getElementById('conteo').innerHTML = "";
});

let menuOrden= document.getElementById("orden");

menuOrden.addEventListener ("mouseleave", () =>{
menuOrden.style.display="none";
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
    document.getElementById("personajeBuscado").style.display = "none";
  
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
    
  crearCerrar(patronusDiv);   
    });     
  } 
  opcionPersonaje.classList.add('pintarOpcionNav');
}

let filtrarCasa=document.getElementById("casa");

//llamando a los select de los label
let menuCasa= document.getElementById("casa");
let menuEspecie=document.getElementById("especie");
let menuGenero= document.getElementById("genero");
let menuAsc=document.getElementById("asc");
let menuBuscador=document.getElementById("buscar");

// llamando a todo los label filtros
let labelCasa = document.getElementById("filtrosCasa");
let labelEspecie = document.getElementById("filtrosEspecie");
let labelGenero = document.getElementById("filtrosGenero");
let labelAscende = document.getElementById("filtrosAscendencia");
let labelBuscador= document.getElementById("buscador");

// aparecer y desaparecer los filtros
labelCasa.addEventListener('mouseenter',()=>{
 menuCasa.style.display="block";
 menuEspecie.style.display="none";
 menuGenero.style.display="none";
 menuAsc.style.display="none";
 menuBuscador.style.display="none"
 menuOrden.style.display="none";
})
menuCasa.addEventListener('mouseleave',()=>{
  menuCasa.style.display="none";
 })
 
 labelEspecie.addEventListener('mouseenter',()=>{
  menuEspecie.style.display="block";
  menuCasa.style.display="none";
  menuGenero.style.display="none";
  menuAsc.style.display="none";
  menuBuscador.style.display="none";
  menuOrden.style.display="none";
})
menuEspecie.addEventListener('mouseleave',()=>{
  menuEspecie.style.display="none";
  })

  labelGenero.addEventListener('mouseenter',()=>{
    menuGenero.style.display="block";
    menuCasa.style.display="none";
    menuEspecie.style.display="none";
    menuAsc.style.display="none";
    menuBuscador.style.display="none"
    menuOrden.style.display="none";
   });
  menuGenero.addEventListener('mouseleave',()=>{
     menuGenero.style.display="none";
    });

  labelAscende.addEventListener('mouseenter',()=>{
    menuAsc.style.display="block";
    menuCasa.style.display="none";
    menuEspecie.style.display="none";
    menuGenero.style.display="none";
    menuBuscador.style.display="none"
    menuOrden.style.display="none";
     });
  menuAsc.addEventListener('mouseleave',()=>{
    menuAsc.style.display="none";
      });

  labelBuscador.addEventListener('mouseenter',()=>{
    menuBuscador.style.display="block"
    menuAsc.style.display="none";
    menuCasa.style.display="none";
    menuEspecie.style.display="none";
    menuGenero.style.display="none";
    menuOrden.style.display="none";
  });

  menuBuscador.addEventListener('mouseleave',()=>{
    menuBuscador.style.display="none";
    document.getElementById('buscar').value= '';
  });

//llamada filtro casas
filtrarCasa.addEventListener('change', () => {
 //pintar label cuando selecciona el select
labelCasa.classList.add('pintarFiltros');
//despintar los demas label
labelEspecie.classList.remove('pintarFiltros');
labelGenero.classList.remove('pintarFiltros');
labelAscende.classList.remove('pintarFiltros');

document.getElementById("personajeBuscado").style.display = "none";

ocultarParaFiltrar();
let casaVal=filtrarCasa.value;
let filCasa=filterCasa(data.characters, casaVal);
crearDivs(filCasa,personajesFiltrados);

//reiniciar el select de los demas
filtrarEspecie.selectedIndex=0;
filtrarGenero.selectedIndex=0;
filtrarAsc.selectedIndex=0;

orden.style.display='none';
document.getElementById('conteo').style.display="flex";
let cont = computeStats(filCasa)
document.getElementById('conteo').innerHTML = "El "+ cont + 
" % de los personajes pertencen a la casa de " + casaVal;
});

let filtrarEspecie=document.getElementById("especie");
filtrarEspecie.addEventListener('change', () => {
  //pintar label cuando selecciona el select
labelEspecie.classList.add('pintarFiltros');
//despintar los demas label
labelCasa.classList.remove('pintarFiltros');
labelGenero.classList.remove('pintarFiltros');
labelAscende.classList.remove('pintarFiltros');

document.getElementById("personajeBuscado").style.display = "none";  

ocultarParaFiltrar();
let especieVal=filtrarEspecie.value;
let filEspecie=filterEspecie(data.characters, especieVal);
crearDivs(filEspecie,personajesFiltrados);

//reiniciar el select de los demas
filtrarCasa.selectedIndex=0;
filtrarGenero.selectedIndex=0;
filtrarAsc.selectedIndex=0;

let resultado = especieVal == "Human" ? "Humana" :
                especieVal == "Werewolf (formerly Human)" ? "Hombre Lobo":
                especieVal == "Human (Seer)" ? "Humana (Vidente)":
                especieVal == "House-elf"? "Elfo doméstico":
                especieVal == "Half-Human/Half-Giant"? "Mitad Humano mitad gigante":
                especieVal == "Quarter-Veela"? "1/4 Sirena":
                especieVal == "Human (Metamorphmagus)"? "Humano (Metamorphmagus)":
                "Humano/Hombre Lobo";

orden.style.display='none';
document.getElementById('conteo').style.display="flex";
let cont = computeStats(filEspecie)
document.getElementById('conteo').innerHTML = "El "+ cont + 
" % de los personajes son de la especie " + resultado;
});

let filtrarGenero=document.getElementById("genero");
filtrarGenero.addEventListener('change', () => {
  //pintar label cuando selecciona el select
labelGenero.classList.add('pintarFiltros');
//despintar los demas label
labelCasa.classList.remove('pintarFiltros');
labelEspecie.classList.remove('pintarFiltros');
labelAscende.classList.remove('pintarFiltros');

document.getElementById("personajeBuscado").style.display = "none";  

ocultarParaFiltrar();
let generoVal=filtrarGenero.value;
let filGenero=filterGenero(data.characters, generoVal);
crearDivs(filGenero,personajesFiltrados);

//reiniciar el select de los demas
filtrarEspecie.selectedIndex=0;
filtrarCasa.selectedIndex=0;
filtrarAsc.selectedIndex=0;

orden.style.display='none';
document.getElementById('conteo').style.display="flex";
let cont = computeStats(filGenero)
document.getElementById('conteo').innerHTML = "El "+ cont + 
" % de los personajes son de género " + ((generoVal=="Female") ? "Femenino" : "Masculino");
});

let filtrarAsc=document.getElementById("asc");
filtrarAsc.addEventListener('change', () => {
  //pintar label cuando selecciona el select
labelAscende.classList.add('pintarFiltros');
//despintar los demas label
labelCasa.classList.remove('pintarFiltros');
labelEspecie.classList.remove('pintarFiltros');
labelGenero.classList.remove('pintarFiltros');

document.getElementById("personajeBuscado").style.display = "none";

  ocultarParaFiltrar();
  let ascVal=filtrarAsc.value;
let filAsc=filterAscendencia(data.characters, ascVal);
crearDivs(filAsc,personajesFiltrados);
//reiniciar el select de los demas
filtrarEspecie.selectedIndex=0;
filtrarGenero.selectedIndex=0;
filtrarCasa.selectedIndex=0;

orden.style.display='none';
let resultado = ascVal == "Half-blood" ? "Mestizos" :
                ascVal == "Pure-blood" ? "Sangre Pura":
                ascVal == "Muggle-born" ? "Nacidos de muggles":
                ascVal == "Part-Human (Half-giant)"? "Parte humana (medio gigante)":
                ascVal == "Muggle"? "Muggle":
                ascVal == "Pure-blood or half-blood"? "Mestizos o de Sangre Pura":
                ascVal == "Pure-blood (possibly)"? "Sangre Pura (posiblemente)":
                ascVal == "Quarter-Veela"? "1/4 Sirena":
                "Squib";

document.getElementById('conteo').style.display="flex";
let cont = computeStats(filAsc);
document.getElementById('conteo').innerHTML = "El "+ cont + 
" % de los personajes son " + resultado;
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

//BUSQUEDA DE PERSONAJE
let buscarPersonaje = document.getElementById('buscar');
let personaBuscada = document.getElementById('personajeBuscado');

buscarPersonaje.addEventListener('input',(e)=>{
//ocultar el personajesContainer, containerOrdenado
document.getElementById("personajesContainer").style.display = "none";
document.getElementById("persContainerOrdenado").style.display='none'; 
document.getElementById("personajeBuscado").style.display = "flex";
document.getElementById("conteo").style.display='none';
while (personajesFiltrados.firstChild) {
  personajesFiltrados.removeChild(personajesFiltrados.firstChild);
}
document.getElementById('conteo').innerHTML = '';
//eliminar las tarjetas anteriores
while (personaBuscada.firstChild) {
  personaBuscada.removeChild(personaBuscada.firstChild);
}

let valorInput = e.target.value;
let personajeBuscado= buscador(valorInput,data.characters);

if(valorInput==''){
  document.getElementById("mostrarPersonajes").style.display = "block";
  crearDivs(data.characters,personajes); 
}
//imprime el mensaje cuando no encuentra personajes
if(personajeBuscado.length==0){
  if(valorInput==''){
    document.getElementById("personajes").style.display = "flex";  
    document.getElementById("personajesContainer").style.display = "flex";
    //document.getElementById("mostrarPersonajes").style.display = "block";
    crearDivs(data.characters,personajes); 
  }else{
  let divMensaje=document.createElement("label");
  personaBuscada.appendChild(divMensaje);
  divMensaje.classList.add('divMensaje');
  divMensaje.innerHTML+= '<b>'+'No se ha encontrado ningún resultado.'+'</b>'+'<br>'+'Prueba con otros nombres de personaje';
}}
crearDivs(personajeBuscado,personaBuscada);
});


// PÁGINA DE HECHIZO
let mostrarHechizo = document.getElementById("mostrarH");
let hechizos = document.getElementById("hechizos");
mostrarHechizo.addEventListener ("click",mostrarHech);

function mostrarHech(){
  document.getElementById("mostrarHechizos").style.display = "block";
  document.getElementById("mostrarPersonajes").style.display = "none";
  document.getElementById("mostrarInicio").style.display = "none";
  document.getElementById("mostrarPociones").style.display = "none"; 

  document.getElementById("hechizos").style.display = "flex";  
  document.getElementById("hechizosContainer").style.display = "flex";

  while (hechizosOrdenados.firstChild) {
    hechizosOrdenados.removeChild(hechizosOrdenados.firstChild);
  }
  while (hechizosBuscados.firstChild) {
    hechizosBuscados.removeChild(hechizosBuscados.firstChild);
  }
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
    
    if (padre==hechizos){
      padre = document.getElementById("hechizos");
      }
  
    if (padre==hechizosBuscados){
      padre = document.getElementById("hechizosBuscados");
      }

    if (padre==hechizosOrdenados){
      padre = document.getElementById("hechizosOrdenados");
      }
    
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
}}

let hechizosOrdenados= document.getElementById("hechizosOrdenados");
// llamando al boton para ordenar hechizos y aparecer filtros hechizos
let btnOrdenarH = document.getElementById("btnOrdenarH");

btnOrdenarH.addEventListener ("mouseenter", () =>{
  menuOrdenH.style.display="block";
  menuBuscadorH.style.display="none";
  document.getElementById("ordenH").style.display = "block";
  ordenH.selectedIndex=0;
  document.getElementById("hechizos").style.display = "flex";  
  document.getElementById("hechizosContainer").style.display = "flex";
  document.getElementById("hechizosBuscados").style.display = "none";
  while (hechizosOrdenados.firstChild) {
    hechizosOrdenados.removeChild(hechizosOrdenados.firstChild);
  }
});

let menuOrdenH= document.getElementById("ordenH");
menuOrdenH.addEventListener ("mouseleave", () =>{
  menuOrdenH.style.display="none";
});

let ordenH = document.getElementById("ordenH");
ordenH.addEventListener ("change", (e) =>{
  let res=e.target.selectedIndex;

  while (hechizosOrdenados.firstChild) {
    hechizosOrdenados.removeChild(hechizosOrdenados.firstChild);
  }
  document.getElementById("hechizos").style.display = "none";  
  document.getElementById("hechizosContainer").style.display = "none"; 
  document.getElementById("hechizosBuscados").style.display = "none";
    pos=sortData(data.spells,res);
    crearDivsHech(pos,hechizosOrdenados);
  });

//BUSQUEDA DE HECHIZOS
let labelBuscadorH= document.getElementById("buscadorH");
let menuBuscadorH=document.getElementById("buscarH");

labelBuscadorH.addEventListener('mouseenter',()=>{
  menuBuscadorH.style.display="block"
  menuOrdenH.style.display="none";
  document.getElementById("hechizosContainer").style.display = "flex";
  document.getElementById("hechizos").style.display = "flex";
})

menuBuscadorH.addEventListener('mouseleave',()=>{
  menuBuscadorH.style.display="none";
  document.getElementById('buscarH').value= '';
});

//llamando al input del html y container personajeBuscado del html
let buscarHechizo = document.getElementById('buscarH');
let hechizosBuscados = document.getElementById('hechizosBuscados');

buscarHechizo.addEventListener('input',(e)=>{

  document.getElementById("hechizosContainer").style.display = "none";
  document.getElementById("hechizos").style.display = "none";
  document.getElementById("hechizosBuscados").style.display = "flex";

  while (hechizosBuscados.firstChild) {
    hechizosBuscados.removeChild(hechizosBuscados.firstChild);
  }
  while (hechizosOrdenados.firstChild) {
    hechizosOrdenados.removeChild(hechizosOrdenados.firstChild);
  }
  let valorInput = e.target.value;

  if(valorInput==''){
    document.getElementById("mostrarHechizos").style.display = "block";
    crearDivsHech(data.spells,hechizos);
  }
  let hechizoBuscado= buscador(valorInput,data.spells);

  //imprime el mensaje cuando no encuentra hechizos
  if(hechizoBuscado.length==0){
    if(valorInput==''){
      document.getElementById("hechizos").style.display = "flex";  
      document.getElementById("hechizosContainer").style.display = "flex";
      crearDivsHech(data.spells,hechizos);
    }else{
    let divMensaje=document.createElement("label");
    hechizosBuscados.appendChild(divMensaje);
    divMensaje.classList.add('divMensaje');
    divMensaje.innerHTML+= '<b>'+'No se ha encontrado ningún resultado.'+'</b>'+'<br>'+'Prueba con otros nombres de hechizos';
  }}
  crearDivsHech(hechizoBuscado,hechizosBuscados);
});

// PÁGINA DE POCIONES

let mostrarPociones = document.getElementById("mostrarP");
let pociones = document.getElementById("pociones");
mostrarPociones.addEventListener ("click",mostrarPo);

function mostrarPo(){
  document.getElementById("mostrarPociones").style.display = "block"; 
  document.getElementById("mostrarHechizos").style.display = "none";
  document.getElementById("mostrarPersonajes").style.display = "none";
  document.getElementById("mostrarInicio").style.display = "none";

  document.getElementById("pociones").style.display = "flex";  
  document.getElementById("pocionesContainer").style.display = "flex";

  while (pocionesOrdenadas.firstChild) {
    pocionesOrdenadas.removeChild(pocionesOrdenadas.firstChild);
  }
  while (pocionesBuscadas.firstChild) {
    pocionesBuscadas.removeChild(pocionesBuscadas.firstChild);
  }
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
}}

// llamando al botones para ordenar pociones
let btnOrdenarP = document.getElementById("btnOrdenarP");
btnOrdenarP.addEventListener ("mouseenter", () =>{
  menuOrdenP.style.display = "block";
  menuBuscadorP.style.display="none";
  document.getElementById("ordenP").style.display = "block";
  ordenP.selectedIndex=0;
  document.getElementById("pociones").style.display = "flex";  
  document.getElementById("pocionesContainer").style.display = "flex";
  document.getElementById("pocionesBuscadas").style.display = "none";
  while (pocionesOrdenadas.firstChild) {
    pocionesOrdenadas.removeChild(pocionesOrdenadas.firstChild);
  }
});

let menuOrdenP= document.getElementById("ordenP");
menuOrdenP.addEventListener ("mouseleave", () =>{
  menuOrdenP.style.display= "none";
});

let pocionesOrdenadas=document.getElementById("pocionesOrdenadas");

let ordenP = document.getElementById("ordenP");
ordenP.addEventListener ("change", (e) =>{
  let res=e.target.selectedIndex;

  while (pocionesOrdenadas.firstChild) {
    pocionesOrdenadas.removeChild(pocionesOrdenadas.firstChild);
  }
  document.getElementById("pociones").style.display = "none";  
  document.getElementById("pocionesContainer").style.display = "none"; 
  document.getElementById("pocionesBuscadas").style.display = "none";
  
  pos=sortData(data.potions,res);
  crearDivsPo(pos,pocionesOrdenadas);
  });

//BUSQUEDA DE POCIONES
let labelBuscadorP= document.getElementById("buscadorP");
let menuBuscadorP=document.getElementById("buscarP");

labelBuscadorP.addEventListener('mouseenter',()=>{
  menuBuscadorP.style.display="block"
  menuOrdenP.style.display="none";
  document.getElementById("pocionesBuscadas").style.display = "flex";
});

menuBuscadorP.addEventListener('mouseleave',()=>{
  menuBuscadorH.style.display="none";
  document.getElementById('buscarP').value= '';
});

let pocionesBuscadas = document.getElementById('pocionesBuscadas');

menuBuscadorP.addEventListener('input',(e)=>{

  document.getElementById("pocionesContainer").style.display = "none";
  document.getElementById("pociones").style.display = "none";
  while (pocionesBuscadas.firstChild) {
    pocionesBuscadas.removeChild(pocionesBuscadas.firstChild);
  }
  while (pocionesOrdenadas.firstChild) {
    pocionesOrdenadas.removeChild(pocionesOrdenadas.firstChild);
  }
  let valorInput = e.target.value;

  if(valorInput==''){
    document.getElementById("mostrarPociones").style.display = "block";
    crearDivsPo(data.potions,pociones);
  }
  let pocionBuscada= buscador(valorInput,data.potions);

//imprime el mensaje cuando no encuentra hechizos
  if(pocionBuscada.length==0){
    if(valorInput==''){
      document.getElementById("pociones").style.display = "flex";  
      document.getElementById("pocionesContainer").style.display = "flex";
      crearDivsPo(data.potions,pociones);
    }else{
    let divMensaje=document.createElement("label");
    pocionesBuscadas.appendChild(divMensaje);
    divMensaje.classList.add('divMensaje');
    divMensaje.innerHTML+= '<b>'+'No se ha encontrado ningún resultado.'+'</b>'+'<br>'+'Prueba con otros nombres de pociones';
  }}
  crearDivsPo(pocionBuscada,pocionesBuscadas);
});

function buscador(valorInput,data){
let porcion;
let arrayBuscado=[];
//recorrer la data personajes
for(let i = 0; i< data.length;i++){
  //recorriendo los nombre su tamaño
  for(let j = 0;j< data[i].name.length ;j++){
    //ALMACENA EN MINUSCULA LA PORCIÓN
    porcion=data[i].name.substring(0,j+1).toLowerCase();
    if(valorInput.toLowerCase()==porcion){
      arrayBuscado.push(i);        
     }
  }
}
return arrayBuscado;
}

// Obtener una referencia al elemento canvas del DOM
/* const grafica = document.querySelector("#grafica").getContext("2d");
// Las etiquetas son las que van en el eje X. 
const etiquetas = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosCasas = {
    label: "Personajes por casas",
    data: [30, 10, 5, 3], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
new Chart(grafica, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
          datosCasas,
            // Aquí más datos...
        ]
    },
    options: {
      responsive: true,
     maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
}); */


