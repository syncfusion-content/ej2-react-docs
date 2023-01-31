import { ColumnDirective, ColumnsDirective, TreeGridComponent, Freeze, Inject } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';
function App() {
    return <TreeGridComponent dataSource={sampleData} childMapping='subtasks' treeColumnIndex={1} height='310' frozenRows={3} frozenColumns={2} allowSelection={false}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='taskName' headerText='Task Name' width='230'></ColumnDirective>
            <ColumnDirective field='startDate' headerText='Start Date' width='120' format='yMd' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='endDate' headerText='End Date' width='120' format='yMd' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='duration' headerText='Duration' width='110' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='progress' headerText='Progress' width='110' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='priority' headerText='Priority' width='110'></ColumnDirective>
            <ColumnDirective field='approved' headerText='Approved' textAlign='Center' width='110'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Freeze]}/>
    </TreeGridComponent>;
}
;
export default App;
