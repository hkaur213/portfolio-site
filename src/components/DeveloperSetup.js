import React from 'react';
import '../index.css';

const DeveloperSetup = () => {
  return (
    <div>
      <h2>Tool Setup for Web Development</h2>

      {/* Tool 1: Git */}
      <div className="tool-box">
        <h3>1. Version Control: Git</h3>
        <p>
          Git is a widely-used version control system that helps developers track changes in their codebase and collaborate with others effectively.<br/>
          Installation: Download and install Git from the official website.<br/>
          Configuration: Set up Git with your name and email address using the following commands:<br/>
          
          git config --global user.name "Harleen Kaur" <br/>
          git config --global user.email "hharleenkaur@academic.rrc.ca"
          
        </p>
      </div>

      {/* Tool 2: npm */}
      <div className="tool-box">
        <h3>2. Package Manager: npm (Node Package Manager)</h3>
        <p>
          npm is the default package manager for Node.js and is used to install, manage, and share JavaScript packages.<br/>
          Installation: npm comes bundled with Node.js. Download and install Node.js from the official website.<br/>
          Verify Installation: Open your terminal and run the following commands to check if npm is installed:<br/>
          
          node -v
          npm -v
          
        </p>
      </div>

      {/* Tool 3: Visual Studio Code */}
      <div className="tool-box">
        <h3>3. Integrated Development Environment (IDE): Visual Studio Code (VS Code)</h3>
        <p>
          Visual Studio Code is a lightweight yet powerful IDE that provides features like syntax highlighting, code completion, and debugging support.<br/>
          Installation: Download and install Visual Studio Code from the official website.<br/>
          Extensions: Enhance your coding experience by installing extensions such as "ESLint," "Prettier," "Debugger for Chrome," and more.<br/>
          Search for extensions within VS Code by clicking on the Extensions icon in the sidebar.
        </p>
      </div>
    </div>
  );
};

export default DeveloperSetup;
