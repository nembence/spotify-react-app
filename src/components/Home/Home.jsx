import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../../utilities/url";
import useFetch from "../../utilities/useFetch";

const Home = () => {
    const [status, error, fetchedData] = useFetch(url.new_releases);

    return (
        <>
            <div className="content">Home</div>
        </>
    );
};

export default Home;
