import { Component, h} from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';
// import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/components/button/button.js';
// import { SlButton } from '@shoelace-style/shoelace';

@Component({
  tag: 'item-adder',
  styleUrls: ['./sl-light.css', './main-app-styles.css', './test-style.css'],
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
            <h3>Item hinzufügen:</h3>
            <form onSubmit={e => e.preventDefault()}>
                <sl-input class="input" label="Name" placeholder="Cheese"></sl-input>
                <sl-input label="Anzahl" type="number" placeholder="3"></sl-input>

                <sl-button onclick={e => this.onSubmission(e)} variant="default">
                <sl-icon slot="prefix" name="clipboard-plus"></sl-icon>
                Item hinzufügen
                </sl-button>
            </form>
        </div>
        );
    }
}