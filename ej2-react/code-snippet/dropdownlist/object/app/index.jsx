import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
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
    value = { text: 'Item 5', value: 'id5'};

    render() {
        return (
            // specifies the tag for render the DropDownList component
            <DropDownListComponent id="datas" dataSource={this.records} placeholder="e.g. Item 1" value={this.value} allowObjectBinding={true} allowFiltering={false} fields={this.fields} popupHeight="200px" >
            </DropDownListComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
