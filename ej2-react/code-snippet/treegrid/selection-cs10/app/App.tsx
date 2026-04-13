import {
    TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, Selection, VirtualScroll,
} from '@syncfusion/ej2-react-treegrid';
import { taskData } from './datasource';

import * as React from 'react';

function App() {
    let treegridcs10: TreeGridComponent;

    const selectionSettings: any = { persistSelection: true };

    const isRowSelectable = (data: any,columns:any): boolean => {
        return data.Progress !== 'Completed';
    };
    return <TreeGridComponent
        id="TreeGrid"
        ref={(treegrid) => { treegridcs10 = treegrid }}
        dataSource={taskData}
        idMapping='TaskID'
        parentIdMapping='ParentID'
        treeColumnIndex={1}
        height={600}
        enableVirtualization={true}
        selectionSettings={selectionSettings}
        isRowSelectable={isRowSelectable}
    >
        <ColumnsDirective>
            <ColumnDirective type="checkbox" width="50" />
            <ColumnDirective field="Task" headerText="Task" width="300" />
            <ColumnDirective field="TaskID" isPrimaryKey={true} visible={false} />
            <ColumnDirective field="AssignedTo" headerText="Assigned To" width="140" />
            <ColumnDirective field="StartDate" headerText="Start" format='yMd' width="180" />
            <ColumnDirective field="DueDate" headerText="Due" format='yMd' width="180" />
            <ColumnDirective field="Priority" headerText="Priority" width="90" />
            <ColumnDirective field="Progress" headerText="Status" width="110" />

        </ColumnsDirective>
        <Inject services={[Selection, VirtualScroll]} />
    </TreeGridComponent>
}
;
export default App;
