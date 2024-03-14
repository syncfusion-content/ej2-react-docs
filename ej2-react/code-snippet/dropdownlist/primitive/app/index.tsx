
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
  // maps the appropriate column to fields property
  private fields: object = { text: 'text', value: 'id' };

   // define the array of string
   private records: string[] = [];

   
   
   // define the array of string
   constructor(props) {
    super(props);
    this.records = ["item 1", "item 2", "item 3", "item 4", "item 5" , "item 6", "item 7", "item 8", "item 9", "item 10"];
  }
  private value: string = "item 1";

  public render() {
    return (
      // specifies the tag for render the DropDownList component
      <DropDownListComponent id="datas" dataSource={this.records} value={this.value} placeholder="e.g. Item 1" allowFiltering={false} popupHeight="200px" >
      </DropDownListComponent>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));


