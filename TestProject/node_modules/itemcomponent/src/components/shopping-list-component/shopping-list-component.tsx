import { Component, Host, h } from '@stencil/core';

// import the whole shoelace library. Might want to be substituted with all of the components which are actually being used later
// this is the only place where we import anything, since it represents the topmost element of the shopping list component.
// Its the bounding box.

import '@shoelace-style/shoelace/dist/shoelace.js';



@Component({
  tag: 'shopping-list-component',
  styleUrls: ['shopping-list-component.css'],
  shadow: true,
})
export class ShoppingListComponent {

  render() {
    return (
      <Host class="sl-theme-light">
        <list-item name=""></list-item>
        <sl-select label="Select one">
          <sl-option value="Hallo">Hallo</sl-option>
        </sl-select>
      </Host>
    );
  }

}
