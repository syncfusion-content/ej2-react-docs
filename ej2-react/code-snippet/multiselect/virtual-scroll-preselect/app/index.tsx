
import { MultiSelectComponent, Inject, VirtualScroll } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
  // maps the appropriate column to fields property
  private fields: object = { text: 'text', value: 'id' };

   // define the array of string
   private records: { [key: string]: Object }[] = [];

   private value: string[] = ["id1", "id2", "id3"];
   // define the array of string
   constructor(props) {
    super(props);
    this.records = Array.from({ length: 150 }, (_, i) => ({
        id: 'id' + (i + 1),
        text: `Item ${i + 1}`,
    }));
  }

  public render() {
    return (
      // specifies the tag for render the DropDownList component
      <MultiSelectComponent id="datas" dataSource={this.records} value={this.value} placeholder="e.g. Item 1" enableVirtualization={true} allowFiltering={false} fields={this.fields} popupHeight="200px" >
      <Inject services={[VirtualScroll]}/>
  </MultiSelectComponent>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));


