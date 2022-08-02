import { Filiere } from "./filiere";
import { Student } from "./student";

export class Niveau {
    id!:number;
    titre!:string;
    level!:number;
    filiere!:Filiere;
    students! :Student[];
}

