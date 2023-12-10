import { Component, State, Listen, h} from '@stencil/core';


// import { shoppingList } from './example-data.js'


@Component({
  tag: 'go-shoppin-list-app',
  styleUrls: ['./app-layout.css'],
  shadow: false
})

export class goShoppinListApp {
  /* 
  the shopping list component, upmost level of the whole component, delivered to the user
  */

  @State() listItems: any;
  @State() newListItem;

  componentWillLoad() {
    this.listItems = [{ id: 1, name: "Brot", quantity: 3}];
  }l
  
  @Listen('addListItem')
  addListItem(event) {
    // adds the item
    this.listItems = [...this.listItems, { id: event.detail.id, name: event.detail.name, quantity: event.detail.quantity }];
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

    let listItemToUpdate = listItems.filter((item) => {
      return item.id == event.detail.id;
    })[0];

    listItemToUpdate.name = event.detail.name;

    this.listItems = listItems;
  }

  render() {
    return (
      <div id="bounding-box">
        <div class="sl-theme-light">
          <item-adder></item-adder>

          <ul>
            {this.listItems.map((item) => {
              return <list-item value={item.name} id={item.id} quantity={item.quantity}></list-item>
            })}
          </ul>
          
        </div>
      </div>
    );
  }
}

// following this tutorial: https://www.javascripttuts.com/creating-a-todo-application-using-stencil/