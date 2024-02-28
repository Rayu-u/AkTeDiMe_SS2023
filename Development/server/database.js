const mongoose = require ('mongoose');

const uri = "mongodb+srv://laurafabricius:jd9d6ICuil2UFuki@cluster0.cnqi4ry.mongodb.net/?retryWrites=true&w=majority";
// let shoppingListCollection;

let ShoppingList;
initialize();

async function initialize() {
  connect();

  //setting up the scheme. 
  const shoppingListSchema = new mongoose.Schema({
    title: String,
    dateOfCreation: String,
    listItems: [{ name: String, quantity: Number, responsibleUser: String }]
  })

  ShoppingList = mongoose.model("ShoppingList", shoppingListSchema);

  // const myList = new ShoppingList({
  //   title: "meine Liste",
  //   dateOfCreation: "24-10-1999",
  //   listItems: [{
  //     "name": "zucchini",
  //     "quantity": 3,
  //     "responsibleUser": "Laura"},
  //     {"name": "Glas Oliven",
  //     "quantity": 1,
  //     "responsibleUser": "Maria"},
  // ]
  // });

  
  // const anotherList = new ShoppingList({
  //   title: "coole Liste",
  //   dateOfCreation: "24-10-1999",
  //   listItems: [{
  //     "name": "paprika",
  //     "quantity": 3,
  //     "responsibleUser": "Laura"},
  //     {"name": "Käse",
  //     "quantity": 4,
  //     "responsibleUser": "Maria"},
  // ]
  // });

  // await myList.save();
  // await anotherList.save();
}


async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("connected to MongoDB");
  } catch (e) {
    console.error(e);
  }
}

async function createNewList(listName) {
  const list = new ShoppingList({
    title: listName,
    dateOfCreation: getCurrentDate(),
    listItems: []
  })
  return await list.save();
}

async function getList(id) {
  let list = await ShoppingList.find({_id: id});

  // await ShoppingList.deleteMany({});
  return list;
}

async function updateList(newListItems, listID) {
  await ShoppingList.findByIdAndUpdate(
    { _id: listID }, // Find the document based on a condition
    { $set: { listItems: newListItems } }, // Update the dateOfCreation field
    { new: true }); // Return the updated document
}

//Helper Functions

function getCurrentDate() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;
  return currentDate;
}

module.exports = {
  createNewList, 
  getList,
  updateList
};