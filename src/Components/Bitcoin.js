import React from 'react';
import './Bitcoin.css';
import logoBitcoin from  './bitcoin-logo.png';
import DetailItem from './DetailItem';
class BitcoinPrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCoin: ''
        }
    }
    componentDidMount() {
        fetch('https://blockchain.info/ticker')
            .then(Response => Response.json())
            .then(data => {
                this.setState({dataCoin: data.USD})
            })
            .catch(Error => {
                console.log(`some ${Error}`)
            })
    }
    render() {
        const dataCoin = this.state.dataCoin;
        return(
            <div>
                <img src={logoBitcoin} alt="Bitcoin logo"/>
                <DetailItem dataItem = {dataCoin} />
            </div>

        )       
    }
}
export default BitcoinPrice;
