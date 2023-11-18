users = ["jacky", "christian", "melanie"];

listItem = {
  name: "Hokkaido Kürbis",
  quantity: 6,
  responsibleUsers: [users[0]],
  isDone: false
}

shoppingList = {
  dateOfCreation: "2022-12-08",
  admin: 0,
  listItems: [listItem]
}

anotherListItem = {
  name: "Creme Fraiche",
  quantity: 2,
  responsibleUsers: [users[1]],
  isDone: true
}

shoppingList.listItems.push(anotherListItem);
