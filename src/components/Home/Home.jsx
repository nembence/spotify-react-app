import React from "react";
import url from "../../utilities/url";
import useFetch from "../../utilities/useFetch";
import CardItem from "../CardItem/CardItem";
import CardContainer from "../CardContainer/CardContainer";

const Home = () => {
    const [status, error, fetchedData] = useFetch(url.new_releases);

    console.log(fetchedData);

    return (
        <div>
            {/* {status === "error" && <Error message={error} />}
            {status === "loading" && <Loading />} */}
            {status === "loaded" && (
                <CardContainer>
                    {fetchedData.map((data) => (
                        <CardItem
                            artist={data.artist}
                            img={data.images[0].url}
                            title={data.name}
                        />
                    ))}
                </CardContainer>
            )}
        </div>
    );
};

export default Home;
