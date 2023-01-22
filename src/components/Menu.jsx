import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu () {
    return (
        <aside>
         <nav>
          <Link to="/home">Home</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/profile">Profile</Link>
         </nav>
        </aside>
    )
}
