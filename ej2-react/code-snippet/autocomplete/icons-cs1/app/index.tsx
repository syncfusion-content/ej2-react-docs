


import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    // define the array of data
    private sortFormatData: { [key: string]: Object }[] = [
        { Class: 'asc-sort', Type: 'Sort A to Z', Id: '1' },
        { Class: 'dsc-sort', Type: 'Sort Z to A ', Id: '2' },
        { Class: 'filter', Type: 'Filter', Id: '3' },
        { Class: 'clear', Type: 'Clear', Id: '4' }
    ];

    // map the icon column to iconCSS field.
    private fields: object = { value: 'Type', iconCss: 'Class' };

    public render() {
        return (
             // specifies the tag for render the AutoComplete component
            <AutoCompleteComponent id="" dataSource={this.sortFormatData} fields={this.fields} placeholder="Find a format" />
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));



