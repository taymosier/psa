import React, { Component } from 'react';
import {EmailInput} from './EmailInput';
import { DefaultEmails } from './DefaultEmails';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

export class EmailModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      emailList: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.emailSelected = this.emailSelected.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
  }

  handleChange(value){
    this.setState({
      email: value
    });
  }

  componentDidMount(){
    console.log('fetching default emails')
    fetch('/psa/getDefaultEmails', {method: "GET"})
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject({
          status: res.status,
            statusText: res.statusText
        })
      }
    })
    .catch(error => {
      if(error.status === 404){
        console.log(error)
      }
    })
    .then(emails => this.setState({
      emailList: emails
    }))
  }

  componentDidUpdate(){
    if(this.state.emails === '' && this.props.emails){
      this.setState({
        emails: this.props.emails
      })
    }
  }

  submitEmail(){
    this.props.setParentComponentEmailState(this.state.email);
  }

  emailSelected(selectedEmail){
    this.setState({
      email: selectedEmail
    })
  }

  render(){
    return(
      <Modal isOpen={this.props.toggle} toggle={this.props.toggle} className={"emailModal"}>
        <ModalHeader toggle={this.props.toggle}>Recipient Email</ModalHeader>
        <ModalBody>
          {this.state.emailList
            ? <DefaultEmails
                passEmailToParentModal={this.emailSelected}
                emails={this.state.emailList}
                dbKey={"email"}
              />
            : null
          }
          <EmailInput handleChange={this.handleChange}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.submitEmail}>Submit</Button>{' '}
          <Button color="secondary" onClick={this.props.closeModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
}
