import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-treegrid';
import { TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';
function App() {
    let treegrid;
    const data = ['Parent', 'Child', 'Both', 'None'];
    const settings = { type: 'Multiple', mode: 'Row' };
    const onChange = (sel) => {
        const mode = sel.value.toString();
        if (treegrid) {
            treegrid.copyHierarchyMode = mode;
        }
    };
    return (<div>
    <DropDownListComponent popupHeight="250px" dataSource={data} value="Parent" change={onChange} width="150px"/>
        <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='225' allowFiltering={true} selectionSettings={settings} ref={g => treegrid = g}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='75' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
    </TreeGridComponent>
    </div>);
}
;
export default App;
