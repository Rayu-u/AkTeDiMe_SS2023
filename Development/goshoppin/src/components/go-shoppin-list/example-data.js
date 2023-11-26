users = ["Michelle", "Christian", "Melanie"];

listItem = {
  name: "Hokkaido Kürbis",
  quantity: 6,
  responsibleUsers: [users[0]],
  isDone: false
}

export let shoppingList = {
  title: "Einkaufsliste 2",
  dateOfCreation: "2022-12-08",
  admin: [users[1]],
  listItems: [listItem]
}

anotherListItem = {
  name: "Creme Fraiche",
  quantity: 2,
  responsibleUsers: [users[1]],
  isDone: true
}

shoppingList.listItems.push(anotherListItem);
