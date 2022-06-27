
// funcion que ordena de manera ascendente o descendente la data
//sortOrder -> index del opcion del combobox
export const sortData = (data, sortOrder) => {
  let posiciones=[];
  let ordenado=[];
  //almacena datos de todos los personajes o hechizos o pociones 
  //(dependiendo en donde lo llame)
  let pers=[];
  for(let i=0; i<data.length; i++){       
    pers[i]=data[i].name;
    
    if(sortOrder==0){
      ordenado = pers;
      }
    // 1 value ascendente
    if(sortOrder==1){
      ordenado = pers.sort();
      }
    // 2 value descendente
    if(sortOrder==2){
      ordenado = pers.sort().reverse();
      }  
    }
    for(let i=0; i< ordenado.length; i++){
      // index almacena la posicion en que se encuentra dicho nombre en la data
      let index = data.map(nombre => 
      nombre.name).indexOf(ordenado[i]);
      //permite agregar uno a uno al final
      posiciones.push(index);
    }

  //devuelve [] los id respecto de la data de manera ordenada
  return posiciones;
};

//filterData(data.characters, "Slytherin")

export const filterCasa = (data, condition) => {
  const filtroCasa = data.filter((hp) => hp.house === condition);
  let pos= extraerArray(data,filtroCasa);
  return pos;
};

export const filterEspecie = (data, condition) => {
  const filtroEspecie = data.filter((hp) => hp.species === condition);  
  let pos= extraerArray(data,filtroEspecie);
  return pos;
};

export const filterGenero = (data, condition) => {
  const filtroGenero = data.filter((hp) => hp.gender=== condition);
  let pos= extraerArray(data,filtroGenero);
  return pos;
};

export const filterAscendencia = (data, condition) => {
  const filtroAscendencia = data.filter((hp) => hp.ancestry=== condition);
  let pos= extraerArray(data,filtroAscendencia);
  return pos;
};

function extraerArray(data, filtro){
  let posiciones=[];
  let pers=[];
  for(let i=0; i< filtro.length; i++){
      pers[i]=filtro[i].name;
      let index = data.map(e => e.name).indexOf(pers[i]);
        posiciones.push(index);
      } 
  return posiciones;
}

export const computeStats = (data) => {
  let contador = 0;
  let prom =0;
  for (let i=0; i<data.length; i++){
    contador += 1
  }
  prom = ((contador/48)*100).toFixed(2);
  return prom;
}

