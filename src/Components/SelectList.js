import React from 'react';
function ExtendList(props) {
    const value = props.value;
    return(
        <option value={value}>{value}</option>
    )
}
class SelectList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: this.props.list,
        }
    }
    render(){
        const list = this.state.list;
        const value = this.props.current
        let ListItem = list.map(el => {
           return <ExtendList key={el.toString()} value={el} />    
        })
        return(
        <label>
          Pick your favorite Money:
          <select value={value} onChange={this.props.handleChange}>
            <option value={value}>{value}</option>
            {ListItem}
          </select>
        </label>
        )
    }
}
export default SelectList;