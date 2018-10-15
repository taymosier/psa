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
    // let inventoryCopy = inventory;
    this.setState({
      search: this.state.search,
      inventory: inventory
    });
    this.props.handlePointChange(inventory)
  }

  // handleChange(e){
  //   // console.log(e.target.name)
  //   // console.log(e.target.value)
  //   let inventoryCopy = this.state.inventory;
  //   inventoryCopy[`${e.target.name}`] = e.target.value
  //   this.setState({inventoryCopy})
  //   console.log(this.state[`${e.target.name}`]);
  //   this.props.handleInputChange(this.state)
  // }

  render(){
    const search = this.state.search;
    let inventoryCopy = inventory;
    if(search.length > 0){
      inventoryCopy = inventoryCopy.filter(function(product) {
        return product.name.toLowerCase().match( search );
      });
    }


    return(
      <div>
        <SearchFilter handleSearch={this.handleSearch}/>
        <Form>
          <PointSheetInventoryList inventory={inventoryCopy} setPointSheet={this.setPointSheet}/>
        </Form>
      </div>

    )
  }
}
