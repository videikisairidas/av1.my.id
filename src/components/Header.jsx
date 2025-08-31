import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <div id="Header">
      <div>
        <div className="b1">
          <div><h1>Airidas Videikis</h1></div>
          <div><h2>FullStack/Web Developer</h2></div>
        </div>
        <div className="b2">
          <a href="tel:+37062165966">&#9742; <div>+37062165966</div></a>
          <a href="tel:+447763036050">&#9742;<div>+447763036050</div></a>
          <a href="mailto:airidasvideikis@gmail.com">&#9993;<div>airidasvideikis@gmail.com</div></a>
        </div>
        <div className="b4">
              
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
        <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>Skills</NavLink>
        <a target="_blank" href="https://buymeacoffee.com/av1.my.id">Support Me</a>
      </nav>
      
    </div>
  )
}

export default Header;
