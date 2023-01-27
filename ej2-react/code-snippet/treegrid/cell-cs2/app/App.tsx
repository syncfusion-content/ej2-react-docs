

import { QueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { Column, ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';

function App() {
    const customizeCell = (args: QueryCellInfoEventArgs) => {
        const cell : HTMLTableCellElement = args.cell as HTMLTableCellElement;
        if ((args.column as Column).field === 'progress' && +cell.innerHTML > 90 &&
             +cell.innerHTML <= 100) {
                cell.setAttribute('style', 'background-color:#336c12;color:white;');
        } else if (+cell.innerHTML > 20 && (args.column as Column).field === 'progress') {
            cell.setAttribute('style', 'background-color:#7b2b1d;color:white;');
        }  
    }

    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='300'
        queryCellInfo={customizeCell}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
            <ColumnDirective field='progress' headerText='Progress' width='80' textAlign='Right' />
        </ColumnsDirective>
    </TreeGridComponent>
};
export default App;


