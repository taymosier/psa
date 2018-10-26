import React, {Component} from 'react';
import { inventory } from '../alcohol';
import { default_inv } from  './default_inventory';
import { PointSheetItem } from '../PointSheetItem';
export class PointSheetInventoryList extends Component {
  constructor(props){
    super(props);
    this.state = {
      "inventory": this.props.inventory
    };

    this.handleItemChange = this.handleItemChange.bind(this);
  }

  handleItemChange(e, item, inputField, name){
    e.preventDefault();
    let inventory = this.state.inventory;
    console.log('Item:')
    console.log(item)
    console.log(inventory[0].quantity["issued"])
    console.log('e.target:')
    console.log(e.target)
    let index = item.state.index;
    console.log(inventory[0])
    inventory[index]["quantity"][`${inputField}`] = e.target.value;
    this.setState({inventory})
    this.props.setPointSheet(inventory);
  }

  render(){
    // let inventoryCopy = inventory;
    let inventoryList = this.state.inventory.map(item =>
      // TODO Put PointSheetItems into PointSheetItemList component
      // Pass state of PointSheetItem Inputs into state of PointSheetItemList
      // Pass PointSheetItemList state to PointSheetNewComponent
      <PointSheetItem
        key={item.name}
        index={item.index}
        name={item.name}
        type={item.type}
        category={item.category}
        handleItemChange={this.handleItemChange}
        item={item}
      />
    )
    return(inventoryList);
  }
}
