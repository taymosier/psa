import React, { Component } from 'react';
import { Col, Row, FormGroup, Label, Input} from 'reactstrap';
import './styles/PointSheetItem.css'


export class PointSheetItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      type: this.props.type,
      category: this.props.category,
      index: this.props.index,
      "quantity": {
        "issued": '',
        "returned": '',
      }
    };

    this.handleAmountIssuedChanged = this.handleAmountIssuedChanged.bind(this);
    this.handleAmountReturnedChanged = this.handleAmountReturnedChanged.bind(this);
  }

  handleAmountIssuedChanged(e){
    e.preventDefault();
    console.log(e);
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
    console.log(item.state.name)
    this.setState({
      "quantity": {
        "issued": this.state.quantity["issued"],
        "returned": e.target.value
      }
    });
    this.props.handleItemChange(e, item, 'returned', this.state.name);
  }



  render(){
    var condensedName = this.state.name.replace(' ','');
    var amountIssued = condensedName+"Issued";
    var amountReturned = condensedName+"Returned";
    var labelClass = condensedName+"Label";

    return(
      <FormGroup>
        <Row>
          <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 3}} xs={{ size: 6, offset: 2}}>
            <Label for={this.state.name} className={labelClass}>{this.state.name}</Label>
            <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 9, offset: 9}}>
              <Input
                type='number'
                name="issued"
                id={amountIssued}
                placeholder="issued"
                value={this.state.issued}
                onChange={this.handleAmountIssuedChanged}
              />
            </Col>
            <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 9, offset: 9}}>
              <Input
                type='number'
                name='returned'
                id={amountReturned}
                placeholder="returned"
                value={this.state.returned}
                onChange={this.handleAmountReturnedChanged}
              />
            </Col>
          </Col>
        </Row>

      </FormGroup>
    );
  }
}
