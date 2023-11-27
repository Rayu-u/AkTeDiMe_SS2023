import { Component, State, Listen, h} from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'item-adder'
})

export class ItemAdder {
  /* 
  the component to add a new item to the list with
  */

    @Event() addListItem: EventEmitter;

    onSubmission(e: Event) {
        e.preventDefault;
        let name = (((e.target as HTMLElement).parentElement as HTMLFormElement).firstChild as HTMLInputElement).value;
        let quant = (((e.target as HTMLElement).parentElement as HTMLFormElement).children[1] as HTMLInputElement).value;
        let id = Date.now();
        this.addListItem.emit({id: id, name: name, quantity: quant});
    }
    render() {
        return (
        <div>
            <form onSubmit={e => e.preventDefault()}>
                <sl-input label="What item would you like to add to the list?" placeholder="Cheese"></sl-input>
                <sl-input label="How many?" type="number" placeholder="3"></sl-input>

                <sl-button onclick={e => this.onSubmission(e)} variant="default">
                <sl-icon slot="prefix" name="clipboard-plus"></sl-icon>
                Add item
                </sl-button>
            </form>

        </div>
        );
    }
}