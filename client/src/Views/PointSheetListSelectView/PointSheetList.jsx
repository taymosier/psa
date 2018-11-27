import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { PointSheetListSelect } from './PointSheetListSelect';

export class PointSheetList extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: '',
      selectedDocument: '',
      formatted: false
    };
    this.handleDocumentSelect = this.handleDocumentSelect.bind(this);
  }

//Once the component is mounted, calls a function which sends a request to the server to
// receive a list of the five most recent point sheets
  componentDidMount(){
    this.getDocumentsByDate();
  }

//Sends a fetch GET request, then updates the component state according
//to the data received
  getDocumentsByDate = () => {
    fetch('/psa/initialDocLoad', {method: "GET"})
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
    .then(events => this.setState({
      events: events
    }))
  }

  handleDocumentSelect(documentTimeStamp){
    this.setState({
      selectedDocument: documentTimeStamp
    });
    this.props.passSelectedDocument(documentTimeStamp);
  }

  render(){
    let documents = [];
    for(let i=0; i < this.state.events; i++){
      documents.push(this.state.events[i])
    }

//TODO only submit the request for a document when the user clicks the
//select button
    return(
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader toggle={this.props.toggle}>Point Sheets</ModalHeader>
        <ModalBody>
          {this.state.events
            ? <PointSheetListSelect
                options={this.state.events}
                handleDocumentSelect={this.handleDocumentSelect}
              />
            : null
          }
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.toggle}>Select</Button>{' '}
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
}
