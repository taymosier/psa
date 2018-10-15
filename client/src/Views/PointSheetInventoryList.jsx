import React, {Component} from 'react';
import { inventory } from '../alcohol';
import { PointSheetItem } from '../PointSheetItem';
export class PointSheetInventoryList extends Component {
  constructor(props){
    super(props);
    this.state = {
      'inventory': [
        {
         'name': 'Aristocrat Vodka',
         'issued': '',
         'returned': ''
        },
        {
          'name': 'Smirnoff',
          'issued': '',
          'returned': ''
        },
        {
          'name': 'Absolut',
          'issued': '',
          'returned': ''
        },
        {
          'name': 'Ciroc',
          'issued': '',
          'returned': ''
        },
        {
          'name': 'Aristocrat Rum',
          'issued': '',
          'returned': ''
        },
        {
          'name': 'Bacardi',
          'issued': '',
          'returned': ''
        },
        {
          'name': 'Captain Morgan',
          'issued': '',
          'returned': ''
        },
        {
          'name': 'Aristocrat Gin',
          'issued': '',
          'returned': ''
        },
        {
          'name': 'Gordons',
          'issued': '',
          'returned': ''
        },
        {
          'name': 'Tanqueray',
          'issued': '',
          'returned': ''
        },
        {
          'name': 'Aristocrat Tequila',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Jose Cuervo Gold',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Patron',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Dewars',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Hennessy',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Jim Beam',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Jack Daniels',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Seagrams 7',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Crown Royal',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Amaretto',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Blue Curacao',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Peach Schnapps',
          'issued': '',
          'returned': ''
        },
        {
          'name': 'Triple Sec',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Fireball',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Johnnie Walker Black',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Jameson',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Grey Goose',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Bud Light',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Bud Light Platinum',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Bud Light with Lime',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Budweiser',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Coors Light',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Corona',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Heineken',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Michelob Ultra',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Miller Lite',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Natural Light',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Yuengling',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Chardonnay',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Merlot',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Cabernet Sauvignon',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Pinot Grigio',
          'issued': '',
          'returned': ''
        },
        { 'name': 'White Zinfandel',
          'issued': '',
          'returned': ''
        },
        { 'name': 'Champagne',
          'issued': '',
          'returned': ''
        }
      ]
    };

    this.handleItemChange = this.handleItemChange.bind(this);
  }

  handleItemChange(e, item, inputField){
    e.preventDefault();
    let inventory = this.state.inventory;
    inventory[item.state.index][`${inputField}`] = e.target.value;
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
        index={item.index}
        name={item.name}
        type={item.type}
        category={item.category}
        handleItemChange={this.handleItemChange}
      />
    )
    return(inventoryList);
  }
}
