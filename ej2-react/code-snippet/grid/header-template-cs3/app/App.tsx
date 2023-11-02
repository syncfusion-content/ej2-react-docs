import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
  let grid: Grid | null;
  const hyperLinkTemplate = ((props: any) => {
    return (
      <div><a href='#' onClick={(e) => onClick(e, props.FirstName)}>{props.FirstName}</a></div>
    )
  })
  const onClick = ((event: any, firstName: any) => {
    const url = 'https://www.meaningofthename.com/';
    var searchUrl = url + firstName;
    window.open(searchUrl);
  });

  return (
    <div>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent ref={g => grid = g} dataSource={employeeData} height={315} >
          <ColumnsDirective>
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' />
            <ColumnDirective field='FirstName' headerText='First Name' width='120' template={hyperLinkTemplate} />
            <ColumnDirective field='LastName' headerText='Last Name' width='80' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;