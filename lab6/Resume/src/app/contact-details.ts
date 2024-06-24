export class ContactDetails {
    phoneNumber: string;
    email: string;
    city: string;
    constructor(phone: string, email: string, city: string) {
        this.phoneNumber = phone;
        this.email = email;
        this.city = city;
    }
}