import React from "react";

const Navbar = () => {
    return (
        <nav class="ui secondary vertical pointing menu">
            <a class="item">New releases</a>
            <a class="active item">Artist</a>
            <a class="item">Track</a>
            <a class="item">Album</a>
            <a class="item">Playlist</a>
            <a class="item">Favorites</a>
        </nav>
    );
};

export default Navbar;
