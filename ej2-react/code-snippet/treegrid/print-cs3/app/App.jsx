import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Inject, Page, Toolbar } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';
function App() {
    const toolbarOptions = ['Print'];
    const pageSettings = { pageSize: 8 };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='220' toolbar={toolbarOptions} allowPaging={true} pageSettings={pageSettings} printMode='CurrentPage'>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Toolbar, Page]}/>
    </TreeGridComponent>;
}
;
export default App;
