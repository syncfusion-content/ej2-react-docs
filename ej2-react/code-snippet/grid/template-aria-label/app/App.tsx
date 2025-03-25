

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { ChipListComponent } from '@syncfusion/ej2-react-buttons';
import { employeeData } from './datasource';

function App() {
    const imageTemplateOptions: Object = { enableAriaLabel: true };
    const nameTemplateOptions: Object = { enableAriaLabel: false };
    const imageTemplate = (props: any) => {
        const src = props.EmployeeID + '.png';
        return (<div className='image'>
            <img src={src} alt={props.EmployeeID} />
        </div>);
    }
    const chipTemplate = ((props: any) => {
        return (
          <div>
            <ChipListComponent id='chip' text={props.FirstName}></ChipListComponent>
          </div>
        )
    })
    return <GridComponent dataSource={employeeData} height={315}>
        <ColumnsDirective>
            <ColumnDirective headerText='Employee Image' width='180' template={imageTemplate} templateOptions={imageTemplateOptions} textAlign='Center'/>
            <ColumnDirective field='FirstName' headerText='First Name' template={chipTemplate} templateOptions={nameTemplateOptions} width='120'/>
            <ColumnDirective field='LastName' headerText='Last Name' width='120'/>
            <ColumnDirective field='City' headerText='City' width='120'/>
        </ColumnsDirective>
    </GridComponent>

};
export default App;


