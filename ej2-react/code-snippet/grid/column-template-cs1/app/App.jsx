import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
    const gridTemplate = (props) => {
        var src = 'https://ej2.syncfusion.com/react/demos/src/grid/images/' + props.EmployeeID + '.png';
        return (<div className='image'>
            <img src={src} alt={props.EmployeeID}/>
             
        </div>);
    };
    return <GridComponent dataSource={employeeData} height={315}>
        <ColumnsDirective>
            <ColumnDirective headerText='Employee Image' width='180' template={gridTemplate} textAlign='Center'/>
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='125' textAlign='Right'/>
            <ColumnDirective field='FirstName' headerText='Name' width='120'/>
            <ColumnDirective field='Title' headerText='Title' width='170'/>
            <ColumnDirective field='HireDate' headerText='Hire Date' width='135' format='yMd' textAlign='Right'/>
            <ColumnDirective field='ReportsTo' headerText='Reports To' width='120' textAlign='Right'/>
        </ColumnsDirective>
    </GridComponent>;
};
export default App;
