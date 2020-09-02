import { useState, useEffect } from "react";
import axios from "axios";
import token from "./token";

const useFetch = (url) => {
    const [status, setStatus] = useState("");
    const [fetchedData, setData] = useState([]);
    const [error, setError] = useState(null);
    const [accessToken, setToken] = useState("");

    useEffect(() => {
        setStatus("loading");
        token.getToken().then((data) => {
            fetchData(data);
        });
    }, [url]);

    const fetchData = (data) => {
        axios
            .get(url, {
                headers: {
                    Authorization: "Bearer " + data,
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
    };

    return [status, error, fetchedData];
};

export default useFetch;
