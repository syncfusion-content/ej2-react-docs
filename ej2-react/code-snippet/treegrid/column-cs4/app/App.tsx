

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, Inject, Reorder, TreeGrid, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';

function App() {
    let treegrid: TreeGridComponent | null;
    const reorder = () => {
        if (treegrid) {
            treegrid.reorderColumns(['taskID','duration'],'progress');
        }
    }

    return (<div>
    <ButtonComponent id='reorderMultipleCols' onClick= { reorder }>Reorder Task ID and Duration to Last</ButtonComponent>
    <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' allowReordering={true} height='285' ref={g => treegrid = g}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
            <ColumnDirective field='progress' headerText='Progress' width='80' textAlign='Right' />
            </ColumnsDirective>
            <Inject services={[Reorder]}/>
        </TreeGridComponent></div>)
};
export default App;


