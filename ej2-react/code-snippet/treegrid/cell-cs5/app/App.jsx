import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { htmlData } from './datasource';
function App() {
    return <TreeGridComponent dataSource={htmlData} treeColumnIndex={1} childMapping='subtasks' height='300'>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='<span> Task ID </span>' width='160' textAlign='Right' disableHtmlEncode={true}/>
            <ColumnDirective field='taskName' headerText='<span> Task Name </span>' width='180' disableHtmlEncode={false}/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
            <ColumnDirective field='progress' headerText='Progress' width='80' textAlign='Right'/>
        </ColumnsDirective>
    </TreeGridComponent>;
}
;
export default App;
