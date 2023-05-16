import React from "react";
import '../styles/styles.css'
import BannerHeader from "./banner-header";
import BannerList from "./banner-list";
import data from "../data/data";
import number from "../data/numbers";
import Card from "./card";

function Banner() {
    return (
        <div className="bottom">
            <div className="left-bottom">
                <BannerHeader />
                <BannerList data={data} />
            </div>
            <div className="left-bottom">
                <Card />

            </div>
        </div>
    )
}

export default Banner;