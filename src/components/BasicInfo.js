import React from 'react';
import profile from '../images/profile.jpg';
import '../index.css';

const BasicInformation = () => {
  return (
    <div className="basic-info-container">
       <img src={profile} alt="Profile" className="profile-image" />
      <h1>Full Stack Web Developer</h1>
      <h2>Software Engineer</h2>
      <div className="info-box">
        <p>Welcome to My Portfolio</p>
        <p>
          Hello! I'm Harleen Kaur, a passionate and innovative web developer with a strong background in full-stack development. I’m driven by a desire to create impactful and efficient solutions that make a difference for users. My journey in tech is grounded in a deep commitment to continuous learning and a love for solving complex problems.
        </p>
        <p>
          My expertise lies in both front-end and back-end development, where I strive to deliver seamless, responsive, and visually engaging applications. I enjoy working with a range of technologies, including React, Ruby on Rails, JavaScript, and SQL, and I am always expanding my skill set to keep pace with industry trends.
        </p>
        <p>
          Contact Me: Feel free to reach out at <a href="mailto:hardhillon2013@gmail.com">hardhillon2013@gmail.com</a>, or <a href="tel:your_phone_number">204 295 5932</a> to discuss potential projects or share ideas about the future of tech!
        </p>
      </div>
    </div>
  );
};

export default BasicInformation;
