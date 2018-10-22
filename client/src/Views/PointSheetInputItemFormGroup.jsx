import React, { Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class PointSheetInputItemFormGroup extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      src: this.props.src,
      value: this.props.value
    };
    this.setValue = this.setValue.bind(this)
  }

formatLabels(name){
  let formattedName = name;

}

setValue(e){
  let newValue = e.target.value;
  this.setState({value: newValue})
  this.props.setNewValue(e.target);
}

  render(){
    return(
      <FormGroup>
        <Row>
          <Col xl="4" lg="4" md="4" sm={{ size: 6, offset: 1}} xs={{ size: 12, offset: 0}}>
            <Label>{this.state.name}</Label>
            <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 8}} xs={{ size: 7, offset: 5}}>
              <Input name={this.state.name} src="0" value={this.state.value} onChange={this.setValue} handleChange={this.handleChange} ></Input>
            </Col>
          </Col>
        </Row>
      </FormGroup>
    )
  }
}
