import { Component, Prop, h, Element} from '@stencil/core';
import { shoppingList } from './example-data.js'

@Component({
  tag: 'go-shoppin-list-app'
})

export class goShoppinListApp {
  /* 
  the shopping list component, upmost level of the whole component, delivered to the user
  */

  @Prop() userkey: string;
  
  // @Prop() listTitle: string;
  // @Prop() creationDate: string;
  // @Prop() admin: string;
  // @Prop() listItems: Array<Object>;
  // @Element() el!: HTMLElement;

  connectedCallback() {
    // let dataString: string = JSON.stringify(shoppingList);
    // let listObject = JSON.parse(dataString);
    // this.listTitle = listObject.title;
    // this.creationDate = listObject.dateOfCreation;
    // this.admin = listObject.admin;
    // this.listItems = listObject.listItems;

    // console.log(this.listTitle, this.creationDate, this.admin, this.listItems);
    console.log("test");
  }


  render() {
    return (
      <div>
        <h1>Hier steht der Listenname</h1>
        <p>Creation Date: 19.11.2023</p>
        <p>Admin: ""</p>
        <div>Container für List-items
          <go-shopping-list-items></go-shopping-list-items>
        </div>
      </div>
    )
  }
}

// TODO Liste, tutorial folgen. 
// svelte komponentenbasierte systeme, nie wieder react angular