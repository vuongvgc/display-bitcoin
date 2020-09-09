import React from 'react';
import './Bitcoin.css';
import logoBitcoin from  './bitcoin-logo.png';
import DetailItem from './DetailItem';
class BitcoinPrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            dataCoin: ''
        }
    }
    componentDidMount() {
        this.setState({loading: true})
        fetch('https://blockchain.info/ticker')
            .then(Response => {
                if(Response.ok){
                   return Response.json()
                }else {
                    throw new Error("NETWORK RESPONSE ERROR")
                }
            })
            .then(data => {
                this.setState({dataCoin: data.USD, loading:false})
            })
            .catch(error => {
                this.setState({error, loading: true})
                console.log(`some ${error}`)
            })
    }
    render() {
        const {loading, dataCoin} = this.state;
        const output = loading ? "Loading ....": "Successful"
        return(
            <div>
                <img src={logoBitcoin} alt="Bitcoin logo"/>
                <div>{output}</div>
                <DetailItem dataItem = {dataCoin} />
            </div>

        )       
    }
}
export default BitcoinPrice;
