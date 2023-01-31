


import { ColumnDirective, ColumnsDirective, Filter } from '@syncfusion/ej2-react-treegrid';
import { Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid'
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';

function App() {
    let treegrid: TreeGridComponent | null;
    const dataBound = () => {
            Object.assign(treegrid.grid.filterModule.filterOperators,{ startsWith: 'contains' });
    }

    return <TreeGridComponent dataSource={sampleData} dataBound={dataBound} treeColumnIndex={1} childMapping='subtasks' height='275' allowFiltering={true} ref={g => treegrid = g}>
    <ColumnsDirective>
        <ColumnDirective field='taskID' headerText='Task ID' width='75' textAlign='Right'/>
        <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
        <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
        <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
    </ColumnsDirective>
    <Inject services={[Filter]}/>
    </TreeGridComponent>
}



