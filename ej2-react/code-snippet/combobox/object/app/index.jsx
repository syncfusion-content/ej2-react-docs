import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
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
    value = { text: 'Item 5', value: 'id5'};
 
    render() {
        return (
        // specifies the tag for render the ComboBox component
        <ComboBoxComponent id="datas" dataSource={this.records} value={this.value} fields={this.fields} placeholder="e.g. Item 1" allowObjectBinding={true} allowFiltering={false} popupHeight="200px" >
                </ComboBoxComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
