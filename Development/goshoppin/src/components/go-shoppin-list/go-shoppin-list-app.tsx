import { Component, State, Listen, h} from '@stencil/core';
import { DataService, ListItem } from '../../utils/utils';


// import { JSONshoppingList } from '../../index.js';


@Component({
  tag: 'go-shoppin-list-app',
  styleUrls: ['./app-layout.css'],
  shadow: false
})

export class goShoppinListApp {
  /* 
  the shopping list component, upmost level of the whole component, delivered to the user
  */

  @State() listItems: ListItem[];
  @State() newListItem;
  
  @State() list;

  async componentWillLoad() {
    await DataService.getData().then(val  => this.list = val);
    this.listItems = this.list.listItems;
    // console.log(this.listItems);
  }
  
  @Listen('addListItem')
  addListItem(event) {
    // adds the item
    let newListItem: ListItem = { id: event.detail.id, name: event.detail.name, quantity: event.detail.quantity };
    this.listItems = [...this.listItems, newListItem];
  }

  @Listen('removeListItem')
  removeListItem(event) {
    // creates a new array with only elements which pass the test
    this.listItems = this.listItems.filter((listItem) => {
      return listItem.id != event.detail;
    });
  }

  @Listen('updateListItem')
  updateValue(event) {
    //in order for template to rerender
    const listItems = this.listItems.concat([]);

    let listItemToUpdate: ListItem = listItems.filter((item) => {
      return item.id == event.detail.id;
    })[0];

    listItemToUpdate.name = event.detail.name;
    listItemToUpdate.quantity = event.detail.quant;

    this.listItems = listItems;
  }

  render() {
    return (
      <div class="sl-theme-light">
        <div id="bounding-box">
          <item-adder class="stand-alone"></item-adder>
          <list-display class="stand-alone" incomingItems={this.listItems}></list-display>          
        </div>
      </div>
    );
  }
}

// following this tutorial: https://www.javascripttuts.com/creating-a-todo-application-using-stencil/