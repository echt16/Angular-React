import React from 'react';

const Profile = ({ photo }) => {
  return (
    <div >
      <img src={photo} alt="Profile" />
    </div>
  );
};

export default Profile;
