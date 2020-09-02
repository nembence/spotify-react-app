import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import CardContainer from "../CardContainer/CardContainer";
import CardItem from "../CardItem/CardItem";
import { url, urlHandler } from "../../utilities/url";
import useFetch from "../../utilities/useFetch";

const Category = ({ categoryType }) => {
    const searchString = "Muse";
    const urlString = url.search + searchString + "&type=" + categoryType;

    return (
        <div className="content">
            <SearchBar name={categoryType} />
            <CardContainer>
                <CardItem />
            </CardContainer>
        </div>
    );
};

export default Category;
