import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import url from "../../utilities/url";
import useFetch from "../../utilities/useFetch";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import ArtistCard from "../Cards/ArtistCard/ArtistCard";
import AlbumCard from "../Cards/AbumCard/AlbumCard";
import PlaylistCard from "../Cards/PlaylistCard/PlaylistCard";
import TrackCard from "../Cards/TrackCard/TrackCard";
import { Header, Divider } from "semantic-ui-react";

const Category = ({ categoryType }) => {
    const searchString = "Muse";
    const urlString = url.search + searchString + "&type=" + categoryType;

    const [status, error, fetchedData] = useFetch(urlString, categoryType);

    console.log(fetchedData);

    const renderedCard = (data) => {
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

    const headerStyle = {
        marginBottom: "20px",
    };

    const dividerStlye = {
        maxWidth: "940px",
    };

    return (
        <div className="content">
            <SearchBar name={categoryType} />

            {status === "error" && <Error error={error} />}
            {status === "loading" && <Loading />}
            {status === "loaded" && (
                <div>
                    <Header style={headerStyle} as="h1">
                        Find your favorite {categoryType}
                    </Header>
                    <Divider style={dividerStlye} horizontal>
                        {categoryType}
                    </Divider>
                    <div className="ui stackable three column grid">
                        {fetchedData.map((data) => renderedCard(data))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Category;
