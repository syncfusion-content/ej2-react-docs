


import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { SortOrder } from '@syncfusion/ej2-lists';
import { DropDownListComponent, FilteringEventArgs } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {

  // bind the DataManager instance to dataSource property
  private searchData: DataManager = new DataManager({
    adaptor: new ODataV4Adaptor,
    crossDomain: true,
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers'
  });
  // maps the appropriate column to fields property
  private fields: object = { text: 'ContactName', value: 'CustomerID' };
  // bind the Query instance to query property
  private query: Query = new Query().select(['ContactName', 'CustomerID']).take(7);
  // sort the resulted items
  private sortOrder: SortOrder = 'Ascending';
  constructor(props: any) {
    super(props);
    this.onFiltering = this.onFiltering.bind(this);
  }
  // filtering event handler to filter a customer
  public onFiltering(e: FilteringEventArgs) {
    // set limit as 4 to search result
    let query: Query = new Query().select(['ContactName', 'CustomerID']).take(4);
    query = (e.text !== '') ? query.where('ContactName', 'startswith', e.text, true) : query;
    e.updateData(this.searchData, query);
  }

  public render() {
    return (
      // specifies the tag for render the DropDownList component
      <DropDownListComponent id="ddlelement" allowFiltering={true} popupHeight="250px" filtering={this.onFiltering} sortOrder={this.sortOrder} query={this.query} dataSource={this.searchData} fields={this.fields} placeholder="Select a customer" />
    );
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));



