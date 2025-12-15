import { Column, ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { QueryCellInfoEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { rowSpanData } from './datasource';

function App() {
    const queryCellInfoEvent = (args: QueryCellInfoEventArgs) => {
        const col: Column = args.column as Column;
        const data = args.data;
        switch (data.EmployeeID) {
            case 10001:
                if (col.field === '1:00') {
                    args.rowSpan = 10;
                }
                break;
        }
    };
    return (<div className='control-pane'>
        <div className='control-section'>
            <TreeGridComponent dataSource={rowSpanData} queryCellInfo={queryCellInfoEvent} treeColumnIndex={1} childMapping='subtasks' height='auto' width='auto' gridLines='Both' >
                <ColumnsDirective>
                    <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right' />
                    <ColumnDirective field='EmployeeName' headerText='Employee Name' width='150' />
                    <ColumnDirective field='9:00' headerText='9:00 AM' width='120' />
                    <ColumnDirective field='10:00' headerText='10:00 AM' width='120' />
                    <ColumnDirective field='11:00' headerText='11:00 AM' width='120' />
                    <ColumnDirective field='12:00' headerText='12:00 PM' width='120' />
                    <ColumnDirective field='1:00' headerText='1:00 PM' width='120' />
                    <ColumnDirective field='3:00' headerText='3:00 PM' width='120' />
                    <ColumnDirective field='4:00' headerText='4:00 PM' width='120' />
                    <ColumnDirective field='5:00' headerText='5:00 PM' width='120' />
                </ColumnsDirective>
            </TreeGridComponent>
        </div>
    </div>)
};
export default App;
