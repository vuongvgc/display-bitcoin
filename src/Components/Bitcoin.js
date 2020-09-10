import React from 'react';
import './Bitcoin.css';
import logoBitcoin from  './bitcoin-logo.png';
import DetailItem from './DetailItem';
import SelectList from './SelectList';
class BitcoinPrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            dataCoin: '',
            type: "AUD"
        }
    }
    handleChange = (event) => {
        this.setState({
            type: event.target.value
        })
    }
    componentDidMount() {
        this.setState({
            loading: true,
        })
        fetch('https://blockchain.info/ticker')
            .then(Response => {
                if(Response.ok){
                   return Response.json()
                }else {
                    throw new Error("NETWORK RESPONSE ERROR")
                }
            })
            .then(data => {
                this.setState({dataCoin: data[this.state.type], loading:false})
            })
            .catch(error => {
                this.setState({error, loading: true})
                console.log(`some ${error}`)
            })
    }
    render() {
        const {loading, dataCoin, type} = this.state;
        const output = loading ? "Loading ....": "Successful";
        const listPrice = ['AUD', 'USD',"BRL", "CAD", "CHF", "CLP", "CNY", "DKK", "EUR"];
        return(
            <div>
                <img src={logoBitcoin} alt="Bitcoin logo"/>
                <div>{output}</div>
                <SelectList list={listPrice} current={type} handleChange={this.handleChange} />
                <DetailItem dataItem = {dataCoin} />
            </div>

        )       
    }
}
export default BitcoinPrice;
