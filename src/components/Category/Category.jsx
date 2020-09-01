import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Loading from "../Loading/Loading";

const Category = ({ name }) => {
    return (
        <div className="content">
            <SearchBar name={name} />
            <Loading />
        </div>
    );
};

export default Category;
