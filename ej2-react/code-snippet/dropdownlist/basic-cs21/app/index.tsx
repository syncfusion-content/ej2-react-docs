


import { Query } from '@syncfusion/ej2-data';
import { SortOrder } from '@syncfusion/ej2-lists';
import { DropDownListComponent, FilteringEventArgs } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    // bind the DataManager instance to dataSource property
    private searchData: { [key: string]: Object }[] = [
      { Index: "s1", Country: "Alaska" }, { Index: "s2", Country: "Californiag" },
      { Index: "s3", Country: "Florida" }, { Index: "s4", Country: "Georgia" }
  ]
  // maps the appropriate column to fields property
  private fields: object = { value: "Country" };
    // sort the resulted items
    private sortOrder: SortOrder = 'Ascending';
    // filtering event handler to filter a customer
    public onFiltering(e: FilteringEventArgs) {
      // load overall data when search key empty.
      if (e.text === '') {
        e.updateData(this.searchData);
      } else {
        let query: Query = new Query();
        // change the type of filtering
        query = (e.text !== '') ? query.where('Country', 'contains', e.text, false) : query;
        e.updateData(this.searchData, query);
      }
    }

    public render() {
        return (
             // specifies the tag for render the DropDownList component
            <DropDownListComponent id="ddlelement" popupHeight="245px" allowFiltering={true} filtering={this.onFiltering = this.onFiltering.bind(this)} sortOrder={this.sortOrder} dataSource={this.searchData} fields={this.fields} placeholder="Select a customer" />
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));


