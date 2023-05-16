import React from "react";
import CardHeader from "./card-header";
import number from "../data/numbers";
import buttons from "../data/buttons";
import Subscribe from "./subscription";
function Card() {
    return (
        <div className="card-main">
            <CardHeader data={number} />
            <Subscribe data={buttons} />
        </div>
    )
}

export default Card