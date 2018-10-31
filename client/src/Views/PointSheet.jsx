import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { PointSheetPoint } from './PointSheetPoint';
import { PointSheetInput } from './PointSheetInput';
import { EmailModal } from './EmailModal'
import {default_info} from './default_info';
import {default_inv} from './default_inventory';

require('../styles/pointSheet.css')




export class PointSheet extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handlePointChange = this.handlePointChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleConfirmation = this.handleConfirmation.bind(this);
    this.setPointSheetEmailState = this.setPointSheetEmailState.bind(this)
    this.closeModal = this.closeModal.bind(this);
    this.onItemFocus = this.onItemFocus.bind(this);
    this.onItemBlur = this.onItemBlur.bind(this);

    this.state = {
      activeTab: '1',
      info: default_info,
      inventory: default_inv,
      "_id": this.props.data["_id"],
      date: this.props.data["date"],
      email: '',
      toggleEmailModal: false,
      itemFocused: false
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

  componentDidUpdate(){
    if(this.state.email !== ''){
      this.handleSubmit();
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  closeModal(){
    this.setState({
      toggleEmailModal: false
    })
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

  handleSubmit(){
    this.sendPointSheet();
  }

  sendPointSheet = () => {
    let data = [this.state.info, this.state.inventory, this.state.email]
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

  handleConfirmation(){
    this.setState({
      toggleEmailModal: !this.state.toggleEmailModal
    });
  }

  setPointSheetEmailState(value){
    this.setState({
      email: value,
      toggleEmailModal: false
    });
  }

  onItemFocus(){
    console.log('item focused')
    this.setState({
      itemFocused: true,
    });
  }

  onItemBlur(){
    console.log('item focused')
    this.setState({
      itemFocused: false,
    });
  }

  render(){
    return(
      <div className="pointSheet">
      { this.state.itemFocused
        ? null
        : <Nav className={"pointSheetNav"} tabs>
          <NavItem className={"deleteNavItem"}>
            <Button onClick={this.handleDelete}>Delete</Button>
          </NavItem>
          <NavItem className={"saveNavItem"}>
            <Button onClick={this.handleSave}>Save</Button>
          </NavItem>
          <NavItem className={"submitNavItem"}>
            <Button onClick={this.handleConfirmation}>Submit</Button>
          </NavItem >
          <NavItem className={"homeNavItem"}>
            <Link to={'./'}>
              <Button onClick={this.props.clearData}>
                 Home
              </Button>
            </Link>
          </NavItem>
          <NavItem className="inputNavLink">
            <NavLink
              className={this.state.activeTab}
              onClick={() => { this.toggle('1'); }}
            >
              Input
            </NavLink>
          </NavItem>
          <NavItem className="pointNavLink">
            <NavLink
            className={this.state.activeTab}
            onClick={() => { this.toggle('2'); }}
            >
              Point
            </NavLink>
          </NavItem>
        </Nav>
      }
        <EmailModal
          className={"emailModal"}
          toggle={this.state.toggleEmailModal}
          closeModal={this.closeModal}
          setParentComponentEmailState={this.setPointSheetEmailState}
        />
        <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <PointSheetInput
                handleInputChange={this.handleInputChange}
                info={this.props.data.info}
                setParentComponentEmailState={this.setPointSheetEmailState}
                onItemFocus={this.onItemFocus}
                onItemBlur={this.onItemBlur}
              />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <PointSheetPoint
              handlePointChange={this.handlePointChange}
              inventory={this.props.data.inventory}
              onItemFocus={this.onItemFocus}
              onItemBlur={this.onItemBlur}
              itemFocused={this.state.itemFocused}
              />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
    );
  }
}
