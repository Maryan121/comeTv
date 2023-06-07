import React from "react";
// import { FaFilm } from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
// import background from "../images/poster1.jpg"
// import {Routes,Route} from "react-router-dom"
// import { Home } from "../pages/home";
// import { SeriesPage } from "../pages/series";
// import { MoviesPage } from "../pages/movies";
import { Link } from "react-router-dom";
import "../css/header.css"

function Header(){
    return(
        <header >
            <div className="header">
                <h1> Come<span className="tv">Tv</span></h1>
                <nav>
                    <div className="navItems">
                       
                        <Link to="/" className="nav-links">home</Link> 
                        <Link to="/series" className="nav-links">Tv series</Link>
                        <Link to="/movies" className="nav-links">movie</Link>
                    </div>
                    <div className="searchSec">
                        <form >
                            <input placeholder="search any series or movie.."/>
                            <a href="#" className="searchLink"><AiOutlineSearch  className="searchIcon"/></a>
                        </form>
                        <a href="#" className="popular">popular</a>
                    </div>
                </nav>
            </div>
            
           
           
        </header>  
        
        
    )
}

export default Header;