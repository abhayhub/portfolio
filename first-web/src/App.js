import './App.css';
import logo from '../src/kk.jpg';

function App() {
  return (
    <div className="App">
      <div className="nav">
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      </div>
      <img className="photo" src={logo} alt="kk"/>
      <div className="about">
        <h1>About</h1>
        <h2>Hello, I am Krishn Kant Shukla.<br/>
        Doing my Bachelor in Computer Application.<br/>
        with specialization in Data Science<br/>
        from Babu Banarsi Das University.</h2>
      </div>

      <div className="project">
        <h1>Projects</h1>
        <ul>
          <li>Built web scraper in Python that got data from websites of campus groups then built an ETL.</li><br/>
          <li>Led the data ingestion efforts for our three person team<br/>
           which developed a real time tracker of campus events.</li><br/>
           <li>Creating software to recognize your face and face to open a door or as a password enabling mechanism</li>
        </ul>
      </div>
      
      <div className="Skills">
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
