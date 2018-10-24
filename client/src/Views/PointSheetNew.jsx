import React, { Component } from 'react';
import { inventory } from '../alcohol';
import { PointSheetItem } from '../PointSheetItem';
import { PointSheetInventoryList } from './PointSheetInventoryList';
import { SearchFilter } from '../SearchFilter';
import { handleSearch } from '../search/searchFunction.js';
import { Button, Form } from 'reactstrap';

//TODO
//Send form data from express server to python script
//Email form to designated address

// TODO LATER
// Add validation for
// Add database support
// Round up input values to the nearest .1
// Split the inventory array into separate beer, wine, and liquor arrays
// --- can run separate loops when writing data into python file for the separate sections
//     on the actual spreadsheet


export class PointSheetNew extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      inventory: ''
    };
    this.handleSearch = handleSearch.bind(this);
    this.setPointSheet = this.setPointSheet.bind(this);
  }


  setPointSheet(inventory){
    this.setState({
      search: this.state.search,
      inventory: inventory
    });
    console.log('setPointSheet inventory:')
    console.log(this.state.inventory)
    this.props.handlePointChange(inventory)
  }

  render(){
    const search = this.state.search;
    let inventoryCopy = inventory;
    if(search.length > 0){
      inventoryCopy = inventoryCopy.filter(function(product) {
        return product.name.toLowerCase().match( search );
      });
    }


    return(
      <div className="pointSheetContainer">
        <SearchFilter handleSearch={this.handleSearch}/>
        <Form>
          <PointSheetInventoryList inventory={inventoryCopy} setPointSheet={this.setPointSheet}/>
        </Form>
      </div>

    )
  }
}
