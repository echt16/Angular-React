import { Person } from "./person";
import { JobPlace } from "./job-place";
import { Experience } from "./experience";

export class ResumeServices {
    person: Person;
    constructor(person: Person) {
        this.person = person;
    }
    getJobPlaces(): JobPlace[] {
        return this.person.experience.jobPlaces;
    }

    getDescrJobPlace(jobPlace: JobPlace): string {
        return jobPlace.description;
    }

    getDescrOfExperience(): string {
        return this.person.experience.description;
    }
}