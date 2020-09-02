import React from "react";
import { url } from "../../utilities/url";
import useFetch from "../../utilities/useFetch";
import CardItem from "../CardItem/CardItem";
import Loading from "../Loading/Loading";
import CardContainer from "../CardContainer/CardContainer";
import Error from "../Error/Error";

const Home = () => {
    const [status, error, fetchedData] = useFetch(url.new_releases, "release");

    return (
        <div>
            {status === "error" && <Error error={error} />}
            {status === "loading" && <Loading />}
            {status === "loaded" && (
                <CardContainer>
                    {fetchedData.map((data) => (
                        <CardItem
                            img={data.images[0].url}
                            header={data.artists[0].name}
                            footer={data.name}
                        />
                    ))}
                </CardContainer>
            )}
        </div>
    );
};

export default Home;
