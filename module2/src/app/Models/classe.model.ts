
export class Classe {

    id!:any;

    name!:string ;

    nombre!:number;

    description!: string ;

}

export interface PageClasse {

      classes:Classe[];

      Page:number;

      size:number;

      totalPages: number;

}