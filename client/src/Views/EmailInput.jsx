import React, { Component } from 'react';
import { Input } from 'reactstrap';


export class EmailInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: ''
    }

    this.setValue = this.setValue.bind(this);
  }

  setValue(e){
    e.preventDefault()
    let newValue = e.target.value;
    this.setState({
      email: newValue
    })
    this.props.handleChange(newValue)
  }

  render(){
    return(
      <Input
        name={"emailAddressInput"}
        value={this.state.email}
        onChange={this.setValue}
        placeholder={"Or enter email manually"}
      ></Input>
    );
  }
}
