import React from 'react';

const PetGallery = ({ photos }) => {
  return (
    <div >
      <h2>Фотогалерея</h2>
      <div >
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Бобик ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default PetGallery;
