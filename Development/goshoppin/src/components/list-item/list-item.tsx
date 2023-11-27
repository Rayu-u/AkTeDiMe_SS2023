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
  @Prop() id: string;
  @Prop() quantity: string;

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

  removeThisItem = () => {
    this.removeListItem.emit(this.id);
  }

  updateThisItem(value) {
    this.updateListItem.emit({value: value, id: this.id});
  }

  render() {
    let listItemTemplate;

    if (!this.isEditable) {

      listItemTemplate = <div>
        {this.value}
        <button onClick = {this.removeThisItem}>
          X
        </button>
      </div>

    } else {

      listItemTemplate = <div>
        <input value={this.value} onKeyDown={this.handleKeyDown} />

      </div>
    }

    return (
      <li onDblClick= {this.toggleEdition}>
        {listItemTemplate};
      </li>
    );
  }

}

// following this tutorial: https://www.javascripttuts.com/creating-a-todo-application-using-stencil/