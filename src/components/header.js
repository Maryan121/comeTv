import React from "react";
// import { FaFilm } from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import background from "../images/poster1.jpg"
import "../css/header.css"

function Header(){
    return(
        <header >
            <div className="header">
                <h1> Come<span className="tv">Tv</span></h1>
                <nav>
                    <div className="navItems">
                        <a href="#" className="nav-links">home</a>
                        <a href="#" className="nav-links">TV series</a>
                        <a href="#" className="nav-links">movie</a>  
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