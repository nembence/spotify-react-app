import React from "react";
import { Card, Image } from "semantic-ui-react";

const cardStyle = {
    margin: "10px",
    maxWidth: "300px",
};

const ArtistCard = ({ data }) => {
    return (
        <Card style={cardStyle} className="column">
            <Image
            // src={data.images[0].url}
            // alt=""
            // wrapped
            // as="a"
            // ui={false}
            // href={data.external_urls.spotify}
            // target="_blank"
            />
            <Card.Content>
                <Card.Header>{data.name}</Card.Header>
                <Card.Description
                    as="a"
                    href={data.external_urls.spotify}
                    target="_blank"
                >
                    Followers: {data.followers.total}
                </Card.Description>
            </Card.Content>
        </Card>
    );
};

export default ArtistCard;
