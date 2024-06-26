import { Person } from "./person";
import { JobPlace } from "./job-place";
import { Experience } from "./experience";
import { Skill } from "./skill";
import { person } from "./person-item";

export class ResumeServices {
    private person: Person;
    constructor() {
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

    getDescrOfSkill(skill:Skill) : string{
        return skill.description;
    }
}