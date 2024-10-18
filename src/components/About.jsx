// src/components/About.jsx

import React from 'react';
import './About.css'; // Importing the CSS for styling

const About = () => {
  const collegeInfo = {
    name: 'Vivekanand Education Society’s Institute of Technology (VESIT)',
    address: 'Chembur, Mumbai, Maharashtra',
    established: 1984,
    courses: ['B.Tech', 'M.Tech', 'PhD'],
    description: `Vivekanand Education Society’s Institute of Technology (VESIT) is a premier institution dedicated to providing quality education in engineering and technology. Our mission is to foster innovation and excellence in students, preparing them for successful careers in their respective fields.`,
  };

  return (
    <div className="about-container">
      <h1 className="about-title">About {collegeInfo.name}</h1>
      <p className="established">Established: {collegeInfo.established}</p>
      <p className="location">Location: {collegeInfo.address}</p>
      <p className="description">{collegeInfo.description}</p> {/* Description section */}
      <h2 className="courses-title">Available Courses</h2>
      <ul className="courses-list">
        {collegeInfo.courses.map((course, index) => (
          <li key={index} className="course-item">{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
