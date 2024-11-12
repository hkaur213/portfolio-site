import React from 'react';
import profileImage from '../images/skills.png'; 

const Skills = () => {
  return (
    <div className="skills-page"> 
      <div className="skills-container">
        <h2>Skills</h2>
        <img src={profileImage} alt="Profile" className="profile-image" />
        
        <div className="skills-content">
          <p>
            I'm a full-stack developer with a diverse set of skills across both front-end and back-end technologies, allowing me to deliver complete, robust applications. Here’s a breakdown of some key skills:
          </p>
          
          <ul>
            <li>
              <strong>Front-End Development:</strong> Proficient in HTML, CSS, and JavaScript, with experience in modern frameworks like React and Vue.js to create responsive, interactive, and accessible user interfaces.
            </li>
            <li>
              <strong>Back-End Development:</strong> Experienced with Node.js, Express, and Ruby on Rails for building server-side logic and APIs. I’ve used these technologies in projects requiring secure, efficient, and scalable back-end solutions.
            </li>
            <li>
              <strong>Database Management:</strong> Skilled in SQL and NoSQL databases, including MySQL, PostgreSQL, and MongoDB, with experience in designing and optimizing database schemas for high performance.
            </li>
            <li>
              <strong>Version Control & Collaboration:</strong> Comfortable with Git and GitHub for version control and collaborating in Agile environments, including code reviews and pull request workflows.
            </li>
            <li>
              <strong>Other Tools & Technologies:</strong> Familiar with Docker for containerization, Jest and Cypress for testing, and CI/CD pipelines to streamline development and deployment processes.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
