import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';


export class EmailAddModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      emailEntered: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    let newValue = e.target.value;
    console.log("New value: " + newValue);
    this.setState({
      emailEntered: newValue
    });
  }

  handleSubmit(){
    let email = this.state.emailEntered
    this.props.submitNewEmail(email)
  }

  render(){
    return(
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader toggle={this.props.toggle}>Default Emails</ModalHeader>
        <ModalBody>
          <Input
            type="email"
            className={"newEmailInput"}
            placeholder={"Enter new email here"}
            onChange={this.handleChange}
          >
          </Input>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleSubmit}>Submit New Email</Button>{' '}
          <Button onClick={this.props.toggleAddEmailModal}>Cancel</Button>{' '}
        </ModalFooter>
      </Modal>
    )
  }
}
