import { Role } from "./role";

export interface User {
  selec: any;
     id:number;
     username:string;

     password:string;

     roles:Role[];
}
