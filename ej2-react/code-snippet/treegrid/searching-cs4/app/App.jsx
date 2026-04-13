import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Filter, Toolbar } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';

import { sampleData } from './datasource';
function App() {
    const toolbarOptions = ['Search'];
    const searchSettings = { fields: ['taskName', 'duration'] };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='270' toolbar={toolbarOptions} searchSettings={searchSettings}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
            <ColumnDirective field='progress' headerText='Progress' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Filter, Toolbar]}/>
    </TreeGridComponent>;
}
;
export default App;
