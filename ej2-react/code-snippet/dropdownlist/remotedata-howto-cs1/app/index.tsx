{% raw %}



// import DataManager related classes
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
  // bind the DataManager instance to dataSource property
  private customerData: DataManager = new DataManager({
    adaptor: new ODataV4Adaptor,
    crossDomain: true,
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/'
  });
  private dropDownListObject: any;
  // bind the Query instance to query property
  private query: Query = new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6);
  // maps the appropriate column to fields property
  private fields: object = { text: 'ContactName', value: 'CustomerID' };
  // sort the resulted items
  private sortOrder: string = 'Ascending';
  constructor(props: any) {
    super(props);
    this.onclick = this.onclick.bind(this);
  }
  public onActionComplete(e: any) {
    // get total items count
    console.log("Total items count: " + e.result.length);
    const element: HTMLElement = document.createElement('p');
    element.innerText = "Total items count: " + e.result.length;
    (document.getElementById('event') as any).append(element);
  }
  public onclick() {
    // get items count using getItems method
    console.log("Total items count: " + this.dropDownListObject.listData.length);
    const element: HTMLElement = document.createElement('p');
    element.innerText = "Total items count: " + this.dropDownListObject.listData.length;
    (document.getElementById('event') as any).append(element);
  }
  public render() {
    return (
      // specifies the tag for render the DropDownList component
      <div>
        <DropDownListComponent ref={(scope) => { this.dropDownListObject = scope; }} id="ddlelement"
          query={this.query} dataSource={this.customerData}
          fields={this.fields} sortOrder={this.sortOrder} placeholder="Select a customer" actionComplete={this.onActionComplete} />
          <div id='event'/>
        <button id='btn' className="e-control e-btn" onClick={this.onclick}> Get items </button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));



{% endraw %}