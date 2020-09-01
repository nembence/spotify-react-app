import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const Card = () => {
    return (
        <Card>
            <Image
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                wrapped
                ui={false}
            />
            <Card.Content>
                <Card.Header>nthng</Card.Header>
                <Card.Description>Artist</Card.Description>
            </Card.Content>
        </Card>
    );
};

export default Card;
