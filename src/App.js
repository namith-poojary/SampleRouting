import React from 'react';

import './App.css';

import './Menu.css';

import About from './About';

import Menu from './Menu';

import Contact from './Contact';

import Home from './Home';

import Location from './location';
import Profile from './profile'
import { BrowserRouter, Route } from 'react-router-dom';



function App() {

  return (

    <BrowserRouter>

    

      <Menu />  

      <switch>

       <Route path="/" exact component={Home} />

       <Route path="/about" component={About} />

       <Route path="/contact" component={Contact} />

       <Route path="/profile" component={Profile} />
       <Route path="/location" component={Location} />

       </switch>

    

    </BrowserRouter>

  );

}


/*
const Home = () => {



  return (

     <div className="homestyle"> 

        <h2> This is the Home Page. </h2>

      </div>

    )



}*/



export default App;