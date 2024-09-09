import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import { Projects } from './pages/projects';
import WhatWeDo from './pages/whatwedo';
import About from './pages/about';
import News from './pages/news';
import ContactPage from './pages/contact-us';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='what-we-do' element={<WhatWeDo />} />
        <Route path='about' element={<About />} />
        <Route path='publications' element={<News />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
