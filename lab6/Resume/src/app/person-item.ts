import { ContactDetails } from "./contact-details";
import { JobPlace } from "./job-place";
import { Person } from "./person";
import { Skill } from "./skill";

export const person: Person = {
    firstname: 'firstname',
    lastname: 'lastname',
    patronymic: null,
    skills: [
        new Skill('skill1', 'descr1'),
        new Skill('skill2', 'descr2'),
        new Skill('skill3', 'descr3')
    ],
    experience: {
        years: 4,
        jobPlaces: [
            new JobPlace('company1', new Date(2020, 2, 2), new Date(2022, 2, 2), 'descr job place'),
            new JobPlace('company2', new Date(2022, 2, 2), new Date(), 'descr job place 2')
        ],
        description: 'experience descr'
    },
    contactDetails: new ContactDetails('+380111111', 'email@gmail.com', 'city'),
    imageSrc: 'https://media1.thrillophilia.com/filestore/uwpz857lua13qmvub6um2v93dlrm_IMG%20Worlds%20%20of%20Adventure.jpg?w=400&dpr=2',
    birthday: new Date(2000, 9, 28)
}