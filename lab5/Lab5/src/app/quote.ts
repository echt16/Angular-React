import { Author } from "./author";

export class Quote {
    author: Author;
    text: string;
    href: string | null;
    constructor() {
        this.author = {
            name :'', 
            biografy : null,
            imgSrc:null
        };
        this.text = 'undefined';
        this.href = 'undefined';
    }
}