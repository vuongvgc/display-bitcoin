import React from 'react';
import './DetailItem.css';

function detailItem(props) {
    const { buy, sell, symbol} = props.dataItem;
    return(
            <ul className="detail__item">
                <li>Buy:  {symbol}{buy}</li>
                <li>Sell: {symbol}{sell}</li>
            </ul>

    )
}
export default detailItem;