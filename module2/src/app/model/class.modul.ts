export interface Classe{
    id:number;
    name:string;

}
export interface PageC{
    classes:Classe[];
    page:number;
    size:number;
    totalPages:number;
}
