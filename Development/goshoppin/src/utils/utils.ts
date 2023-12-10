import { DataController } from './data';

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

// Shopping List

let users = ['Michelle', 'Christian', 'Melanie'];

let listItem = {
  name: 'Hokkaido Kürbis',
  quantity: 6,
  responsibleUsers: [users[0]],
  isDone: false,
};

export let shoppingList = {
  title: 'Einkaufsliste 2',
  dateOfCreation: '2022-12-08',
  admin: [users[1]],
  listItems: [listItem],
};

let anotherListItem = {
  name: 'Creme Fraiche',
  quantity: 2,
  responsibleUsers: [users[1]],
  isDone: true,
};

shoppingList.listItems.push(anotherListItem);

let JSONshoppingList = JSON.stringify(shoppingList);
export const DataService = new DataController(JSONshoppingList);
