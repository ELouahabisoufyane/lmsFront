import { Filiere } from "./filiere";
import { Niveau } from "./niveau";
import { Role } from "./role";

export class Student {
    id!:any;
    username!:string;
    email:string;
    password!:string;
    cne!:string;
    roles!:Role[];
    niveau!:Niveau;
}
