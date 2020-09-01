import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div id="sidebar" class="ui secondary vertical pointing menu">
            <NavLink activeClassName="active" exact to="/" className="item">
                New releases
            </NavLink>
            <NavLink activeClassName="active" to="/favorite" className="item">
                Favorites
            </NavLink>
            <div class="item">
                <p>Search by:</p>
                <div class="menu">
                    <NavLink
                        activeClassName="active"
                        to="/artist"
                        className="item"
                    >
                        Artist
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        to="/track"
                        className="item"
                    >
                        Track
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        to="/album"
                        className="item"
                    >
                        Album
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        to="/playlist"
                        className="item"
                    >
                        Playlist
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
