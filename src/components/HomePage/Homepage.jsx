// import React, { useEffect, useState } from 'react';
import './homepage.css';
import Header from './../header/Header';
import Home from './../home/Home';
import About from './../about/About';
import Skills from './../skills/Skills';
import Services from './../services/Services';
import Qualification from './../qualification/Qualification';
// import Work from './../work/Work';
import Contact from './../contact/Contact';
import Footer from './../footer/Footer';
import ScrollUp from './../scrollup/ScrollUp';
// import List from './../../List';
// import Video from './../../Video';
// import VideoPlayer from './../../VideoPlayer';
// import Publication from './../Publication/Publication';
// import Videomain from './../Video/Videomain';
// import Pdf from './../Resources/Pdf';




const App = () => {
    
  return (
    <div>
      
    <Header />  

    <main className='main'>
      <Home />
      <About />
      <Qualification />
      <Skills />
      <Services />
      <Contact />
    </main>

    <Footer /> 
    <ScrollUp />
    </div>
  )
}

export default App;
