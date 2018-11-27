import React, { Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { DefaultEmails } from './DefaultEmails';
import { EmailAddModal } from './EmailAddModal';


export class DefaultEmailList extends Component {
  constructor(props){
    super(props);
    this.state = {
      emails: '',
      selectedEmail: '',
      addEmail: false
    };
    this.emailSelected = this.emailSelected.bind(this)
    this.removeEmailFromList = this.removeEmailFromList.bind(this);
    this.toggleAddEmailModal = this.toggleAddEmailModal.bind(this);
    this.submitNewEmail = this.submitNewEmail.bind(this);
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
      emails: emails
    }))
  }

  emailSelected(selectedEmail){
    this.setState({
      selectedEmail: selectedEmail
    })
  }

  toggleAddEmailModal(){
    this.setState({
      addEmail: !this.state.addEmail
    })
  }

  removeEmailFromList(){
    let selectedEmail = this.state.selectedEmail;
    console.log('selectedEmail:')
    console.log(this.state.selectedEmail)
    fetch('./psa/deleteDefaultEmail', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify([selectedEmail])
    })
    .then((res) => res.json())
    .then(res => this.setState({
      selectedEmail: ''
    }, function(){
      console.log(res)
    })
    )
  }

  submitNewEmail(newEmail){
    console.log("You got mail!! " + newEmail)
    fetch('./psa/submitNewDefaultEmail', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify([newEmail])
    })
    .then((res) => res.json())
    .then(res => this.setState({
      addEmail: !this.state.addEmail
    }, function(){
      console.log("This is a callback bitch")
      console.log(res)
    })
    )
  }

  render(){
    return(
      <div>
        <Modal
          isOpen={this.props.isOpen}
          toggle={this.props.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggle}>Default Emails</ModalHeader>
          <ModalBody>
            {this.state.emails
              ? <DefaultEmails
                  passEmailToParentModal={this.emailSelected}
                  emails={this.state.emails}
                  dbKey={"_id"}
                />
              : null
            }
          </ModalBody>
          <ModalFooter>
            {this.state.selectedEmail
              ? <Button color="danger" onClick={this.removeEmailFromList}>Remove Email</Button>
              : null
            }
            {this.state.addEmail
              ? <EmailAddModal
                  isOpen={this.state.addEmail}
                  toggle={this.toggleAddEmailModal}
                  submitNewEmail={this.submitNewEmail}
                  className={"emailAddModal"}
                />
              : null
            }
            <Button color="primary" onClick={this.toggleAddEmailModal}>Add New Email</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
