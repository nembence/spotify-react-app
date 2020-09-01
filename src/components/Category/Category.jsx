import React from "react";
import SearchBar from "../SearchBar/SearchBar";
// import Loading from "../Loading/Loading";
import CardContainer from "../CardContainer/CardContainer";

const Category = ({ name }) => {
    return (
        <div className="content">
            <SearchBar name={name} />
            {/* <Loading /> */}
            <CardContainer></CardContainer>
        </div>
    );
};

export default Category;
