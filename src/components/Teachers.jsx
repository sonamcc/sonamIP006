import React from 'react';
import './Teachers.css'; // Ensure you have a CSS file for styling

const Teachers = () => {
  const teacherList = [
    {
      id: 1,
      name: 'Mrs. Nipur Giri',
      subject: 'ADSA',
      department: 'Computer Science',
      experience: '10 years',
      photo: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Dr. Shalu Chopra',
      subject: 'Devops',
      department:'Information Technology',
      experience: '5 years',
      photo: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Prof. Rakhi jadhav',
      subject: 'Microprocessors and Computing devices.',
      department: ' Electronics',
      experience: '8 years',
      photo: 'https://via.placeholder.com/150',
    },
    // Add more teachers as needed
  ];

  return (
    <div className="background-container">
    <div className="teachers-container">
      <h1 className="title">Our Teachers</h1>
      <div className="teacher-list">
        {teacherList.map(teacher => (
          <div key={teacher.id} className="teacher-card">
            <img src={teacher.photo} alt={teacher.name} className="teacher-photo" />
            <h2 className="teacher-name">{teacher.name}</h2>
            <p className="teacher-subject"><strong>Subject:</strong> {teacher.subject}</p>
            <p className="teacher-department"><strong>Department:</strong> {teacher.department}</p>
            <p className="teacher-experience"><strong>Experience:</strong> {teacher.experience}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Teachers;
