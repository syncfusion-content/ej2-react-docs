import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // define the array of string
    constructor(props) {
        super(props);
        this.records = ["item 1", "item 2", "item 3", "item 4", "item 5" , "item 6", "item 7", "item 8", "item 9", "item 10"];
    }
    fields = { text: 'text', value: 'id' };
    value = "item 5";

    render() {
        return (
            // specifies the tag for render the DropDownList component
            <DropDownListComponent id="datas" dataSource={this.records} placeholder="e.g. Item 1" value={this.value} allowFiltering={false} popupHeight="200px" >
            </DropDownListComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
