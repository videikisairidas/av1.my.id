
import shuffleArray from '../utils/shuffle.js';
import React, { useState, useEffect } from 'react';

import Card from '../pages/projects/card.jsx';

import projectData from '../data/projects.json';
import gameProjectData from '../data/game_projects.json';


const Projects = () => {
  const [shuffledItems, setShuffledItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  const [gameShuffledItems, setGameShuffledItems] = useState([]);
  const [gameVisibleCount, setGameVisibleCount] = useState(6);
  
  useEffect(() => {
    setShuffledItems(shuffleArray(projectData));
    setGameShuffledItems(shuffleArray(gameProjectData));
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3); // Load 3 more items per click
  };

  return (
    <div id="ProjectPage">
      <div>
        <h2>Projects</h2> 
        <div className="upcoming-container">
          {shuffledItems.slice(0, visibleCount).map(item => (
            <Card key={item.id} title={item.title} info={item.info} description={item.description}  />
          ))}
        </div>
        {visibleCount < shuffledItems.length && (
          <button onClick={handleLoadMore}>Load More</button>
        )}
      </div>
      <div>
        <h2>Games</h2>
        <div className="upcoming-container">

        </div>
      </div>
    </div>
  )
}

export default Projects;
