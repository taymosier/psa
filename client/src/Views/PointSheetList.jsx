import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { PointSheetListSelect } from './PointSheetListSelect';

export class PointSheetList extends Component {
  constructor(props){
    super(props);
    this.state = {
      documentDates: '',
      selectedDocument: '',
      formatted: false
    };
    this.handleDocumentSelect = this.handleDocumentSelect.bind(this);
  }

//Once the component is mounted, calls a function which sends a request to the server to
// receive a list of the five most recent point sheets
  // componentDidMount(){
  //   this.getDocumentsByDate();
  // }

//Sends a fetch GET request, then updates the component state according
//to the data received
  getDocumentsByDate = () => {
    fetch('/initialDocLoad', {method: "GET"})
    .then(res => res.json())
    .then(dateList => this.setState({
      documentDates: dateList
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
    for(let i=0; i < this.state.documentDates; i++){
      documents.push(this.state.documentDates[i])
    }

//TODO only submit the request for a document when the user clicks the
//select button
    return(
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader toggle={this.props.toggle}>Point Sheets</ModalHeader>
        <ModalBody>
          {this.state.documentDates
            ? <PointSheetListSelect
                options={this.state.documentDates}
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
