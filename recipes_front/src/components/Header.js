import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Header.css";

function Header() {
    return (
            <div className = "title"> Recipes app 
                <nav>
                    <ul>
                        <li>
                            <Link to="/recipes">All recipes</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )

}

export default Header;

