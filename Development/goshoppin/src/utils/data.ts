export class DataController {
  JSONString;

  constructor(JSONString) {
    this.JSONString = JSONString;
  }
  async getData() {
    // const response = await fetch('URL');
    // const json = await response.json();
    // console.log(response, json);
    // returns only the example data for now
    let exampleDataObject = JSON.parse(this.JSONString);
    // console.log('ex: ' + exampleData.title);
    return exampleDataObject;
  }
}
