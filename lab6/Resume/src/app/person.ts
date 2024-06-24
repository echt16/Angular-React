import { Skill } from "./skill";
import { Experience } from "./experience";
import { ContactDetails } from "./contact-details";

export class Person {
    firstname: string;
    lastname: string;
    patronymic: string | null;
    skills: Skill[];
    experience: Experience;
    imageSrc: string;
    contactDetails: ContactDetails;
    birthday: Date;
    constructor(name: string, lastname: string, patr: string, skills: Skill[], experience: Experience, contactDetails: ContactDetails, imageSrc: string, birthday: Date) {
        this.firstname = name;
        this.lastname = lastname;
        this.patronymic = patr;
        this.skills = skills;
        this.experience = experience;
        this.contactDetails = contactDetails;
        this.imageSrc = imageSrc;
        this.birthday = birthday;
    }
}