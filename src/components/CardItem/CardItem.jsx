import React from "react";
import { Card, Image } from "semantic-ui-react";

const CardItem = ({ img, artist, title }) => {
    return (
        <li>
            <Card>
                <Image src={img} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{artist}</Card.Header>
                    <Card.Description>{title}</Card.Description>
                </Card.Content>
            </Card>
        </li>
    );
};

export default CardItem;
