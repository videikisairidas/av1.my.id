
import shuffleArray from '../utils/shuffle.js';
import React, { useState, useEffect } from 'react';

import Card from '../pages/projects/card.jsx';

import projectData from '../data/projects.json';
import gameProjectData from '../data/game_projects.json';


const Projects = () => {
  const [shuffledItems, setShuffledItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(2);

  const [gameShuffledItems, setGameShuffledItems] = useState([]);
  const [gameVisibleCount, setGameVisibleCount] = useState(6);
  
  useEffect(() => {
    setShuffledItems(shuffleArray(projectData));

    // update game projects, pin 1project to top
    const [firstGame, ...restGames] = gameProjectData;
    const shuffledRest = shuffleArray(restGames);
    setGameShuffledItems([firstGame, ...shuffledRest]);
  }, []);

  const handleLoadMore_projects = () => {
    setVisibleCount(prev => prev + 3); // Load 3 more items per click
  };

  const handleLoadMore_games = () => {
    setGameVisibleCount(prev => prev + 3); // Load 3 more items per click
  };

  return (
    <>
      <div className="containerProjectsHeader">
        <div>
          <h1>My Projects Portfolio</h1>
          <p>A showcase of my completed and ongoing development projects with detailed server status</p>
        </div>
      </div>
      <div id="ProjectPage" className='ProjectPage'>
        <h2>Projects</h2> 
        <div>
          
          <div className="projects-container">
            {shuffledItems.slice(0, visibleCount).map(item => (
              <Card key={item.id} data={item}  />
            ))}
          </div>
          {visibleCount < shuffledItems.length && (
            <button onClick={handleLoadMore_projects}>Load More</button>
          )}
        </div>
        <h2>Games</h2>
        <div>
          
          <div className="games-container">
            {gameShuffledItems.slice(0, gameVisibleCount).map(item => (
              <Card key={item.id} data={item} />
            ))}
            {visibleCount < shuffledItems.length && (
              <button onClick={handleLoadMore_games}>Load More</button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects;
