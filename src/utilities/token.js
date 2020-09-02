import { useState, useEffect } from "react";
import axios from "axios";
import url from "./url";

const token = {
    getToken: async function () {
        const response = await axios.get(url.token);
        const token = response.data.token;
        console.log(token);
        return token;
    },
};

export default token;
