import React from "react";
import { Card, Image } from "semantic-ui-react";

const cardStyle = {
    margin: "10px",
    maxWidth: "300px",
};

const CardItem = ({ img, imageUrl, header, headerUrl, footer }) => {
    return (
        <Card style={cardStyle} className="column">
            <Image
                src={img}
                alt=""
                wrapped
                as="a"
                ui={false}
                href={imageUrl}
                target="_blank"
            />
            <Card.Content>
                <Card.Header>{header}</Card.Header>
                <Card.Description as="a" href={headerUrl} target="_blank">
                    {footer}
                </Card.Description>
            </Card.Content>
        </Card>
    );
};

export default CardItem;
