import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'list-title',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The title of the list
   */
  @Prop() title: string;

  render() {
    return <h1>{this.title}</h1>;
  }
}
