import { useState, useEffect } from "react";
import axios from "axios";
import token from "./token";

const useFetch = (url) => {
    const [status, setStatus] = useState("");
    const [fetchedData, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setStatus("loading");
        const accessToken = token.getToken();
        console.log(accessToken);
        axios
            .get(url, {
                headers: {
                    Authorization: "Bearer " + accessToken,
                },
            })
            .then((response) => {
                setData(response.data);
                setStatus("loaded");
            })
            .catch((error) => {
                console.log(error.response.status);
                setStatus("error");
                setError(error.response.data);
            });
    }, [url]);

    return [status, error, fetchedData];
};

export default useFetch;
