import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import CardContainer from "../CardContainer/CardContainer";
import CardItem from "../CardItem/CardItem";

const Category = ({ name }) => {
    return (
        <div className="content">
            <SearchBar name={name} />
            <CardContainer>
                <CardItem />
            </CardContainer>
        </div>
    );
};

export default Category;
