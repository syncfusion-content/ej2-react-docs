import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.records = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5" , "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"]
    }
    fields = { text: 'text', value: 'id' };
    value = "Item 5";
 
    render() {
        return (
        // specifies the tag for render the ComboBox component
        <ComboBoxComponent id="datas" dataSource={this.records} value={this.value} placeholder="e.g. Item 1" allowFiltering={false} popupHeight="200px" >
                </ComboBoxComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
