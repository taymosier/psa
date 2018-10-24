import React, { Component } from 'react';
import { Form } from 'reactstrap';
import { PointSheetInputItemFormGroup } from './PointSheetInputItemFormGroup';

// TODO
// Add onChange handler for Cash Collected input


export class PointSheetInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      info: {
        eventNumber: "Ballers Bar",
        eventDate: "10/24/2018",
        bartenders: 'Taylor Mosier, Candice Overcash',
        room: "Exhibit Hall B",
        host: "n",
        salesTax: "7",
        serviceCharge: "21",
        cashCollected: "1400.00",
        callLiquorPrice: "6",
        premiumLiquorPrice: "7",
        topLiquorPrice: "9",
        wellLiquorPrice: "5",
        chardonnayPrice: "5",
        merlotPrice: "5",
        cabernetSauvignonPrice: "5",
        pinotGrigioPrice: "5",
        whiteZinfandelPrice: "5",
        champagnePrice: "5",
        domesticBeerPrice: "4",
        importBeerPrice: "5"
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.setNewValue = this.setNewValue.bind(this);
    this.generateFormGroups = this.generateFormGroups.bind(this);
  }

  handleChange(state){
    let newState = state;
    this.props.handleInputChange(newState)
  }

  setNewValue(target){
    let name = target.name;
    let newValue = target.value;
    let infoCopy = this.state.info;
    infoCopy[`${name}`] = newValue;
    this.setState({
      info: infoCopy
    })
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
    console.log(keyNames)
    return(
      <Form>
        {formGroups}
      </Form>
    );
  }
}
