import { JobPlace } from "./job-place"
export class Experience {
    jobPlaces: JobPlace[];
    years: number;
    description: string;
    constructor(years: number, description: string, jobPlaces: JobPlace[]) {
        this.jobPlaces = new Array<JobPlace>();
        this.jobPlaces.push(...jobPlaces);
        this.years = years;
        this.description = description;
    }
}