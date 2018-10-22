import React, {Component} from 'react';
import { inventory } from '../alcohol';
import { PointSheetItem } from '../PointSheetItem';
export class PointSheetInventoryList extends Component {
  constructor(props){
    super(props);
    this.state = {
      "inventory": [
        {
          "name": "Aristocrat Vodka",
          "quantity": {
           "issued": "",
           "returned": ""
          }
        },
        {
          "name": "Smirnoff",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Absolut",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Ciroc",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Aristocrat Rum",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Bacardi",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Captain Morgan",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Aristocrat Gin",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Gordons",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Tanqueray",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Aristocrat Tequila",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Jose Cuervo Gold",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Patron",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Dewars",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Hennessy",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Jim Beam",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Jack Daniels",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Seagrams 7",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Crown Royal",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Amaretto",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Blue Curacao",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Peach Schnapps",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Triple Sec",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Fireball",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Johnnie Walker Black",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Jameson",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Grey Goose",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Bud Light",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Bud Light Platinum",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Bud Light with Lime",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Budweiser",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Coors Light",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Corona",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Heineken",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Michelob Ultra",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Miller Lite",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Natural Light",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Yuengling",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Chardonnay",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Merlot",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Cabernet Sauvignon",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Pint Grigio",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "White Zinfandel",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        },
        {
          "name": "Champagne",
          "quantity": {
             "issued": "",
             "returned": ""
          }
        }
      ]
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
