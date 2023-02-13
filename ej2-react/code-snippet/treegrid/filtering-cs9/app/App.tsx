

import { ChangeEventArgs, DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { ColumnDirective, ColumnsDirective, Filter, FilterHierarchyMode } from '@syncfusion/ej2-react-treegrid';
import { Inject, TreeGrid, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';

function App() {
    let treegrid: TreeGridComponent | null;
    const data: string[] = ['Parent', 'Child', 'Both', 'None']
    const onChange = (sel: ChangeEventArgs): void => {
        const mode: FilterHierarchyMode = sel.value.toString() as FilterHierarchyMode;
        if (treegrid) {
            treegrid.filterSettings.hierarchyMode = mode;
            treegrid.clearFiltering();
        }
    }

    return(<div><DropDownListComponent popupHeight="250px" dataSource={data} value="Parent" change={onChange} width="150px"/>
        <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='225' allowFiltering={true} ref={g => treegrid = g}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='75' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Filter]}/>
    </TreeGridComponent></div>)
};
export default App;


