const projects1 = [
  {
    "title": "Lea Mattress",
    "link": "https://www.leamattress.co.uk/",
    "info": ["Prestashop", "Elementor"]
  }
]
const projects2 = [
  {
    "title": "airidasvideikis.me",
    "link": "https://airidasvideikis.me",
    "gitLink": "https://github.com/videikisairidas/airidasvideikis.me",
    "info": ["React&Vite"]
    
  },
  {
    "title": "Note Laravel",
    "link": "https://note-laravel.airidasvideikis.me/",
    "gitLink": "https://note-laravel.airidasvideikis.me/",
    "info": ["laravel", "Store-password"]
  }
]


function Section() {

  const handleClick = event => {
    event.currentTarget.classList.toggle('open');
  };

  const listprojects1 = projects1.map((project, i) => { 

    const info0 = project.info.map((info_row, j) => {
      return <div key={j}>{info_row}</div>
    });

    return <div key={i}>
      <a href={project.link }>
        <h3>{project.title }</h3>
        <div>
          <div className="info">{info0}</div>
        </div>
      </a>
    </div>
    
  });

  const listprojects2 = projects2.map((project, i) => { 

    const info0 = project.info.map((info_row, j) => {
      return <div key={j}>{info_row}</div>
    });

    return <div key={i}>
      <a href={project.gitLink}><i className="fab fa-github"></i></a>
      <a href={project.link }>
        <h3>{project.title }</h3>
        <div>
          <div className="info">{info0}</div>
        </div>
      </a>
    </div>

  });

  return (
    <div className="SectionList">

      <div id="" className="project1 open" onClick={handleClick}>
        <div><h3>Projects</h3> <i className="fas fa-caret-down"></i></div>
        <div id="p2_box">
          <div>
          {listprojects1}
          </div>
        </div>
      </div>

      <div id="" className="project2 open" onClick={handleClick}>
        <div><h3>Other Projects</h3> <i className="fas fa-caret-down"></i></div>
        <div id="p2_box">
          <div>
            {listprojects2}
          </div>
        </div>
      </div>

      <div id="skill" className="open" onClick={handleClick}>
        <div><h3>Skills</h3> <i className="fas fa-caret-down"></i></div>
        <div>
          <div>
            <div>Front-end</div>
            <div>Back-end</div>
            <div>HTML/HTML5</div>
            <div>SCSS/CSS</div>
            <div>Javascript</div>
            <div>Js libraries(Jquery, ...)</div>
            <div>Php</div>
            <div>Wordpress</div>
            <div>Laravel</div>
            <div>Databases(NoSql/MySql)</div>
            <div>Responsive design</div>
            <div>Git version control</div>
            <div>Testing/debugging</div>
            <div>Googling</div>
          </div>
          <div>
            <h4>Practicing & Learning</h4>
            <div>Front-end JS</div>
            <div>React</div>
            <div>Vue</div>
          </div>
        </div>
        
      </div>

      <div id="skill" className="personalskill" onClick={handleClick}>
        <div><h3>Personal skills</h3> <i className="fas fa-caret-down"></i></div>
        <div>
          <div>
            <div>Problem-solving</div>
            <div>Logic</div>
            <div>Good communication</div>
            <div>Fast learner</div>
            <div>Flexibidivty</div>
            <div>Motivation</div>
            <div>Curiosity</div>
            <div>Match</div>
            <div>Programming</div>
            <div>Teamwork</div>
            <div>Solo Worker</div>
          </div>
        </div>
      </div>

      <div id="skill" className="otherskill" onClick={handleClick}>
        <div><h3>Other skills & knowledge</h3> <i className="fas fa-caret-down"></i></div>
        <div>
          <div>
            <div>Python</div>
            <div>Linux & script</div>
            <div>Terminal</div>
            <div>PS & Ai</div>
            <div>Access DB</div>
            <div>Word</div>
            <div>Excel</div>
            <div>Computer</div>
            <div>VSC</div>
          </div>
        </div>
      </div>

      <div id="work" className="" onClick={handleClick}>
        <div><h3>Work Experience</h3> <i className="fas fa-caret-down"></i></div>
        <div>
          <div>
            <h3>Worked at Studio116</h3>
            <p>2019-2019</p>
            <div>
              <p>Wordpress developer in the digital company</p>
            </div>
          </div>
          <div>
            <h3>Freelancing</h3>
            <p>2019-...</p>
            <div>
              <p>Wordpress & web developer</p>
            </div>
          </div>
        </div>
      </div>

      <div id="edu" className="" onClick={handleClick}>
        <div><h3>Education</h3> <i className="fas fa-caret-down"></i></div>
        <div>
          <div>
            <h3>Vilnius College</h3>
            <p>(2022-2026)</p>
            <h4>Software engennering </h4>
          </div>
          <div>
            <h3>EDIBO BOOTCAMP</h3>
            <p>2020</p>
            <h4>Python</h4>
          </div>
        </div>
      </div>

      <div id="edu" className="" onClick={handleClick}>
        <div><h3>Languages</h3> <i className="fas fa-caret-down"></i></div>
        <div>
          <div>
            <h4>English</h4>
            <p>Professional</p>
            <div>
              <p></p>
            </div>
          </div>
          <div>
            <h4>Lithuania</h4>
            <p>Professional & Native</p>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Section

