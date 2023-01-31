import { ColumnDirective, ColumnsDirective, Filter } from '@syncfusion/ej2-react-treegrid';
import { Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';
function App() {
    const FilterOptions = {
        type: 'Excel'
    };
    const actionBegin = (args) => {
        if (args.requestType === 'filtersearchbegin' && args.column.type === "string") {
            args.operator = 'contains';
        }
    };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='275' allowFiltering={true} filterSettings={FilterOptions}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='duration' headerText='Duration' width='90'/>
            <ColumnDirective field='progress' headerText='Progress' width='90'/>
        </ColumnsDirective>
        <Inject services={[Filter]}/>
    </TreeGridComponent>;
}
;
export default App;
