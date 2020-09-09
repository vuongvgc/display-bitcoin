import React from 'react';
import './Bitcoin.css';
import logoBitcoin from  './bitcoin-logo.png';
class BitcoinPrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: ''
        }
    }
    componentDidMount() {

    }
    render() {
        return(
            <div>
                <img src={logoBitcoin} alt="Bitcoin logo"/>
            </div>

        )       
    }
}
export default BitcoinPrice;
