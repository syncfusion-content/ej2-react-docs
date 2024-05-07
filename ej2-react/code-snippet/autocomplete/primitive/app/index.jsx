import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.records = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5" , "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"];
    }
    value = "Item 5";
    fields = { value: 'text' };
    render() {
        return (
            // specifies the tag for render the AutoComplete component
            <AutoCompleteComponent id="datas" dataSource={this.records} value={this.value} placeholder="e.g. Item 1"  allowFiltering={true} popupHeight="200px">
            </AutoCompleteComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
