import React from 'react';

const Home = () => {
  const events = [
    { id: 1, title: 'Orientation Day', date: '25th October 2024' },
    { id: 2, title: 'Annual Sports Day', date: '15th November 2024' }
  ];

  const handleClick = (event) => {
    alert(`You clicked on ${event.title}`);
  };

  return (
    <div>
      <h1>Welcome to VESIT</h1>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.title} - {event.date} 
            <button onClick={() => handleClick(event)}>More Info</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
