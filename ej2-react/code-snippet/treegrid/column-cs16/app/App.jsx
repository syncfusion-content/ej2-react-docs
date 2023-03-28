import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { stringData } from './datasource';
function App() {
    const orderFormatter = (field, data, column) => {
        return data[field].map((s) => {
            return s.lastName || s.firstName;
        }).join(' ');
    };
    return <TreeGridComponent dataSource={stringData} treeColumnIndex={1} childMapping='subtasks' height='315'>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='110' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='name' headerText='Assignee' width='150' textAlign='Left' valueAccessor={orderFormatter}/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
    </TreeGridComponent>;
}
;
export default App;
