// import DataManager related classes
import { DropDownListComponent, Inject, VirtualScroll } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // define the array of string
    records = [];
    updateData() {
        for (var i = 1; i <= 150; i++) {
            const item = {
                id: 'id' + i,
                text: `Item ${i}`,
            };
            this.records.push(item);
        }
    }
    fields = { text: 'text', value: 'id' };

    render() {
        return (
        // specifies the tag for render the DropDownList component
        <DropDownListComponent id="datas" dataSource={this.updateData()} placeholder="e.g. Item 1" enableVirtualization={true} allowFiltering={true} fields={this.fields} popupHeight="200px" >
      <Inject services={[VirtualScroll]}/>
  </DropDownListComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
