import React from 'react';

const PetDetails = ({ owner }) => {
  return (
    <div >
      <h2>Владелец</h2>
      <p>{owner}</p>
    </div>
  );
};

export default PetDetails;
