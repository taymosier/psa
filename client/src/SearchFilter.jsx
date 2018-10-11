import React, {Component} from 'react';
import { Col, Row, FormGroup, Label, Input} from 'reactstrap';

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
          <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 5, offset: 3}}>
            <Label className='searchFltLabel'>Search</Label>
            <Col xl="4" lg="4" md="4" sm={{ size: 3, offset: 6}} xs={{ size: 12, offset: 6}}>
              <Input className='searchFlt' value={this.state.search} onChange={this.state.handleSearch}></Input>
            </Col>
          </Col>
        </Row>
      </FormGroup>
    );
  }
}
