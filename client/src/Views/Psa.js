import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PointSheetList } from './PointSheetListSelectView/PointSheetList';
import { PointSheet } from './PointSheet';
import { DefaultEmailList } from './PointSheetEmailModalView/DefaultEmailList';
import { Button } from 'reactstrap';
import {default_info} from '../defaults/default_info';
import {default_inv} from '../defaults/default_inventory';

import '../styles/home.css';



class Psa extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      defaultEmails: false,
      selectedDocument: '',
      data: '',
      dataLoaded: false
    };
  }

  render() {
    return (
    <div className="Psa">
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
