// estas funciones son de ejemplo

export const sortData = (data, sortOrder) => {
  let posiciones=[];
  document.getElementById("personajes").style.display = "none"; 
  document.getElementById("personajesContainer").style.display = "none";
    let ordenado=[];
    let pers=[];
    for(let i=0; i<data.length; i++){       
        pers[i]=data[i].name;
      if(sortOrder==1){
        ordenado = pers.sort();
        }
      if(sortOrder==2){
        ordenado = pers.sort().reverse();
        }  
    }
      for(let i=0; i< ordenado.length; i++){
      // index almacena la posicion en que se encuentra dicho nombre en la data
      let index = data.map(nombre => nombre.name).indexOf(ordenado[i]);
        posiciones.push(index);
      } 
  return posiciones;

};

/* export const anotherExample = () => {
  return 'OMG';
};

function sortData(data, sortOrder){
  let posiciones=[];
  document.getElementById("personajes").style.display = "none"; 
  document.getElementById("personajesContainer").style.display = "none";
    let ordenado=[];
    let pers=[];
    for(let i=0; i<data.length; i++){       
        pers[i]=data[i].name;
      if(sortOrder==1){
        ordenado = pers.sort();
        }
      if(sortOrder==2){
        ordenado = pers.sort().reverse();
        }  
    }
  
      for(let i=0; i< ordenado.length; i++){
      // index almacena la posicion en que se encuentra dicho nombre en la data
      let index = data.characters.map(nombre => nombre.name).indexOf(ordenado[i]);
        posiciones.push(index);
      } 
  return posiciones; */

  //let personajesOrdenados = document.getElementById("personajesOrdenados");

  //crearDivs(posiciones,personajesOrdenados);
  
  //}

  //filterData(data.characters, "Slytherin")

/* function filterData(data, condition) {
if(condition=="Gryffindor"){
let filtrado = data.filter(casa=>(casa.house=="Gryffindor"));
  }
if(condition=="Slytherin"){
let filtrado = data.filter(casa=>(casa.house=="Slytherin"));
  }
if(condition=="Ravenclaw"){
let filtrado = data.filter(casa=>(casa.house=="Ravenclaw"));
  }
  if(condition=="Hufflepuff"){
let filtrado = data.filter(casa=>(casa.house=="Hufflepuff"));
  }
} */



/* let data = harryPotter.characters;

  let filtrado = data.filter(casa=>(casa.house=="Gryffindor"));
  console.log(filtrado);   */

//}