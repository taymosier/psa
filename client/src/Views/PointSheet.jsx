import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { PointSheetPoint } from './PointSheetPoint';
import { PointSheetInput } from './PointSheetInput';
import {default_info} from './default_info';
import {default_inv} from './default_inventory';


export class PointSheet extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handlePointChange = this.handlePointChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      activeTab: '1',
      info: default_info,
      inventory: default_inv,
      "_id": this.props.data["_id"],
      date: this.props.data["date"]
    };
  }

  componentDidMount(){
    if(this.props.data){
      console.log('Setting state')
      this.setState({
        info: this.props.data['info'],
        inventory: this.props.data['inventory']
      });
    }
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
    this.props.updateInfo(data);
  }

  handlePointChange(data){
    this.setState({
      "inventory": data
    })
    this.props.updateInventory(data);
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
    let data = [this.state.info, this.state.inventory, this.state["_id"], this.state.date]
    fetch('./savePointsheet', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => res.json())
  }

  handleDelete = () => {
    let data = [this.state["_id"]];
    console.log('ID being passed in delete request')
    console.log(data)
    fetch('./deletePointsheet', {
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
            <Button onClick={this.handleDelete}>Delete</Button>
          </NavItem>
          <NavItem>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </NavItem>
          <NavItem>
            <Link to={'./'}>
              <Button onClick={this.props.clearData}>
                 Home
              </Button>
            </Link>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <PointSheetInput handleInputChange={this.handleInputChange} info={this.props.data.info}/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <PointSheetPoint handlePointChange={this.handlePointChange} inventory={this.props.data.inventory}/>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
    );
  }
}
