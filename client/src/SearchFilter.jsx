import React, {Component} from 'react';
import { Col, Row, FormGroup, Label, Input} from 'reactstrap';

import './styles/pointSheet.css';


export class SearchFilter extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: this.props.search,
      handleSearch: this.props.handleSearch
    };
  }
  render(){
    return(
      <FormGroup className='searchFltCntr'>
        <Row>
          <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 10, offset: 1}}>
            <Input className='searchFlt' value={this.state.search} onChange={this.state.handleSearch} placeholder={"Search"}></Input>
          </Col>
        </Row>
      </FormGroup>
    );
  }
}
