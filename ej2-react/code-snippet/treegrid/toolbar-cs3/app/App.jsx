import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Inject, Toolbar } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';

import { sampleData } from './datasource';
function App() {
    let treegrid;
    const toolbarOptions = [
        'ExpandAll', 'CollapseAll',
        { text: 'Click', tooltipText: 'Click', id: 'Click', prefixIcon: 'e-time' }
    ];
    const toolbarClick = (args) => {
        if (treegrid && args.item.text === 'Click') {
            alert("Custom toolbar click...");
        }
    };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' ref={g => treegrid = g} toolbar={toolbarOptions} toolbarClick={toolbarClick}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='160'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Toolbar]}/>
    </TreeGridComponent>;
}
;
export default App;
