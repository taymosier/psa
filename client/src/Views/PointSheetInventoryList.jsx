import React, {Component} from 'react';
import { default_inv } from  './default_inventory';
import { PointSheetItem } from '../PointSheetItem';
export class PointSheetInventoryList extends Component {
  constructor(props){
    super(props);
    this.state = {
      inventory: ''
    };

    this.handleItemChange = this.handleItemChange.bind(this);
  }

  componentDidMount(){
    if(this.props.inventory){
      this.setState({
        inventory: this.props.inventory
      })
    }
  }

  handleItemChange(e, item, inputField, name){
    e.preventDefault();
    let inventory = this.state.inventory;
    let index = item.state.index;
    try {
      let matchedItem = inventory.find(item => item.name === name);
      matchedItem["quantity"][`${inputField}`] = e.target.value
    } catch(e){
      console.log('Item not found')
      console.log(e)
    }

    // inventory[name]["quantity"][`${inputField}`] = e.target.value;
    this.setState({inventory})
    this.props.setPointSheet(inventory);
  }

  render(){
    // let inventoryCopy = inventory;
    let inventoryList = this.props.inventory.map(item =>
      // TODO Put PointSheetItems into PointSheetItemList component
      // Pass state of PointSheetItem Inputs into state of PointSheetItemList
      // Pass PointSheetItemList state to PointSheetNewComponent
      <PointSheetItem
        key={item.name}
        name={item.name}
        handleItemChange={this.handleItemChange}
        item={item}
      />
    )
    return(inventoryList);
  }
}
