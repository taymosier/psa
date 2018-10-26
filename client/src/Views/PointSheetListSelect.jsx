import React, { Component } from 'react';
import PointSheetListOption from './PointSheetListOption';

export class PointSheetListSelect extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      options: ''
    };
    this.handleOptionSelect = this.handleOptionSelect.bind(this)
  }

  //Sets the state once it receives updated props from its parent component
  componentDidUpdate(){
    if(this.state.options === ''){
      this.setState({
        options: this.props.options
      });
    }
  }

  handleOptionSelect(e){
    console.log('handleOptionSelect')
    e.preventDefault();
    console.log(e.target.value)
    this.setState({
      value: `${e.target.value}`
    })
    this.props.handleDocumentSelect(e.target.value)
  }

  render(){
    let options = [];
    {this.state.options
        ? this.state.options.map(item => {
          options.push(<PointSheetListOption value={item}/>)
        })
        : null
    }
    return(
      <select onChange={this.handleOptionSelect}>
      <option>Select Point Sheet</option>
        {options}
      </select>
    )
  }
}
