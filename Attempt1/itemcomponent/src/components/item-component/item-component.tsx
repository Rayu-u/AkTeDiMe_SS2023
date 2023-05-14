import { Component, Prop, h } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';
// import internal from 'stream';

// import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
// import '@shoelace-style/shoelace/dist/components/input/input.js';


enum States {
  READ,
  EDITMODE,
}

@Component({
  tag: 'list-item',
  styleUrls: ['item-component.css',
  ],
  shadow: true,
})

export class ListItem {
  /**
   * The name and id of this item
   */
  // UNSURE: Do i even need to expose the name as a prop?
  @Prop({ mutable: true }) name: string;
  // id: number;
  
  // referencing the host element
  // @Element() element: HTMLElement;
  
  @Event({bubbles: true}) itemEdited: EventEmitter<ListItem>;

  currentState: States = States.EDITMODE;

  private onSubmitted(e: Event) {
    e.preventDefault();
    this.name = ((e.target as HTMLFormElement).firstChild as HTMLInputElement).value;
    this.currentState = States.READ;    
    return;
  }

  render() {
    if (this.currentState == States.READ) {
      return (
      <div id="item-container">
      <sl-icon-button name="bag-plus" label="Add to Basket"></sl-icon-button>
      <p>{this.name}</p>
    </div>
      );
    } 
    if (this.currentState == States.EDITMODE) {
      return (
        <div id="item-container">
          <sl-icon-button name="bag-plus" label="Add to Basket"></sl-icon-button>
            <form onSubmit={(e) => this.onSubmitted(e)}>
            <sl-input autocomplete="off" placeholder="type here..." size="small">hey</sl-input>
            </form>
        </div>
        );
      }
    // return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
