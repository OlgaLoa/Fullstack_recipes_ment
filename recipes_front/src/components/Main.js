import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Main.css";

function Main () {
   
    return (
        <div className = "categories">Hello! There are the sections of this application:
            <nav>
                <ul>
                    <li>
                        <Link to="/categories">Categories</Link>
                    </li>
                    <li>
                        <Link to="/recipes">Recipes</Link>
                    </li>
                </ul>
            </nav>
        </div> 
    );

}

export default Main;