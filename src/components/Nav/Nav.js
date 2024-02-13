import { Collapse } from "bootstrap";
import React from "react";
import {
    Link
  } from "react-router-dom";


  
export default function Nav(prop){
    
    return(
        <header>
            <nav className="navbar">
                
                <div className="log">
                <Link to="/">
                    <img className="logo" src={prop.lg}  alt="Logo"/>
                </Link>
                <Link className="navbar-brand" to="/"> Speedtest </Link>
                </div>
                
                <button id="Hambur">
                    <img src={prop.Ham} alt="Ham" />
                </button>

                <ul> 
                    <li>
                        <Link className="about" to="/About">About</Link>
                    </li>
                    <li>
                        <a href="https://github.com/SumitSarkar969/Speed-Test">
                            <img className="gith" src={prop.sr} alt="Github_logo"></img>
                        </a>
                    </li>
                    

                </ul>
                
            </nav>

        </header>
    );
}