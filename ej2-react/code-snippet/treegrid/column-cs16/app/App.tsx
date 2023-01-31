

import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { stringData } from './datasource';

function App() {
    const orderFormatter = (field: string, data: object, column: object): string => {
        return data[field].map((s: {lastName: string, firstName: string}): string => {
            return s.lastName || s.firstName }).join(' ');
    }

    return <TreeGridComponent dataSource={stringData} treeColumnIndex={1} childMapping='subtasks' height='315'>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='110' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='name' headerText='Assignee' width='150' textAlign='Left'
            valueAccessor={orderFormatter} />
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
    </TreeGridComponent>
};
export default App;


