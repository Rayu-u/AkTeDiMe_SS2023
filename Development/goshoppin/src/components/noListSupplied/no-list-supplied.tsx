import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { ListItem } from '../../utils/utils';

@Component({
  tag: 'no-list-supplied',
  styleUrls: ['./sl-light.css', './main-app-styles.css'],
  shadow: false
})

export class NoListSupplied {

  @Event() createList: EventEmitter;
  @Event() loadList: EventEmitter;


  onSubmission(e: Event) {
    e.preventDefault;
    let listTitle = (((e.target as HTMLElement).parentElement as HTMLFormElement).firstChild as HTMLInputElement).value;
    
    this.createList.emit({listTitle});
  }

  onKeyEntered(e: Event) {
    e.preventDefault;
    let listKey = (((e.target as HTMLElement).parentElement as HTMLFormElement).firstChild as HTMLInputElement).value;
    this.loadList.emit({listKey});
  }
  

  render() {
    return (
      <div>
         <h2>No Listkey supplied.</h2>
          <p>Enter one here: </p>
          <form onSubmit={e => e.preventDefault()}>
              <sl-input class="input" label="Name" placeholder="Key der Liste"></sl-input>

              <sl-button onclick={e => this.onKeyEntered(e)} variant="default">
              <sl-icon slot="prefix" name="clipboard-plus"></sl-icon>
              Liste öffnen
              </sl-button>
          </form>
          <p>or create a new list:</p>
          <form onSubmit={e => e.preventDefault()}>
              <sl-input class="input" label="Name" placeholder="Titel der Liste"></sl-input>

              <sl-button onclick={e => this.onSubmission(e)} variant="default">
              <sl-icon slot="prefix" name="clipboard-plus"></sl-icon>
              Neue Liste anlegen
              </sl-button>
          </form>
      </div>
    )
  }
}
