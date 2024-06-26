export class JobPlace {
    company: string;
    startTime: Date;
    endTime: Date;
    description: string;
    constructor(company: string, startTime: Date, endTime: Date, description: string) {
        this.company = company;
        this.startTime = startTime;
        this.endTime = endTime;
        this.description = description;
    }

}