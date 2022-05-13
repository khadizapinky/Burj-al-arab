import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {

  return (
    <div>
        <nav>
            <ul>
                <li>
                    <img className="logo"  alt=""/>
                </li>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                 <li>
                    <Link to="/book">Book</Link>
                </li>
            </ul>
        </nav>

    </div>
  )
}
