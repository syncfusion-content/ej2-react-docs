


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {enableRipple} from '@syncfusion/ej2-base';
enableRipple(true);

import { TreeViewComponent, NodeCheckEventArgs} from '@syncfusion/ej2-react-navigations';

function App() {

    // define the JSON of data
    let countries: { [key: string]: Object }[] = [
            { id: 1, name: 'Australia', hasChild: true, expanded: true },
            { id: 2, pid: 1, name: 'New South Wales', isChecked: true },
            { id: 3, pid: 1, name: 'Victoria' },
            { id: 4, pid: 1, name: 'South Australia' },
            { id: 6, pid: 1, name: 'Western Australia', isChecked: true },
            { id: 7, name: 'Brazil', hasChild: true },
            { id: 8, pid: 7, name: 'Paraná' },
            { id: 9, pid: 7, name: 'Ceará' },
            { id: 10, pid: 7, name: 'Acre' },
            { id: 11, name: 'China', hasChild: true },
            { id: 12, pid: 11, name: 'Guangzhou' },
            { id: 13, pid: 11, name: 'Shanghai' },
            { id: 14, pid: 11, name: 'Beijing' },
            { id: 15, pid: 11, name: 'Shantou' },
            { id: 16, name: 'France', hasChild: true },
            { id: 17, pid: 16, name: 'Pays de la Loire' },
            { id: 18, pid: 16, name: 'Aquitaine' },
            { id: 19, pid: 16, name: 'Brittany' },
            { id: 20, pid: 16, name: 'Lorraine' },
            { id: 21, name: 'India', hasChild: true },
            { id: 22, pid: 21, name: 'Assam' },
            { id: 23, pid: 21, name: 'Bihar' },
            { id: 24, pid: 21, name: 'Tamil Nadu' },
            { id: 25, pid: 21, name: 'Punjab' }
    ];
   let field: Object = { dataSource: countries, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
   let isChecked: boolean = true;
   function nodeChecked(args: NodeCheckEventArgs) {
        alert("The checked node's id: " + args.data[0].id); // To alert the checked node's id.
    }
    return (
        // specifies the tag for render the TreeView component
        <TreeViewComponent fields={field} showCheckBox={isChecked} nodeChecked={ nodeChecked } />
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



