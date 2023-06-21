import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'list-management-component',
  styleUrl: 'list-management-component.css',
  shadow: true,
})

// manages the shopping list, communicates with the database and registers the changes. Contains the list-items. 
export class ListManagementComponent {

  listItems: Array<HTMLElement> = [];

  constructor() {
    this.addItemToRender("Käse");
  }

  addItemToRender(someInfo: string) {
    this.listItems.push(<list-item name={someInfo}></list-item>);
  }

  render() {
    return (
      <Host>
        {this.listItems.map(item => item)}
      </Host>
    );
  }
}
