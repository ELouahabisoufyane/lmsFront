import {Teacher} from "./teacher";
import {Element} from "./Element";

export class Module{
    id :number;
    titre:string;
    professeur:Teacher;
    elements:Element[];
}
