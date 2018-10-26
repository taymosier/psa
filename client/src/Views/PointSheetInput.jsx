import React, { Component } from 'react';
import { Form } from 'reactstrap';
import { PointSheetInputItemFormGroup } from './PointSheetInputItemFormGroup';
import {default_info} from './default_info';

// TODO
// Add onChange handler for Cash Collected input


export class PointSheetInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      info: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.setNewValue = this.setNewValue.bind(this);
    this.generateFormGroups = this.generateFormGroups.bind(this);
    this.sortFields = this.sortFields.bind(this)
  }

  componentDidMount(){
    let infoCopy = this.props.info;
    infoCopy = this.sortFields(infoCopy)
    this.setState({
      info: infoCopy
    })
  }

  handleChange(state){
    let newState = state;
    this.props.handleInputChange(newState)
  }

  sortFields(info){
    let sortedFields = {
      "Event Number": '',
      "Event Date":"",
      "Bartenders":"",
      "Room":"",
      "Host":"",
      "Sales Tax":"",
      "Service Charge":"",
      "Cash Collected":"",
      "Call Liquor Price":"",
      "Premium Liquor Price":"",
      "Top Liquor Price":"",
      "Well Liquor Price":"",
      "Chardonnay Price":"",
      "Merlot Price":"",
      "Cabernet Sauvignon Price":"",
      "Pinot Grigio Price":"",
      "White Zinfandel Price":"",
      "Champagne Price":"",
      "Domestic Beer Price":"",
      "Import Beer Price":"",
    };
    let sortedKeys = Object.keys(sortedFields);
    sortedKeys.map(key => {
      sortedFields[key] = info[key]
      console.log(sortedFields[key])
    })
    console.log('\nsorted keys')
    console.log(sortedFields)
    return sortedFields
  }

  setNewValue(target){
    let name = target.name;
    let newValue = target.value;
    let infoCopy = this.state.info;

    infoCopy[`${name}`] = newValue;
    this.setState({
      info: infoCopy
    })
    this.props.handleInputChange(infoCopy);
  }

  generateFormGroups(keys){
    let formGroups = []
    let temp;
    let iterator = 0;
    keys.map(key => {
      temp = <PointSheetInputItemFormGroup name={`${key}`} src={`${iterator}`} value={this.state.info[`${key}`]} setNewValue={this.setNewValue} handleChange={this.handelChange} />
      formGroups.push(temp);
      iterator++;
    });
    return formGroups
  }

  render(){
    let info = this.state.info;
    let keyNames = Object.keys(info);
    let formGroups = this.generateFormGroups(keyNames)
    return(
      <Form>
        {formGroups}
      </Form>
    );
  }
}
