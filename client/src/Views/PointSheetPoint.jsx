import React, { Component } from 'react';
import { inventory } from '../alcohol';
import { PointSheetItem } from '../PointSheetItem';
import { PointSheetInventoryList } from './PointSheetInventoryList';
import { SearchFilter } from '../SearchFilter';
import { handleSearch } from '../search/searchFunction.js';
import { Button, Form } from 'reactstrap';

import '../styles/pointSheet.css';

// TODO LATER
// Add validation for inputs
// Round up input values to the nearest .1


export class PointSheetPoint extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      inventory: ''
    };
    this.handleSearch = handleSearch.bind(this);
    this.setPointSheet = this.setPointSheet.bind(this);
  }

  componentDidMount(){
    if(this.props.inventory){
      this.setState({
        inventory: this.props.inventory
      })
    }
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
    let inventoryCopy = this.state.inventory;
    if(search.length > 0){
      inventoryCopy = inventoryCopy.filter(function(product) {
        return product.name.toLowerCase().match( search );
      });
    }


    return(
      <div className="pointSheetContainer">
        <SearchFilter handleSearch={this.handleSearch}/>
        {this.state.inventory !== ''
          ? <Form className={'inventoryForm'}>
              <PointSheetInventoryList inventory={this.state.inventory} setPointSheet={this.setPointSheet}/>
            </Form>
          : null
        }
      </div>

    )
  }
}
