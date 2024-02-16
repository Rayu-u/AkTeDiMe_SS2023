const mongoose = require ('mongoose');

const uri = "mongodb+srv://laurafabricius:jd9d6ICuil2UFuki@cluster0.cnqi4ry.mongodb.net/?retryWrites=true&w=majority";
// let shoppingListCollection;


initialize();

async function initialize() {
  connect();
  const shoppingListSchema = new mongoose.Schema({
    title: String,
    dateOfCreation: String,
    listItems: [{ name: String, quantity: Number, responsibleUser: String }]
  })

  const ShoppingList = mongoose.model("ShoppingList", shoppingListSchema);

  const myList = new ShoppingList({
    title: "meine Liste",
    dateOfCreation: "24-10-1999",
    listItems: [{
      "name": "zucchini",
      "quantity": 3,
      "responsibleUser": "Laura"},
      {"name": "Glas Oliven",
      "quantity": 1,
      "responsibleUser": "Maria"},
  ]
  });

  
  const anotherList = new ShoppingList({
    title: "coole Liste",
    dateOfCreation: "24-10-1999",
    listItems: [{
      "name": "paprika",
      "quantity": 3,
      "responsibleUser": "Laura"},
      {"name": "Käse",
      "quantity": 4,
      "responsibleUser": "Maria"},
  ]
  });

  await myList.save();
  await anotherList.save();

  console.log(await ShoppingList.find());
}


async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("connected to MongoDB");
  } catch (e) {
    console.error(e);
  }
}