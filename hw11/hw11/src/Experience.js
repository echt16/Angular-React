import React from 'react';

const Experience = ({ experience }) => {
  return (
    <div >
      <h2>Опыт работы</h2>
      <ul>
        {experience.map((job, index) => (
          <li key={index}>
            <h3>{job.position} в {job.company}</h3>
            <p>{job.years}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
