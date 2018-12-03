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
      <div>This is the PSA component. Congratulations</div>
    </div>
    );
  }
}
export default Psa;
