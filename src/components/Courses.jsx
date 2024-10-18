import React from 'react';
import './Courses.css'; // Import the CSS file

const Courses = () => {
  const courseList = [
    {
      id: 1,
      name: 'Computer Science Engineering',
      description: 'Focuses on computing, programming, and software engineering.',
      duration: '4 Years',
      eligibility: '10+2 with PCM',
    },
    {
      id: 2,
      name: 'Information Technology Engineering',
      description: 'Deals with information systems, software, and data management.',
      duration: '4 Years',
      eligibility: '10+2 with PCM',
    },
    {
      id: 3,
      name: 'Electronics and Telecommunication Engineering',
      description: 'Covers electronics, circuits, and communication systems.',
      duration: '4 Years',
      eligibility: '10+2 with PCM',
    },
    // Add more courses as needed
  ];

  return (
    <div className="courses-container">
      <h1 className="title">Courses Offered</h1>
      <div className="course-list">
        {courseList.map(course => (
          <div key={course.id} className="course-card">
            <h2 className="course-name">{course.name}</h2>
            <p className="course-description">{course.description}</p>
            <p className="course-duration"><strong>Duration:</strong> {course.duration}</p>
            <p className="course-eligibility"><strong>Eligibility:</strong> {course.eligibility}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
