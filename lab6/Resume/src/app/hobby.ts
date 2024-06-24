export class Hobby {
    name: string = '';
    description: string = '';
    hobbyImg: string = '';
    personImg: string = '';
    constructor(name: string, descr: string, hobbyImg: string, personImg: string) {
        this.name = name;
        this.description = descr;
        this.hobbyImg = hobbyImg;
        this.personImg = personImg;
    }
}