import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // define the array of data
    sortFormatData = [
        { class: 'asc-sort', type: 'Sort A to Z', id: '1' },
        { class: 'dsc-sort', type: 'Sort Z to A ', id: '2' },
        { class: 'filter', type: 'Filter', id: '3' },
        { class: 'clear', type: 'Clear', id: '4' }
    ];
    // map the icon column to iconCSS field.
    fields = { text: 'type', iconCss: 'class', value: 'id' };
    render() {
        return (
        // specifies the tag for render the MultiSelect component
        <MultiSelectComponent id="mtselement" dataSource={this.sortFormatData} fields={this.fields} placeholder="Select a format"/>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
