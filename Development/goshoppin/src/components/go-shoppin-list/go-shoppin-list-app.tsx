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
    // good place to load data in.
    // seems to just use normal js syntax for accessing rest APIs
    // https://www.youtube.com/watch?v=S6RaX7EKVjw&list=PL1t38ZFD37GocR8Ujv_PGE95okFjSs9N1&index=8&ab_channel=CodingLocker
    // fetch("URL")
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(parsedRes => {
    //     var identifier = parsedRes['identifier'];
    //     var goalcontent = identifier['identifier 2'];
    //   })
    // Tutorial end

    await DataService.getData().then(val  => this.list = val);
    this.listItems = this.list.listItems;
    // console.log(this.listItems);
  }
  
  @Listen('addListItem')
  addListItem(event) {
    // adds the item
    let newListItem: ListItem = { id: event.detail.id, name: event.detail.name, quantity: event.detail.quantity, responsibleUser: event.detail.user };
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
    listItemToUpdate.responsibleUser = event.detail.user;

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