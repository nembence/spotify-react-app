import React, { useState } from "react";
import { Input } from "semantic-ui-react";
import url from "../../utilities/url";
import { Header } from "semantic-ui-react";
import SearchHandler from "./SearchHandler";

const Category = ({ categoryType }) => {
    const [search, setSearch] = useState(false);
    const [urlString, setUrl] = useState("");
    const [category, setCategory] = useState("");

    const headerStyle = {
        marginBottom: "20px"
    };

    const handleChange = event => {
        setCategory(categoryType);
        const searchString = event.target.value;
        if (searchString !== "") {
            setUrl(url.search + searchString + "&type=" + categoryType);
            setSearch(true);
        }
    };

    return (
        <div className='content'>
            <Input
                onChange={handleChange}
                placeholder={"Search " + categoryType}
                size='big'
            />
            <Header style={headerStyle} as='h1'>
                Find your favorite {categoryType}
            </Header>
            {search === true && categoryType === category && (
                <SearchHandler
                    urlString={urlString}
                    categoryType={categoryType}
                />
            )}
        </div>
    );
};

export default Category;
