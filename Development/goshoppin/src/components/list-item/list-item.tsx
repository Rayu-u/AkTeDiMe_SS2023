import { Component, Prop, State, h } from '@stencil/core';
import { Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'list-item',
  styleUrl: 'list-item.css'
})
export class ListItem {

  @Event() removeListItem: EventEmitter;
  @Event() updateListItem: EventEmitter;

  @Prop() value: string;
  @Prop() identifier: number;
  @Prop() quantity: number;

  @State() isEditable = false;
  
  toggleEdition = () => {
    this.isEditable = !this.isEditable;
  };

  handleKeyDown = e => {
    if (e.code === "Enter") {
      let quant = e.target.parentElement.children[0].value;
      let name = e.target.parentElement.children[1].value;
      this.updateThisItem(quant, name);
      this.isEditable = false;
    }
  };

  saveChanges = e => {
    let quant = e.target.previousElementSibling.children[0].value;
    let name = e.target.previousElementSibling.children[1].value;
    this.updateThisItem(quant, name);
    this.isEditable = false;
  };

  removeThisItem = () => {
    this.removeListItem.emit(this.identifier);
  }

  updateThisItem(quant, name) {
    this.updateListItem.emit({quant: quant, name: name, id: this.identifier});
  }

  render() {
    let listItemTemplate;

    if (!this.isEditable) {

      listItemTemplate = <div>
        {this.quantity}x {this.value}
        <button onClick = {this.removeThisItem}>
          Entfernen
        </button>
        <button onClick = {this.toggleEdition}>
          Ändern
        </button>
      </div>
      // console.log(this.value);

    } else {

      listItemTemplate = <div>
        <form onKeyDown={this.handleKeyDown}>
          <input value={this.quantity}/>
          <input value={this.value}/>
        </form>
        <button onClick = {this.saveChanges}>
          Speichern
        </button>
      </div>
    }

    return (
      <div>
        {listItemTemplate}
      </div>
    );
  }

}

// following this tutorial: https://www.javascripttuts.com/creating-a-todo-application-using-stencil/