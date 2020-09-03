import React, { useState, useEffect } from "react";
import { Search } from "semantic-ui-react";
import url from "../../utilities/url";
import { Header } from "semantic-ui-react";
import SearchHandler from "./SearchHandler";

const Category = ({ categoryType }) => {
    const [search, setSearch] = useState(false);
    const [urlString, setUrl] = useState("");

    const headerStyle = {
        marginBottom: "20px"
    };

    useEffect(() => {
        setSearch(false);
    }, []);

    const handleChange = event => {
        const searchString = event.target.value;
        if (searchString !== "") {
            setUrl(url.search + searchString + "&type=" + categoryType);
            setSearch(true);
        }
    };

    return (
        <div className='content'>
            <Search
                onSearchChange={handleChange}
                category={false}
                name={categoryType}
            />
            <Header style={headerStyle} as='h1'>
                Find your favorite {categoryType}
            </Header>
            {search === true && (
                <SearchHandler
                    urlString={urlString}
                    categoryType={categoryType}
                />
            )}
        </div>
    );
};

export default Category;
