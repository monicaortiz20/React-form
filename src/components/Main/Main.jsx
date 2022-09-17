import React, { Component } from "react";
import {Route, Routes} from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import NotFound from './NotFound';
import Work from './Work';

class Main extends Component {
  render() {
    return 
    <main>
      <Routes>
        <Route element = {<About/>} path={"/about"} />
        <Route element = {<Contact/>} path={"/contact"} />
        <Route element = {<Home/>} path={"/"} />
        <Route element = {<Work/>} path={"/work"} />
        <Route element = {<NotFound/>} path={"*"} />
      </Routes>

      </main>
  }
}

export default Main;
