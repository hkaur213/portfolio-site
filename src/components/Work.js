import React from 'react';
import projectImage1 from '../images/projectImage1.png'; 
import projectImage2 from '../images/projectImage2.png';
import projectImage3 from '../images/projectImage3.png';
import projectImage4 from '../images/projectImage4.png';
import '../index.css';

const Work = () => {
  return (
    <div className="work-container">
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>Perfume Paradise</h3>
          <p>
            Currently developing **Perfume Paradise**, an e-commerce platform built with Ruby on Rails for perfume enthusiasts.<br />
            Implementing key e-commerce features, including product catalog, shopping cart, and user authentication for a seamless online shopping experience.<br />
            Focusing on a visually appealing design with responsive layouts to provide an engaging and accessible experience for users on all devices.
          </p>
          <img src={projectImage3} alt="Perfume Paradise Project" />
          <a href="https://github.com/hkaur213/Perfume_Paradise">Project Link</a>
        </li>

        <li>
          <h3>Paw Traits</h3>
          <p>
            Developed Paw Traits, a Rails-based application that uses the Dog CEO API to display various dog breeds and sub-breeds.<br />
            Designed interactive breed information pages and customized the UI for a user-friendly experience.<br />
            Enhanced the application with responsive design elements to optimize accessibility and engagement.
          </p>
          <img src={projectImage1} alt="Paw Traits Project" />
          <a href="https://github.com/hkaur213/Paw-Traits-Rails-Project">Project Link</a>
        </li>
        
        <li>
          <h3>Garden Review Community</h3>
          <p>
            Created a community platform for garden lovers, allowing users to share, edit, and review garden posts.<br />
            Built with HTML, CSS, JavaScript, and PHP, focusing on accessibility and cross-browser compatibility.<br />
            Integrated a user-friendly interface with secure access, encouraging active community engagement.
          </p>
          <img src={projectImage2} alt="Garden Review Project" />
          <a href="https://github.com/hkaur213/Project">Project Link</a>
        </li>
        
        <li>
          <h3>Online Learning Academy</h3>
          <p>
            Developed an online learning platform to offer educational resources and courses.<br />
            Built using HTML, CSS, JavaScript, and PHP, with features like course enrollment, progress tracking, and interactive quizzes.<br />
            Designed a user-friendly interface, providing students with a seamless experience to access and track their learning progress.
          </p>
          <img src={projectImage4} alt="Online Learning Academy Project" />
          <a href="https://github.com/hkaur213/Sunshine-Online-Academy">Project Link</a> 
        </li>
      </ul>
    </div>
  );
};

export default Work;
