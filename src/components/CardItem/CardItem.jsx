import React from "react";
import { Card, Image } from "semantic-ui-react";

const cardStyle = {
    margin: "10px",
    maxWidth: "300px",
};

const CardItem = ({ img, artist, title }) => {
    return (
        <Card style={cardStyle} className="column">
            <Image src={img} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{artist}</Card.Header>
                <Card.Description>{title}</Card.Description>
            </Card.Content>
        </Card>
    );
};

export default CardItem;
