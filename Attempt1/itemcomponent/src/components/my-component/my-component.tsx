import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'list-item',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class ListItem {
  /**
   * The name
   */
  @Prop() name: string;

  render() {
    return (
    <div id="item-container">
      <sl-icon-button name="bag-plus" label="Add to Basket"></sl-icon-button>
      {/* <sl-input placeholder="type here...">hey</sl-input> */}
      <p>{this.name}</p>
    </div>
    );
    // return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
