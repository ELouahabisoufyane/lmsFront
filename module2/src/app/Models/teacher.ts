import { Filiere } from "./filiere";
import { Role } from "./role";

export class Teacher {
    id!:any;
    username!:string;
    password!:string;
    roles:Role[]=[];
    cin!:string;
    maFiliere!:Filiere;
}
