import React from "react";
import '../styles/styles.css'
import styled from "styled-components";

const Highlight = styled.span`
  color: rgba(0, 150, 255, 1);

`;

const Suffix = styled.span`
color: rgba(0, 150, 255, 1);
`;

function BannerList({ data }) {
    return (
        <div>
            {data.map((item) => (
                <div className="common-text-image" key={item.id}>
                    <img className="text-image" src={item.image} />
                    <text className="title"><Highlight>{item.highlightedText} </Highlight>
                        {item.normalText}
                        <Suffix>&nbsp;{item.suffixText}</Suffix>
                    </text>

                </div>
            ))}
        </div>
    );
}

export default BannerList;
