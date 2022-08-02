import { Niveau } from "./niveau";
import { Student } from "./student";
import { Teacher } from "./teacher";

export class Filiere {
    id!: number;
    titre!: number;
    deplome!:string;
    chefFiliere!: Teacher;
    niveaux!: Niveau[];
}
