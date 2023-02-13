


import { SortOrder } from '@syncfusion/ej2-lists';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    // bind the DataManager instance to dataSource property
    private searchData: string[] = ['ram', 'Ravi', 'suresh', 'Suresh'];
    // maps the appropriate column to fields property
    private fields: object = { value: "ContactName" };
    // sort the resulted items
    private sortOrder: SortOrder = 'Ascending';


    public render() {
        return (
            // specifies the tag for render the AutoComplete component
            <AutoCompleteComponent id="atcelement" dataSource={this.searchData} filterType= "StartsWith" sortOrder={this.sortOrder} fields={this.fields} placeholder="eg: Ravi" ignoreCase={false} />
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));


