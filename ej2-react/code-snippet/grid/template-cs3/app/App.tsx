import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';
import { ChipListComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  const chipTemplate = ((props: any) => {
    return (
      <div>
        <ChipListComponent id='chip' text={props.FirstName}></ChipListComponent>
      </div>
    )
  })
  return (
    <div>
      <GridComponent dataSource={employeeData} height={315} enableHover={false}>
        <ColumnsDirective>
          <ColumnDirective field='EmployeeID' headerText='EmployeeID' width='100' />
          <ColumnDirective field='FirstName' headerText='FirstName' width='120' template={chipTemplate} />
          <ColumnDirective field='City' headerText='City' width='120' />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;