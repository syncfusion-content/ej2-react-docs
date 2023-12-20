import { AutoCompleteComponent, Inject, VirtualScroll } from '@syncfusion/ej2-react-dropdowns';
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
    fields = { value: 'text' };
    render() {
        return (
            // specifies the tag for render the AutoComplete component
            <AutoCompleteComponent id="datas" dataSource={this.records} placeholder="e.g. Item 1" enableVirtualization={true} fields={this.fields} allowFiltering={true} popupHeight="200px">
                <Inject services={[VirtualScroll]} />
            </AutoCompleteComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
