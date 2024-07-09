import React from 'react';

const PetProfile = ({ name, breed, age }) => {
  return (
    <div >
      <h2>Информация о питомце</h2>
      <p>Имя: {name}</p>
      <p>Порода: {breed}</p>
      <p>Возраст: {age} лет</p>
    </div>
  );
};

export default PetProfile;
