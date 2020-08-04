import React, { useEffect } from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import './index.css';
import Ideas_Area from './Ideas_Area';
import Bussiness_Area from './Bussiness_Area';
import Achievements_Area from './Achievements_Area';
import Others_Area from './Others_Area';

function App(){

    const select_idea = () => {
        document.querySelector(".sub-navbar-select").classList.remove("sub-navbar-select");
        document.querySelector("#ideas").classList.add("sub-navbar-select");
    }

    const select_bussiness = () => {
        document.querySelector(".sub-navbar-select").classList.remove("sub-navbar-select");
        document.querySelector("#bussiness").classList.add("sub-navbar-select");
    }

    const select_achievements = () => {
        document.querySelector(".sub-navbar-select").classList.remove("sub-navbar-select");
        document.querySelector("#achievements").classList.add("sub-navbar-select");
    }

    const select_others = () => {
        document.querySelector(".sub-navbar-select").classList.remove("sub-navbar-select");
        document.querySelector("#others").classList.add("sub-navbar-select");
    }

    useEffect(() =>{
        document.querySelector("#ideas").classList.add("sub-navbar-select");
    })

    return (
    <BrowserRouter>
    <div>
        {/* Replace this nav element with <Navbar />  */}
        <nav className="navbar">
            This is Navbar
        </nav>
        {/* ----------------------------------------- */}
        <nav className="sub-navbar">
            <span className="area-title" id ="ideas" onClick={select_idea}><Link to="/ideas" >Ideas</Link></span>
            <span className="area-title" id ="bussiness" onClick={select_bussiness}><Link to="/bussiness" >Bussiness</Link></span>
            <span className="area-title" id ="achievements" onClick={select_achievements}><Link to="/achievements">Achievements</Link></span>
            <span className="area-title" id ="others" onClick={select_others}><Link to="/others" >Others</Link></span>
        </nav>
        <Route  path="/ideas" render={() => (<Ideas_Area />)} />
        <Route  path="/bussiness" render={() => (<Bussiness_Area />)} />
        <Route  path="/achievements" render={() => (<Achievements_Area />)} />
        <Route  path="/others" render={() => (<Others_Area />)} />
    </div>
    </BrowserRouter>
  );
}

export default App;
