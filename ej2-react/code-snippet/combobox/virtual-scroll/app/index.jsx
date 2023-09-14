// import DataManager related classes
import { ComboBoxComponent, Inject, VirtualScroll } from '@syncfusion/ej2-react-dropdowns';
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
        // specifies the tag for render the ComboBox component
        <ComboBoxComponent id="datas" dataSource={this.updateData()} fields={this.fields} placeholder="e.g. Item 1" enableVirtualization={true} allowFiltering={true} popupHeight="200px" >
                  <Inject services={[VirtualScroll]}/>
                </ComboBoxComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
