import { Component, Host, h } from '@stencil/core';

// import the whole shoelace library. Might want to be substituted with all of the components which are actually being used later
// this is the only place where we import anything, since it represents the topmost element of the shopping list component.
// Its the bounding box.

import '@shoelace-style/shoelace/dist/shoelace.js';

// this is the component for the whole list component. It is at the uppermost level and serves as the container of the cmp.


@Component({
  tag: 'shopping-list-component',
  styleUrls: ['shopping-list-component.css'],
  shadow: true,
})

export class ShoppingListComponent {

  render() {
    return (
      <Host class="sl-theme-light">
        <list-management-component></list-management-component>
      </Host>
    );
  }

}
