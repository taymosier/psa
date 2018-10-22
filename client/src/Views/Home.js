import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PointSheetList } from './PointSheetList';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col, Button } from 'reactstrap';

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
  }

  componentDidUpdate(){
    { (this.state.selectedDocument !== '' && this.state.dataLoaded === false)
      ? this.getSelectedDocument()
      : null
    }
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

  render() {
    return (
    <div className="App">
      <h1>Point Sheet Home</h1>
      <Link to={'./point'}>
        <Button variant="raised">
           New Point Sheet
        </Button>
      </Link>
      <Button variant="raised" onClick={this.toggle}>Point Sheet List</Button>
      <PointSheetList
        passSelectedDocument={this.passSelectedDocument}
        isOpen={this.state.modal}
        toggle={this.toggle}
      />
    </div>
    );
  }
}
export default Home;
