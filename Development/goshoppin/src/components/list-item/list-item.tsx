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
      this.updateThisItem(e.target.value);
      this.isEditable = false;
    }
  };

  saveChanges = e => {
      this.updateThisItem(e.target.previousElementSibling.value);
      this.isEditable = false;
  };

  removeThisItem = () => {
    this.removeListItem.emit(this.identifier);
  }

  updateThisItem(value) {
    this.updateListItem.emit({value: value, id: this.identifier});
  }

  render() {
    let listItemTemplate;

    if (!this.isEditable) {

      listItemTemplate = <div>
        {this.value}
        <button onClick = {this.removeThisItem}>
          Entfernen
        </button>
        <button onClick = {this.toggleEdition}>
          Ändern
        </button>
      </div>

    } else {

      listItemTemplate = <div>
        <input value={this.value} onKeyDown={this.handleKeyDown} />
        <button onClick = {this.saveChanges}>
          Speichern
        </button>
      </div>
    }

    return (
      <div onDblClick= {this.toggleEdition}>
        {listItemTemplate}
      </div>
    );
  }

}

// following this tutorial: https://www.javascripttuts.com/creating-a-todo-application-using-stencil/