import { Component, Prop, h } from '@stencil/core';
import { ListItem } from '../../utils/utils';

@Component({
  tag: 'list-display',
  shadow: true,
})


// 
// zeigt die Liste der Items an. 
// TODO: Items werden ausgelesen
// 
export class ListDisplay {
  @Prop() incomingItems: Object[];
  private items: ListItem[];

  componentWillRender() {
   let objectString = JSON.stringify(this.incomingItems);
   this.items = JSON.parse(objectString);
  }

  render() {
    return (
      <div>
          <h3>Deine Liste:</h3>
          <div>
          {this.items.map((item) => {
            return <list-item value={item.name} identifier={item.id} quantity={item.quantity} user={item.responsibleUser}></list-item>
          })}
        </div>
      </div>
    )
  }
}
