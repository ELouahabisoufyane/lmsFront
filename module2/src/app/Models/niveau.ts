import { Filiere } from "./filiere";
import { Student } from "./student";
import {Semestre} from "./Semestre";

export class Niveau {
    id!:number;
    titre!:string;
    level!:number;
    semestres:Semestre[];

}

