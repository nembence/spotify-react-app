import React from "react";
import { Card, Image } from "semantic-ui-react";

const cardStyle = {
    margin: "10px",
    maxWidth: "300px",
};

const CardItem = ({ img, header, footer }) => {
    return (
            <Card style={cardStyle} className="column">
                <Image src={img} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{header}</Card.Header>
                    <Card.Description>{footer}</Card.Description>
                </Card.Content>
            </Card>
    );
};

export default CardItem;
