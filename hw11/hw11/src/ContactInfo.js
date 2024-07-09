import React from 'react';

const ContactInfo = ({ phone, email, city }) => {
  return (
    <div className="contact-info">
      <p>Телефон: {phone}</p>
      <p>Email: {email}</p>
      <p>Город: {city}</p>
    </div>
  );
};

export default ContactInfo;
