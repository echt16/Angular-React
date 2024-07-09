import React from 'react';
import PetHeader from './PetHeader';
import PetProfile from './PetProfile';
import PetDetails from './PetDetails';
import PetGallery from './PetGallery';

const pet = {
    name: "Barry",
    breed: "Cocker Spaniel",
    age: 5,
    owner: "Owner",
    photos: [
        "photo1.jpg",
        "photo2.jpg",
        "photo3.jpg"
    ]
};

const Ex2 = () => {
    return (
        <>
            <PetHeader name={pet.name} />
            <PetProfile name={pet.name} breed={pet.breed} age={pet.age} />
            <PetDetails owner={pet.owner} />
            <PetGallery photos={pet.photos} />
        </>
    );
};

export default Ex2;
