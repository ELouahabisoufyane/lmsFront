import {Module} from "./Module";


export interface Semestre{
  id:number;
  titre:string;
  indece:number;
  modules:Module[];
}
