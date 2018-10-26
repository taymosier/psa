import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PointSheetList } from './PointSheetList';
import { PointSheet } from './PointSheet';
import { Button } from 'reactstrap';
import {default_info} from './default_info';
import {default_inv} from './default_inventory';



class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      selectedDocument: '',
      data: '',
      dataLoaded: false
    };
    this.toggle = this.toggle.bind(this);
    this.passSelectedDocument = this.passSelectedDocument.bind(this);
    this.getSelectedDocument = this.getSelectedDocument.bind(this);
    this.getNewPointSheet = this.getNewPointSheet.bind(this);
    this.clearData = this.clearData.bind(this);
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
        inventory: default_inv
      }
    });
  }

  getSelectedDocument = () => {
    let selectedDocument = this.state.selectedDocument;
    console.log(this.state.selectedDocument)
    fetch('./requestDocument', {
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

  render() {
    return (
    <div className="App">
      {this.state.data !== ''
       ?<div><PointSheet data={this.state.data} clearData={this.clearData}/></div>
       :<div>
          <h1>Point Sheet Home</h1>
          <Button onClick={this.getNewPointSheet}>
            New Point Sheet
          </Button>
          <Button variant="raised" onClick={this.toggle}>Point Sheet List</Button>
          <PointSheetList
            passSelectedDocument={this.passSelectedDocument}
            isOpen={this.state.modal}
            toggle={this.toggle}
          />
        </div>
      }
    </div>
    );
  }
}
export default Home;
