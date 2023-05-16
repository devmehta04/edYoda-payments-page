import React from "react";
import '../styles/styles.css'

function BannerHeader() {
    return (
        <div className="banner-header-main">
            <text className="banner-header-line1">Access curated courses worth</text>
            <text className="banner-header-line1">₹&nbsp; <span className="striked"> 18,500&nbsp;</span>&nbsp;at just&nbsp;<span className="colored">₹ 99&nbsp;</span> per year!</text>
        </div>
    )
}

export default BannerHeader;