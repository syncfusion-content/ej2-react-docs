import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
  // maps the appropriate column to fields property
  private fields: object = { value: 'text' };

  // define the array of string
  private records: { [key: string]: Object }[] = [];

  private value: { [key: string]: Object } = { id: 'id1', text: 'Item 1' };

  constructor(props) {
    super(props);
    this.records = Array.from({ length: 150 }, (_, i) => ({
      id: 'id' + (i + 1),
      text: `Item ${i + 1}`,
    }));
  }
  public render() {
    return (
      // specifies the tag for render the AutoComplete component
      <AutoCompleteComponent id="datas" dataSource={this.records} placeholder="e.g. Item 1" allowObjectBinding={true} fields={this.fields} allowFiltering={true} popupHeight="200px">
      </AutoCompleteComponent>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));


