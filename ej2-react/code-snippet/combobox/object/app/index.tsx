import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    // maps the appropriate column to fields property
    private fields: object = { text: 'text', value: 'id' };

    // define the array of string
    private records: { [key: string]: Object }[] = [];

    private value : { [key: string]: Object } = { id: 'id1', text: 'Item 1' };

    constructor(props) {
        super(props);
        this.records = Array.from({ length: 150 }, (_, i) => ({
            id: 'id' + (i + 1),
            text: `Item ${i + 1}`,
        }));
    }
    public render() {
        return (
            // specifies the tag for render the ComboBox component
            <ComboBoxComponent id="datas" dataSource={this.records} value={this.value} fields={this.fields} placeholder="e.g. Item 1" allowObjectBinding={true} allowFiltering={false} popupHeight="200px" >
            </ComboBoxComponent>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));


