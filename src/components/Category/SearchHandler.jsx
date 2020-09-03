import React, { useEffect } from "react";
import useFetch from "../../utilities/useFetch";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import ArtistCard from "../Cards/ArtistCard/ArtistCard";
import AlbumCard from "../Cards/AbumCard/AlbumCard";
import PlaylistCard from "../Cards/PlaylistCard/PlaylistCard";
import TrackCard from "../Cards/TrackCard/TrackCard";
import { Divider } from "semantic-ui-react";

const SearchHandler = ({ urlString, categoryType }) => {
    const [status, error, fetchedData] = useFetch(urlString, categoryType);

    const dividerStlye = {
        maxWidth: "940px"
    };

    console.log(fetchedData);

    const renderedCard = data => {
        switch (categoryType) {
            case "artist":
                return <ArtistCard data={data} />;
            case "album":
                return <AlbumCard data={data} />;
            case "playlist":
                return <PlaylistCard data={data} />;
            case "track":
                return <TrackCard data={data} />;
            default:
                return <></>;
        }
    };

    return (
        <div>
            {status === "error" && <Error error={error} />}
            {status === "loading" && <Loading />}
            {status === "loaded" && (
                <div>
                    <Divider style={dividerStlye} horizontal>
                        {categoryType}
                    </Divider>
                    <div className='ui stackable three column grid'>
                        {fetchedData.map(data => renderedCard(data))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchHandler;
