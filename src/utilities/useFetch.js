import { useState, useEffect } from "react";
import axios from "axios";
import token from "./token";

const useFetch = (url, route) => {
    const [status, setStatus] = useState("");
    const [fetchedData, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setStatus("loading");
        token.getToken().then((data) => {
            fetchData(data);
        });
    }, []);

    const fetchData = (data) => {
        axios
            .get(url, {
                headers: {
                    Authorization: "Bearer " + data,
                },
            })
            .then((response) => {
                setStatus("loaded");
                setData(getObjectRoute(response));
            })
            .catch((error) => {
                setStatus("error");
                console.log(error.response.status);
                setError(error.response.data);
            });
    };

    const getObjectRoute = (response) => {
        switch (route) {
            case "release":
                return response.data.albums.items;
            default:
                return "error";
        }
    };

    return [status, error, fetchedData];
};

export default useFetch;
