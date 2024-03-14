import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // define the array of string
    constructor(props) {
        super(props);
        this.records = Array.from({ length: 150 }, (_, i) => ({
            id: 'id' + (i + 1),
            text: `Item ${i + 1}`,
        }));
    }
    fields = { text: 'text', value: 'id' };
    value = [{ id: 'id1', text: 'Item 1'}, { id: 'id2', text: 'Item 2'}];

    render() {
        return (
            // specifies the tag for render the DropDownList component
            <MultiSelectComponent id="datas" dataSource={this.records} value={this.value} placeholder="e.g. Item 1" objectValueBinding={true} allowFiltering={false} fields={this.fields} popupHeight="200px" >
            </MultiSelectComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
