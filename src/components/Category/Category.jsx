import React from "react";
import SearchBar from "../SearchBar/SearchBar";
// import Loading from "../Loading/Loading";
import CardContainer from "../CardContainer/CardContainer";
import CardItem from "../CardItem/CardItem";

const Category = ({ name }) => {
    return (
        <div className="content">
            <SearchBar name={name} />
            {/* <Loading /> */}
            <CardContainer>
                <CardItem />
            </CardContainer>
        </div>
    );
};

export default Category;
