import { Component, State, Listen, h} from '@stencil/core';
import { shoppingList } from './example-data.js'

@Component({
  tag: 'go-shoppin-list-app'
})

export class goShoppinListApp {
  /* 
  the shopping list component, upmost level of the whole component, delivered to the user
  */

  @State() listItems: any;
  @State() newListItem;

  componentWillLoad() {
    this.listItems = [{ id: 1, value: 2}];
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

    listItemToUpdate.value = event.detail.value;

    this.listItems = listItems;
  }

  updateNewListItem(newListItem) {
    this.listItems = [...this.listItems, { id: Date.now(), value: newListItem.value }];
  }

  render() {
    return (
      <div>
        <input onChange={e => this.updateNewListItem(e.target)}/>

        <ul>
          {this.listItems.map((item) => {
            return <list-item value={item.value} id={item.id}></list-item>
          })}
        </ul>
        
      </div>
    );
  }
}

// following this tutorial: https://www.javascripttuts.com/creating-a-todo-application-using-stencil/