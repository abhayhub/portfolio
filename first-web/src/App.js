import './App.css';
import logo from '../src/removebg.png';
import hack from '../src/hacker.png';
import ninjas from '../src/code studio.png';

function App() {
  return (
    <div className="App">
      <div className="nav">
      <a class="active" href="#abt">About</a>
      <a href="#prj">Project</a>
      <a href="#achiv">Achivement</a>
      <a href="#skl">Skill</a>
      </div>
      <img className="photo"  src={logo}/>
      <div className="about" id="abt">
        <h1>About</h1>
        <h2>Hello, I am Abhay Kumar Tiwari<br/>
        Doing my Bachelor in Computer Application.<br/>
        with specialization in Data Science<br/>
        from Babu Banarsi Das University.</h2>
        <button className="btn">Hire me</button>
      </div>

      <div className="project" id="prj">
        <h1>Projects</h1>
        <ul>
          <li>Built web scraper in Python that got data from websites of campus groups then built an ETL.</li><br/>
          <li>Led the data ingestion efforts for our three person team<br/>
           which developed a real time tracker of campus events.</li><br/>
           <li>Creating software to recognize your face and face to open a door or as a password enabling mechanism</li>
        </ul>
      </div>

      <div className="Achivment" id="achiv">
        <h1>Achivement</h1>
        <img className="rank" src={hack}/>
        <img className="std" src={ninjas}/>


      </div>
      
      <div className="Skills" id="skl">
        <h1>Skill</h1>
      <p>React</p>
      <div class="container">
      <div class=" react">90%</div>
      </div>

      <p>JavaScript</p>
      <div class="container">
      <div class=" js ">80%</div>
     </div>

     <p>Nodejs</p>
      <div class="container">
      <div class=" node ">75%</div>
     </div>

     <p>C++</p>
      <div class="container">
      <div class="cpp ">90%</div>
     </div>

     <p>Python</p>
      <div class="container">
      <div class=" python">85%</div>
     </div>
      </div>

      <div className="copy">
      <h2> © CopyRight 2022 . All right Reserve @Abhay Tiwari</h2>
      <br/>
      </div>
    </div>
  );
}

export default App;
