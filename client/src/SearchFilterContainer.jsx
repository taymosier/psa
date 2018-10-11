import React, { Component } from 'react';
import SearchFilter from './SearchFilter.jsx';

export default class SearchFilterContainer extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="filterCntr">
        <SearchFilter handleSearch={this.props.handleSearch}/>
      </div>
    );
  }
}
