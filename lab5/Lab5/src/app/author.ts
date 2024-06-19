export class Author{
    name: string;
    biografy:string | null;
    imgSrc:string|null;
    constructor(){
        this.name = '';
        this.biografy = '';
        this.imgSrc = null;
    }
}