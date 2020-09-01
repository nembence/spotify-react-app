import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div id="sidebar" class="ui secondary vertical pointing menu">
            <Link to="/" class="item">
                New releases
            </Link>
            <Link to="/artist" class="active item">
                Artist
            </Link>
            <Link to="/track" class="item">
                Track
            </Link>
            <Link to="/album" class="item">
                Album
            </Link>
            <Link to="/playlist" class="item">
                Playlist
            </Link>
            <Link to="/favorite" class="item">
                Favorites
            </Link>
        </div>
    );
};

export default Navbar;
