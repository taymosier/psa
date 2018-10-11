import React, { Component } from 'react';
import { inventory } from '../alcohol';
import { PointSheetItem } from '../PointSheetItem';
import { SearchFilter } from '../SearchFilter';
import { handleSearch } from '../search/searchFunction.js';
import { Button, Form } from 'reactstrap';

export default class PointSheetNew extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
    };
    this.handleSearch = handleSearch.bind(this);
  }

  render(){
    const search = this.state.search;
    let inventoryCopy = inventory;
    if(search.length > 0){
      inventoryCopy = inventoryCopy.filter(function(product) {
        return product.name.toLowerCase().match( search );
      });
    }

    let inventoryList = inventoryCopy.map(item =>
      <PointSheetItem
        key={item.name}
        name={item.name}
        type={item.type}
        category={item.category}
      />
    )
    return(
      <div>
        <Form>
          <SearchFilter handleSearch={this.handleSearch}/>
          {inventoryList}
          <Button>Submit</Button>
        </Form>
      </div>

    )
  }
}
