import React from 'react';
import '../index.css';

const Resources = () => {
  return (
    <div className="resources-container">
      <h2>My Favorite Resources</h2>
      <div className="resource-list">
        <div className="resource-box">
          <a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">
            W3Schools: A Comprehensive Learning Hub
          </a>
          <p>
            W3Schools offers easy-to-follow tutorials on everything web-related, from basic HTML and CSS to more advanced JavaScript topics. It’s a fantastic starting point, and the hands-on examples and quizzes are great for testing your knowledge along the way.
          </p>
        </div>
        <div className="resource-box">
          <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">
            Stack Overflow: A Developer's Lifeline
          </a>
          <p>
            Stack Overflow is an invaluable resource for finding answers to challenging coding questions. Whether I’m troubleshooting an error or looking for best practices, the community's advice is incredibly helpful and can save hours of debugging.
          </p>
        </div>
        <div className="resource-box">
          <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">
            MDN Web Docs: Essential Reference
          </a>
          <p>
            MDN Web Docs is my go-to resource for in-depth documentation on HTML, CSS, and JavaScript. The examples are practical, and it’s incredibly helpful when I need to dive into details or explore specific features.
          </p>
        </div>
        <div className="resource-box">
          <a href="https://freecodecamp.org/" target="_blank" rel="noopener noreferrer">
            freeCodeCamp: Project-Based Learning
          </a>
          <p>
            freeCodeCamp provides interactive, project-based learning with a focus on real-world coding challenges. Their full-stack curriculum and guided projects help me keep up-to-date with industry standards while building my portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
