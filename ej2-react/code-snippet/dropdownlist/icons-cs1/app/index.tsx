


import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
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
    private fields: object = { text: 'Type', iconCss: 'Class', value: 'Id' };

    public render() {
        return (
             // specifies the tag for render the DropDownList component
            <DropDownListComponent id="ddlelement" dataSource={this.sortFormatData} fields={this.fields} placeholder="Select a format" />
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));



