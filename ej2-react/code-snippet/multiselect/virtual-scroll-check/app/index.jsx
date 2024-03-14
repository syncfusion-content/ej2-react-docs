import { MultiSelectComponent, Inject, VirtualScroll, CheckBoxSelection } from '@syncfusion/ej2-react-dropdowns';
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

    render() {
        return (
            // specifies the tag for render the DropDownList component
            <MultiSelectComponent id="datas" dataSource={this.records} mode="CheckBox" placeholder="e.g. Item 1" enableVirtualization={true} allowFiltering={false} fields={this.fields} popupHeight="200px" >
                <Inject services={[VirtualScroll, CheckBoxSelection]} />
            </MultiSelectComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
