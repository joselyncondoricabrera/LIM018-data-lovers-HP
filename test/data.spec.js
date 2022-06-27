import {sortData,filterCasa,filterEspecie,filterGenero,filterAscendencia} from '../src/data.js';
import data from './testData.js';


describe('sorData', () => {
  it('Deberia ser una función', () => {
    expect(typeof sortData).toBe('function');
  });

  it('Deberia retornar personajes ordenado ascendentemente', () => {
    expect(sortData(data.characters,1)).toStrictEqual([24, 4, 37, 14, 30, 32, 44, 25, 26, 34, 47, 33, 5, 13, 40, 27, 22, 46, 45, 23, 8, 9, 0, 2, 38, 41, 10, 35, 6, 15, 39, 20, 36, 18, 12, 17, 29, 1, 21, 3, 42, 7, 16, 19, 31, 11, 28, 43]);
  });
});

describe('filterCasa', ()=>{
  it('Deberia ser una función',()=>{
    expect(typeof filterCasa).toBe('function');
  });
  it('Deberia retornar personajes que pertenecen a la casa "Ravenclaw" ',()=>{
    expect(filterCasa(data.characters,'Ravenclaw')).toStrictEqual([8,19,26,35,43,46]);
  });
  it('Deberia retornar personajes que pertenecen a la casa "Slytherin" ',()=>{
    expect(filterCasa(data.characters,'Slytherin')).toStrictEqual([5,7,31,33,38]);
  });

});

describe('filterEspecie', ()=>{
  it('Deberia ser una función',()=>{
    expect(typeof filterEspecie).toBe('function');
  });
  it('Deberia retornar personajes con especie "Hombre Lobo"',()=>{
    expect(filterEspecie(data.characters, 'Werewolf (formerly Human)')).toStrictEqual([17,40]);
  });
  it('Deberia retornar personajes con especie "1/4 Sirena"',()=>{
    expect(filterEspecie(data.characters, 'Quarter-Veela')).toStrictEqual([27]);
  });

});

describe('filterGenero', ()=>{
  it('Deberia ser una función',()=>{
    expect(typeof filterGenero).toBe('function');
  });
  it('Deberia retornar personajes Femeninos',()=>{
    expect(filterGenero(data.characters,'Female')).toStrictEqual([2, 6, 9, 12, 15, 19, 21, 26, 27, 29, 32, 33, 35, 36, 39]);
  });
  it('Deberia retornar personajes Masculinos',()=>{
    expect(filterGenero(data.characters,'Male')).toStrictEqual([0, 1, 3, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 18, 20, 22, 23, 24, 25, 28, 30, 31, 34, 37, 38, 40, 41, 42, 43, 44, 45, 46, 47]);
  });

});

describe('filterAscendencia', ()=>{
  it('Deberia ser una función',()=>{
    expect(typeof filterAscendencia).toBe('function');
  });
  it('Deberia retornar personajes de ascendencia Mestiza',()=>{
    expect(filterAscendencia(data.characters,'Half-blood')).toStrictEqual([0, 4, 6, 7, 8, 17, 19, 31, 33, 36, 46]);
  });
  it('Deberia retornar personajes de ascendencia Muggle',()=>{
    expect(filterAscendencia(data.characters,'Muggle')).toStrictEqual([11, 12, 13]);
  });
  it('Deberia retornar personajes de ascendencia Squib ',()=>{
    expect(filterAscendencia(data.characters,'Squib')).toStrictEqual([37]);
  });

});











