const db = require("./database.js");
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.listen(
  PORT,
  () => console.log(`its live on local host ${PORT}`)
)

// create a new list with the given name, return it or the id (TODO).
app.post('/createList', async (req, res) => {
  const listName = req.body.name;
  let newList = await db.createNewList(listName);
  res.send({message: "Successfully created List.", listKey: newList._id});
});

// returns a list with the given id (in body or through get, still TODO)
app.post('/getList', async (req, res) => {
  let list = await db.getList(req.body.listID); //maybe not find by title, but by id, depends!! Eventuell sogar über ein echtes get
  res.send({message: "request done", list: list}); //sends the list back
});

// needs to receive an id and check if one has been supplied, if not throw bad code (TODO), if yes, nice, go update the right list
app.post('/updateList', async (req, res) => {
  const updatedListItems = req.body.listItems;
  const listID = req.body.listID;
  await db.updateList(updatedListItems, listID);
  res.send({message: "list has been updated"});
});














// app.get('/shirt', (req, res) => {
//   res.status(200).send({
//     shirt: 'shirttt',
//     size: 'large'
//   })
// });

// app.post('/shirt/:id', (req, res) => {
//   const { id } = req.params;
//   const { logo } = req.body;

//   if (!logo) {
//     res.status(418).send({message: "we need a logo!"})
//   }

//   res.send({
//     shirt: `shirt with ur logo: ${logo} and id of ${id}`,
//   });
// });