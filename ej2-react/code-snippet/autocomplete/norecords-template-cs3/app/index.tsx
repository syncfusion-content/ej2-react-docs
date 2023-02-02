

// import DataManager related classes
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';


export default class App extends React.Component<{}, {}> {
  // bind the DataManager instance to dataSource property
  private customerData: DataManager = new DataManager({
    adaptor: new ODataV4Adaptor,
    crossDomain: true,
    url: 'https://services.odata.org/V4/Northwind/Northwind.svcs/'
  });
  // bind the Query instance to query property
  private query: Query = new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6);
  // maps the appropriate column to fields property
  private fields: object = { value: 'ContactName' };

  public render() {
    return (
      // specifies the tag for render the AutoComplete component
      <AutoCompleteComponent id="atcelement" query={this.query} actionFailureTemplate={this.template = this.template.bind(this)} dataSource={this.customerData} fields={this.fields} placeholder="Find a customer" />
    );
  }

  // set the value to action failure template
  private template(): JSX.Element {
    return (
      <span className='action-failure'> Data fetch get fails</span>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));


