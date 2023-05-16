import React from "react";
import '../styles/styles.css'

function CardHeader({ data }) {
    return (
        <div>


            <div className="card-header-1">
                {
                    data.map((item) => (
                        <div className="number-main" >
                            <div className="round"><text className="inner-text">{item.value}</text></div>
                            <text className="inner-text-value">{item.bottomText}</text>
                        </div>
                    ))}

            </div>
            <text className="subscription-header">Select your subscription plan</text>
        </div>
    )

}

export default CardHeader;