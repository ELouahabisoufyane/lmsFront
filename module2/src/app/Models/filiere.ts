import { Niveau } from "./niveau";
import { Student } from "./student";
import { Teacher } from "./teacher";
import {Diplome} from "./Diplome";

export class Filiere {
    id!: number;
    titre!: number;
    diplome!:Diplome;
    chefFiliere!: Teacher;
    niveaux!: Niveau[];
}
