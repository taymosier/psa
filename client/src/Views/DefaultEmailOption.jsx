import React, { Component } from 'react';

export class DefaultEmailOption extends Component {
  constructor(props){
    super(props);
    this.state = {
      "_id": this.props.item["_id"],
      "email": this.props.item["email"]
    }
  }
  render(){
    return(
      <option
        value={this.state[this.props.identifier]}
      >
        {this.state.email}
      </option>
    );
  }
}
