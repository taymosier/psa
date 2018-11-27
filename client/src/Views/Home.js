import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PointSheetList } from './PointSheetListSelectView/PointSheetList';
import { PointSheet } from './PointSheet';
import { DefaultEmailList } from './PointSheetEmailModalView/DefaultEmailList';
import { Button } from 'reactstrap';
import {default_info} from '../defaults/default_info';
import {default_inv} from '../defaults/default_inventory';

import '../styles/home.css';



class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      defaultEmails: false,
      selectedDocument: '',
      data: '',
      dataLoaded: false
    };
    this.toggle = this.toggle.bind(this);
    this.toggleDefaultEmailsModal = this.toggleDefaultEmailsModal.bind(this);

    this.passSelectedDocument = this.passSelectedDocument.bind(this);
    this.getSelectedDocument = this.getSelectedDocument.bind(this);
    this.getNewPointSheet = this.getNewPointSheet.bind(this);
    this.clearData = this.clearData.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
    this.updateInventory = this.updateInventory.bind(this);
  }

  componentDidUpdate(){
    { this.state.selectedDocument !== '' && this.state.dataLoaded === false
      ? this.getSelectedDocument()
      : null
    }
  }

  getNewPointSheet(){
    this.setState({
      data: {
        info: default_info,
        inventory: default_inv,
      }
    });
  }

  getSelectedDocument = () => {
    let selectedDocument = this.state.selectedDocument;
    console.log('selectedDocument:')
    console.log(this.state.selectedDocument)
    fetch('/requestDocument', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify([selectedDocument])
    })
    .then((res) => res.json())
    .then(result => this.setState({
      data: result,
      dataLoaded: true,
    }))
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleDefaultEmailsModal() {
    this.setState({
      defaultEmails: !this.state.defaultEmails
    });
  }

  passSelectedDocument(selectedDocument){
    this.setState({
      selectedDocument: selectedDocument
    });
  }

  clearData(){
    this.setState({
      data: '',
      dataLoaded: false
    });
  }

  updateInfo(data){
    this.setState({
      data: {
        info: data
      }
    })
  }

  updateInventory(data){
    this.setState({
      data: {
        inventory: data
      }
    })
  }

  render() {
    return (
    <div className="App">
      {this.state.data !== ''
       ?<div><PointSheet className={"pointsheet"} data={this.state.data} clearData={this.clearData} updateInfo={this.updateInfo} updateInventory={this.updateInventory}/></div>
       :<div className={"homeOptionsView"}>
          <h1 className={"homeHeader"}>GCC Point Sheets</h1>
          <Button size="lg" className={"newPointSheetBtn"} onClick={this.getNewPointSheet}>
            New Point Sheet
          </Button>
          <Button
            className={"pointSheetListBtn"}
            size="lg"
            onClick={this.toggle}
          >
            Point Sheet List
          </Button>
          <PointSheetList
            className={"pointSheetList"}
            passSelectedDocument={this.passSelectedDocument}
            isOpen={this.state.modal}
            toggle={this.toggle}
          />
          <Button
            className={"defaultEmailsListBtn"}
            size="lg"
            onClick={this.toggleDefaultEmailsModal}
          >
            Add/Remove Default Emails
          </Button>
          <DefaultEmailList
            className={"defaultEmailsList"}
            isOpen={this.state.defaultEmails}
            toggle={this.toggleDefaultEmailsModal}
          />
        </div>
      }
    </div>
    );
  }
}
export default Home;
