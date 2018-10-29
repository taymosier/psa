import React, { Component } from 'react';
import {EmailInput} from './EmailInput';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

export class EmailModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.submitEmail = this.submitEmail.bind(this)
  }

  handleChange(value){
    this.setState({
      email: value
    });
  }

  submitEmail(){
    this.props.setParentComponentEmailState(this.state.email);
  }

  render(){
    return(
      <Modal isOpen={this.props.toggle} toggle={this.props.toggle} className={"emailModal"}>
        <ModalHeader toggle={this.props.toggle}>Recipient Email</ModalHeader>
        <ModalBody>
          <EmailInput handleChange={this.handleChange}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.submitEmail}>Select</Button>{' '}
          <Button color="secondary" onClick={this.props.closeModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
}
