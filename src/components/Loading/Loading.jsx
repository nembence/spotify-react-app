import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const Loading = () => {
    return (
        <div>
            <Loader size="large" active inline="centered">
                Loading...
            </Loader>
        </div>
    );
};

export default Loading;
