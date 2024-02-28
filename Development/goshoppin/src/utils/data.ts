export class DataController {
  JSONString;

  constructor(JSONString) {
    this.JSONString = JSONString;
  }
  async getData(listID) {
    // if (listID == undefined) {
    //   return null;
    // }
    // from Postman:
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      listID: listID,
    });

    const requestOptions: RequestInit & { redirect?: 'follow' | 'error' | 'manual' } = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    let response;

    await fetch('http://localhost:8080/getList', requestOptions)
      .then(response => response.text())
      .then(result => (response = result))
      .catch(error => console.error(error));

    // console.log(response);
    let list = JSON.parse(response).list;
    return list;

    // const json = await response.json();
    // console.log(response, json);
    // returns only the example data for now
    // let exampleDataObject = JSON.parse(this.JSONString);
    // // console.log('ex: ' + exampleData.title);
    // return exampleDataObject;
  }

  async pushData(listItems, listID) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      listItems: listItems,
      listID: listID,
    });

    const requestOptions: RequestInit & { redirect?: 'follow' | 'error' | 'manual' } = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    await fetch('http://localhost:8080/updateList', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.error(error));
  }

  async createNewList(listTitle: string) {
    //returns the listKey
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      name: listTitle,
    });

    const requestOptions: RequestInit & { redirect?: 'follow' | 'error' | 'manual' } = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    let listKey;
    await fetch('http://localhost:8080/createList', requestOptions)
      .then(response => response.text())
      .then(result => (listKey = result))
      .catch(error => console.error(error));

    return listKey;
  }
}
