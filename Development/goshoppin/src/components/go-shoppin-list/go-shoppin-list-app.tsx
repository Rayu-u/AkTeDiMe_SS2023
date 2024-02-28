import { Component, State, Listen, h, Prop} from '@stencil/core';
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

  @Prop() listKeyProp: string;
  @State() listKey: string;

  async componentWillLoad() {
    if ((this.listKey && this.listKeyProp) == undefined) {
      return;
    } else if (this.listKeyProp != undefined) {
      this.listKey = this.listKeyProp;
    }
    await DataService.getData(this.listKey).then(val  => this.list = val[0]);
    this.listItems = this.list.listItems;
  }

  async reloadList() {
    await DataService.getData(this.listKey).then(val  => this.listItems = val[0].listItems);
  }

  @Listen('createList')
  async createList(event) {
    let listTitle = event.detail.listTitle;
    this.listKey = await DataService.createNewList(listTitle);
    this.reloadList();
  }n
  
  @Listen('loadList')
  async loadListByKey(event) {
    this.listKey = event.detail;
  }

  @Listen('addListItem')
  async addListItem(event) {
    // adds the item
    let newListItem: ListItem = { name: event.detail.name, quantity: event.detail.quantity, responsibleUser: event.detail.user };
    // this.listItems = [...this.listItems, newListItem];
    await DataService.pushData([...this.listItems, newListItem], this.listKey);
    this.reloadList();
  }

  @Listen('removeListItem')
  async removeListItem(event) {
    // creates a new array with only elements which pass the test
    let newListItems = this.listItems.filter((listItem) => {
      return listItem.name.localeCompare(event.detail.value) != 0
    });

    await DataService.pushData(newListItems, this.listKey);
    console.log(newListItems);
    this.reloadList();
  }

  @Listen('updateListItem')
  async updateValue(event) {
    //in order for template to rerender
    const newListItems = this.listItems.concat([]);

    

    let listItemToUpdate: ListItem = newListItems.filter((item) => {
      return item.name.localeCompare(event.detail.name.old) == 0
    })[0];

    // console.log(listItemToUpdate);
    listItemToUpdate.name = event.detail.name.new;
    listItemToUpdate.quantity = event.detail.quant.new;
    listItemToUpdate.responsibleUser = event.detail.user.new;

    await DataService.pushData(newListItems, this.listKey);
    // console.log(newListItems);
    this.reloadList();
  }

  render() {
    if (this.listKey == undefined) {
      return (
        <div class="sl-theme-light">
          <div id="bounding-box">
            <no-list-supplied class="stand-alone"></no-list-supplied>
          </div>
        </div>
      );
    }
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