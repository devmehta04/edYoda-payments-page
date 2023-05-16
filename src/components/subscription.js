import React from "react";
import '../styles/styles.css'
import { buttonStyles, activeButtonStyles, tagStyle, uncheck, check } from '../data/styles'
import { useState } from "react";
import clock from '../assets/images/clockalert.png'
import razorpay from '../assets/images/badge-dark.png'

function Subscribe({ data }) {
    const [selected, isSelected] = useState(0);
    const [checked, isChecked] = useState(0);

    const handleClick = (buttonId) => {
        isSelected(buttonId)
        isChecked(buttonId)
    }

    const selectedButton = data.find((item) => {
        return item.id === selected + 1;
    })
    return (
        <>
            <div className=" subscribe-main">
                <div className="expired-main-main"> 
                    <button className="subscribe-expired">
                        <div className="expired-main"><text className="expired-main-text">Offer Expired</text></div>
                        <div className="radio-text-group">
                            <div className="expired-radio">
                                <div className="expired-radio-inner"></div>
                            </div>
                            <text className="subscription-month-text-expired">12 Months Subscription</text>
                        </div>
                    </button>
                </div>
                {
                    data.map((item, index) => (
                        <div className="subscribe-main">
                            <button
                                key={item.id}
                                className="subscribe-body"
                                style={selected === index ? { ...buttonStyles, ...activeButtonStyles } : buttonStyles}
                                defaultChecked={selected === item.id}
                                onClick={() => handleClick(index)}>
                                {item.hasTag && (
                                    <span style={tagStyle}> {item.tagText}</span>
                                )}
                                <div
                                    style={checked === index ? { ...uncheck, ...check } : uncheck}
                                    defaultChecked={checked === item.id}
                                    onClick={() => handleClick(index)}
                                    className="check">
                                </div>
                                <text className="subscription-month-text">{item.text}</text>
                                <div className="total-amount-main">
                                    <div className="total-amount-main-inner"><text style={{ color: '#3C4852', fontSize: '12px', justifyContent: 'flex-end' }}>Total&nbsp;</text>
                                        <text className="total-amount">₹&nbsp;{item.totalAmt}</text>
                                    </div>
                                    <text className="total-amount-month">₹&nbsp;{item.perMonth} <span className="per-month">/ mo</span></text>
                                </div>
                            </button>

                        </div>
                    ))}
                <hr />

            </div>
            <div className="subscription-fee-main">
                <text className="subscription-fee">Subscription Fee</text>

                <text className="subscription-fee-amount">₹ 18,500</text>
            </div>
            <div className="limited-main-main">
                <button className="limited-time-offer-main">
                    <div className="limited-time-offer-text">
                        <text>Limited Time Offer</text>
                        <div className="clock-text">
                            <img alt=' clock' className="clock-offer" src={clock} />
                            <text className="limited-time-offer-offer">Offer valid till 23 March, 2023</text>
                        </div>

                    </div>
                    <div className="discount-amount">

                        <text className="discount-amount-text">- {selectedButton && <text>{selectedButton.discountAmt}</text>}</text>
                    </div>
                </button>

            </div>
            <div className="inclusive">
                <text className="total-inclusive-of-taxes"><span className="total-inclusive">Total</span>(Incl. of 18% GST)</text>
                {selectedButton && <text className="inclusive-total-amount">₹ {selectedButton.totalAmt}</text>}
            </div>

            <div className="bottom-buttons">
                <button className="cancel-button">CANCEL</button>
                <button className="proceed-to-pay">PROCEED TO PAY</button>
            </div>
            <img className="razorpay" src={razorpay} />
        </>
    )
}

export default Subscribe