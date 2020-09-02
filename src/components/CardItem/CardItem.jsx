import React from "react";
import { Card, Image } from "semantic-ui-react";

const CardItem = ({ img, header, footer }) => {
    return (
        <li>
            <Card>
                <Image src={img} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{header}</Card.Header>
                    <Card.Description>{footer}</Card.Description>
                </Card.Content>
            </Card>
        </li>
    );
};

export default CardItem;
