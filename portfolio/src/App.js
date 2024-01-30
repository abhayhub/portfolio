import React from 'react'
import { useState } from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Skills from './component/Skills';
function App() {

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Hero />
        <Project />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
