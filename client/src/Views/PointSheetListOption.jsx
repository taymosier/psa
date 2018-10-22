import React, { Component } from 'react';

export default class PointSheetListOption extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: this.props.value
    };
  }

//Because the database may have not sent a response yet,
//The value for each PointSheetListOption is set once it receives
// updated props from its parent component
  componentDidUpdate(){
    { this.props.option === ''
      ? this.setState({
        value: this.props.option
      })
      : null
    }
  }


  render(){
    let value = this.props.value
    return(
        <option value={value}>{value}</option>
    )
  }
}
