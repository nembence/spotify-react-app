import React from "react";
import { url } from "../../utilities/url";
import useFetch from "../../utilities/useFetch";
import CardItem from "../CardItem/CardItem";
import Loading from "../Loading/Loading";
import CardContainer from "../CardContainer/CardContainer";
import Error from "../Error/Error";

const Home = () => {
    const [status, error, fetchedData] = useFetch(url.new_releases, "release");

    console.log(fetchedData);

    const renderedCards = fetchedData.map((data) => (
        <CardItem
            artist={data.artist}
            img={data.images[0].url}
            title={data.name}
        />
    ));

    return (
        <div className="content ">
            {status === "error" && <Error error={error} />}
            {status === "loading" && <Loading />}
            {status === "loaded" && (
                <div className="ui stackable three column grid">
                    {renderedCards}
                </div>
            )}
        </div>
    );
};

export default Home;
