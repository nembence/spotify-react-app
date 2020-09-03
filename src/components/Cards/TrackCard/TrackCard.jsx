import React from "react";
import { Card, Image } from "semantic-ui-react";

const cardStyle = {
    margin: "10px",
    maxWidth: "300px",
};

const TrackCard = ({ data }) => {
    return (
        <Card style={cardStyle} className="column">
            <Image
                src={data.album.images[0].url}
                alt=""
                wrapped
                as="a"
                ui={false}
                href={data.external_urls.spotify}
                target="_blank"
            />
            <Card.Content>
                <Card.Header>{data.name}</Card.Header>
                <Card.Description
                    as="a"
                    href={data.external_urls.spotify}
                    target="_blank"
                >
                    {data.artists[0].name}
                </Card.Description>
            </Card.Content>
        </Card>
    );
};

export default TrackCard;
