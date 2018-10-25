import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { PointSheetNew } from './PointSheetNew';
import { PointSheetInput } from './PointSheetInput'
export default class PointSheet extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handlePointChange = this.handlePointChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);

    this.state = {
      activeTab: '1',
      info: '',
      inventory: ''
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleInputChange(data){
    this.setState({
      "info": data
    });
  }

  handlePointChange(data){
    this.setState({
      "inventory": data
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.sendList();
  }

  sendList = () => {
    let data = [this.state.info, this.state.inventory]
    fetch('./submitInventory', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => res.json())
  }

  handleSave = () => {
    let data = [this.state.info, this.state.inventory]
    fetch('./savePointsheet', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => res.json())
  }



  render(){
    return(
      <div className="pointSheet">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={this.state.activeTab}
              onClick={() => { this.toggle('1'); }}
            >
              Input
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
            className={this.state.activeTab}
            onClick={() => { this.toggle('2'); }}
            >
              Point
            </NavLink>
          </NavItem>
          <NavItem>
            <Button onClick={this.handleSave}>Save</Button>
          </NavItem>
          <NavItem>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </NavItem>
          <NavItem>
            <Link to={'./'}>
              <Button>
                 Home
              </Button>
            </Link>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <PointSheetInput handleInputChange={this.handleInputChange}/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <PointSheetNew handlePointChange={this.handlePointChange}/>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
    );
  }
}
