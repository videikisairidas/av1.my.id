import { NavLink } from 'react-router-dom';
// import { setupThemeToggle } from '../assets/js/themeToggle.js';
import React, { useEffect, useRef } from 'react';



function Header() {
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!toggleRef.current) return;

    const themeIcon = toggleRef.current.querySelector('i');
    if (!themeIcon) return;

    const handleClick = () => {
      document.body.classList.toggle('dark-mode');

      const isDark = document.body.classList.contains('dark-mode');
      themeIcon.classList.toggle('fa-moon', !isDark);
      themeIcon.classList.toggle('fa-sun', isDark);
      localStorage.setItem('darkMode', isDark);
    };

    toggleRef.current.addEventListener('click', handleClick);

    // Apply saved preference
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }

    return () => {
      toggleRef.current.removeEventListener('click', handleClick);
    };
  }, []);


  return (
    <div id="Header">
      <div>
        <div className="headerTop">
          <div className="b1">
            <div><h1>Airidas Videikis</h1></div>
            <div><h2>FullStack/Web Developer</h2></div>
          </div>
          <div className="b2">
            <a href="tel:+37062165966">&#9742; <div>+37062165966</div></a>
            <a href="tel:+447763036050">&#9742;<div>+447763036050</div></a>
            <a href="mailto:airidasvideikis@gmail.com">&#9993;<div>airidasvideikis@gmail.com</div></a>
            <button id="themeToggle" ref={toggleRef}>
              <i className="fas fa-moon"></i>
            </button>
          </div>
  
        </div>
        

        <div className="menuIcon"> 
          <div className="b1"></div>
          <div></div>
          <div></div>
        </div>
        
        <nav id="nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Projects</NavLink>
          <NavLink to="/upcoming" className={({ isActive }) => (isActive ? 'active' : '')}>Upcoming</NavLink>
          <NavLink to="/background" className={({ isActive }) => (isActive ? 'active' : '')}>Background</NavLink>
          <a target="_blank" href="https://buymeacoffee.com/av1.my.id">Support Me</a>
        </nav>
      </div>
    </div>
  )
}

export default Header;
