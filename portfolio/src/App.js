import { useState } from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Project from "./component/Project";
import Contact from "./component/Contact";
function App() {

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Hero />
        <Project />
        <Contact />
      </main>
    </div>
  );
}

export default App;
