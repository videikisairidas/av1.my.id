import Card from '../pages/upcoming/card.jsx';
import React, { useState, useEffect } from 'react';

const data = [
  { 
    id: 1, 
    title: 'Project Alpha', 
    description: 'A cool project about AI.' 
  },
  { 
    id: 2, 
    title: 'Project Beta', 
    description: 'A web app for productivity.' 
  },
  { 
    id: 3, 
    title: 'Project Gamma', 
    description: 'A mobile-first design system.' 
  },
];
const UpcomingProjects = () => {

  return (
    <div className="main">
      <h1>Upcoming Projects</h1>

      <div className="upcoming-container">
        {data.map(item => (
          <Card key={item.id} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  )
}

export default UpcomingProjects;
