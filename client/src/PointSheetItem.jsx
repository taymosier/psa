import React, { Component } from 'react';
import { Col, Row, FormGroup, Label, Input} from 'reactstrap';

export class PointSheetItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      quantity: {
        "issued": this.props.item['quantity']['issued'],
        "returned": this.props.item['quantity']['returned'],
      }
    };

    this.handleAmountIssuedChanged = this.handleAmountIssuedChanged.bind(this);
    this.handleAmountReturnedChanged = this.handleAmountReturnedChanged.bind(this);
    this.formatIssuedInputValue = this.formatIssuedInputValue.bind(this);
    this.formatReturnedInputValue = this.formatReturnedInputValue.bind(this);

  }

  handleAmountIssuedChanged(e){
    e.preventDefault();
    let formattedValue;
    let item = this;
    console.log(item)
    this.setState({
      "quantity": {
        "issued": e.target.value,
        "returned": this.state.quantity["returned"]
      }
    });
    this.props.handleItemChange(e, item, 'issued', this.state.name);
  }

  handleAmountReturnedChanged(e){
    e.preventDefault();
    console.log(e);
    let item = this;
    this.setState({
      "quantity": {
        "issued": this.state.quantity["issued"],
        "returned": e.target.value
      }
    });
    this.props.handleItemChange(e, item, 'returned', this.state.name);
  }

  formatIssuedInputValue(e){
    let formattedValue
    if(e.target.value.toString().length === 1 && e.target.value >= 1){
      console.log('formattign needed')
      formattedValue = e.target.value.toString() + '.0';
      formattedValue = parseFloat(formattedValue).toFixed(1);
      console.log(formattedValue)
      this.setState({
        quantity: {
          issued: formattedValue,
          returned: this.state.quantity['returned']
        }
      })
    }
  }

  formatReturnedInputValue(e){
    let formattedValue;
    if(e.target.value.toString().length === 1 && e.target.value >= 1){
      formattedValue = e.target.value.toString() + '.0';
      formattedValue = parseFloat(formattedValue).toFixed(1);
      this.setState({
        quantity: {
          issued: this.state.quantity['issued'],
          returned: formattedValue
        }
      })
    }
  }



  render(){
    var condensedName = this.state.name.replace(' ','');
    var amountIssued = condensedName+"Issued";
    var amountReturned = condensedName+"Returned";
    var labelClass = condensedName+"Label";

    return(
      <FormGroup >
        <Row>
          <Col className={"inventoryProductLabelCntr"}xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 5, offset: 0}}>
            <Label for={this.state.name} className={labelClass}>{this.state.name}</Label>
            <Col className={"productInventoryIssuedColumn"} xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 12, offset: 0}}>
              <Input
                type='number'
                name="issued"
                id={amountIssued}
                placeholder="issued"
                value={this.state.quantity.issued}
                onChange={this.handleAmountIssuedChanged}
                onBlur={this.formatIssuedInputValue}
              />
              <Input
                type='number'
                name='returned'
                id={amountReturned}
                placeholder="returned"
                value={this.state.quantity.returned}
                onChange={this.handleAmountReturnedChanged}
                onBlur={this.formatReturnedInputValue}

              />
            </Col>
          </Col>
        </Row>

      </FormGroup>
    );
  }
}
