import { MultiSelectComponent, Inject, VirtualScroll } from '@syncfusion/ej2-react-dropdowns';
import { Query } from '@syncfusion/ej2-data';

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
    // bind the Query instance to query property
    query = new Query().take(40);

    Begin(args) {
        args.Query = new Query().take(45);
      }

    render() {
        return (
            // specifies the tag for render the DropDownList component
            <MultiSelectComponent id="datas" dataSource={this.records} placeholder="e.g. Item 1" enableVirtualization={true} query={this.query}  allowFiltering={false} actionBegin={this.Begin} fields={this.fields} popupHeight="200px" >
                <Inject services={[VirtualScroll]} />
            </MultiSelectComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
