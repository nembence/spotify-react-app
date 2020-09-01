import React from "react";

const SearchBar = ({ name }) => {
    const placeholder = `Search ${name}...`;

    return (
        <div className="ui category search">
            <div className="ui icon input">
                <input
                    className="prompt"
                    type="text"
                    placeholder={placeholder}
                />
                <i className="search icon"></i>
            </div>
            <div className="results"></div>
        </div>
    );
};

export default SearchBar;
