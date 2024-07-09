import React from 'react';
import Header from './Header';
import Profile from './Profile';
import Experience from './Experience';
import Skills from './Skills';
import ContactInfo from './ContactInfo';
import Ex2 from './Ex2'

const user = {
  name: "Albert Ivanov",
  phone: "+38085254863",
  email: "ivanov@gmail.com",
  city: "Krywyj Rih",
  photo: "-",
  experience: [
    { company: "Компания А", position: "Разработчик", years: "2018-2020" },
    { company: "Компания Б", position: "Старший разработчик", years: "2020-2022" }
  ],
  skills: ["JavaScript", "React", "Node.js"]
};

const App = () => {
  return (
    <div className="App">
      <Header name={user.name} />
      <Profile photo={user.photo} />
      <ContactInfo phone={user.phone} email={user.email} city={user.city} />
      <Experience experience={user.experience} />
      <Skills skills={user.skills} />
      <hr />
      <Ex2 />
    </div>
  );
};

export default App;
