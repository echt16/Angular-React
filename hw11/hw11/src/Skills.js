import React from 'react';

const Skills = ({ skills }) => {
    return (
        <div >
            <h2>Навыки</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
