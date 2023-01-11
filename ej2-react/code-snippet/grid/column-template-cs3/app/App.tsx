

import { ColumnDirective, ColumnsDirective, GridComponent, RecordClickEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';
import { closest } from '@syncfusion/ej2-base';

function App() {
    let grid: Grid | null;
    const gridTemplate = (props: any) => {
        return (<div>
            <button className="empData">Employee Data</button>
        </div>);
    }
    const recordClick = (args: RecordClickEventArgs): void => {
        if (args.target.classList.contains('empData')) {
            let rowObj = grid.getRowObjectFromUID(closest(args.target, '.e-row').getAttribute('data-uid'));
            console.log(rowObj);
        }
    }
    return <GridComponent dataSource={employeeData} ref={g => grid = g} height={315} recordClick={recordClick}>
        <ColumnsDirective>
            <ColumnDirective headerText='Employee Data' width='150' template={gridTemplate} textAlign='Right' isPrimaryKey='true' />
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='130' textAlign='Right' />
            <ColumnDirective field='FirstName' headerText='Name' width='120' />
            <ColumnDirective field='Title' headerText='Title' width='170' />
        </ColumnsDirective>
    </GridComponent>
};
export default App;


