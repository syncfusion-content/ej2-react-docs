import { ComboBoxComponent, Inject, VirtualScroll } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.records = Array.from({ length: 150 }, (_, i) => ({
            id: 'id' + (i + 1),
            text: `Item ${i + 1}`,
        }));
    }
    fields = { text: 'text', value: 'id' };
 
    render() {
        return (
        // specifies the tag for render the ComboBox component
        <ComboBoxComponent id="datas" dataSource={this.records} fields={this.fields} placeholder="e.g. Item 1" enableVirtualization={true} allowFiltering={true} popupHeight="200px" >
                  <Inject services={[VirtualScroll]}/>
                </ComboBoxComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
