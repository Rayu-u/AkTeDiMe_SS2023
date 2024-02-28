import { DataController } from './data';

export interface ListItem {
  name: string;
  quantity: number;
  responsibleUser: string;
  // isDone: boolean;
}
// Shopping List

let users = ['Michelle', 'Christian', 'Melanie'];

let listItem: ListItem = {
  name: 'Hokkaido Kürbis',
  quantity: 6,
  responsibleUser: users[0],
  // isDone: false,
};

export let shoppingList = {
  title: 'Einkaufsliste 2',
  dateOfCreation: '2022-12-08',
  admin: [users[1]],
  listItems: [listItem],
};

let anotherListItem: ListItem = {
  name: 'Creme Fraiche',
  quantity: 2,
  responsibleUser: users[1],
  // isDone: true,
};

shoppingList.listItems.push(anotherListItem);

let JSONshoppingList = JSON.stringify(shoppingList);
export const DataService = new DataController(JSONshoppingList);
