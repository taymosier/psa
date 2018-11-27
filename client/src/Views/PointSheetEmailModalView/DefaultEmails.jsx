import React, {Component } from "react";
import { DefaultEmailOption } from './DefaultEmailOption';


export class DefaultEmails extends Component {
  constructor(props){
    super(props);
    this.state = {
      emails: ''
    };
    this.emailOptionSelected = this.emailOptionSelected.bind(this)
  }

  componentDidUpdate(){
    if(this.state.emails === '' && this.props.emails){
      this.setState({
        emails: this.props.emails
      })
    }
  }

  emailOptionSelected(e){
    e.preventDefault();
    let selectedEmail = e.target.value
    console.log(e.target.value)
    this.setState({
      selectedEmail: selectedEmail
    });
    this.props.passEmailToParentModal(selectedEmail);
  }

  render(){
    let emailList = [];
    {this.state.emails
        ? this.state.emails.map(item => {
          emailList.push(
            <DefaultEmailOption
              item={item}
              key={item["_id"]}
              dbKey={this.props.dbKey}
            />
          )
        })
        : null
    }
    return(
      <select onChange={this.emailOptionSelected}>
        <option>Select Email From List</option>
        {emailList}
      </select>
    )
  }
}
