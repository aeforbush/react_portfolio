// this file is homebase for the app

import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Nav from './components/Nav';

function App() {
  return (
    <main>
    <Header />,
    <Projects />,
    <Skills />,
    <Contact />,
    <Nav />
    </main>
  );
}

export default App;
