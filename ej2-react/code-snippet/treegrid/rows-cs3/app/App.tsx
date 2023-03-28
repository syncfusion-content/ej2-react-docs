

import { getObject, RowDataBoundEventArgs } from '@syncfusion/ej2-grids';
import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';

function App() {
    const rowDataBound = (args: RowDataBoundEventArgs) => {
        if (getObject('duration', args.data) === 0 ) {
            (args.row as HTMLTableRowElement).style.background= '#336c12';
        } else if (getObject('duration', args.data) < 3) {
            (args.row as HTMLTableRowElement).style.background= '#7b2b1d';
        }
    }

    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks'
        height='275' rowDataBound={rowDataBound} enableHover={false}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
    </TreeGridComponent>
};
export default App;


