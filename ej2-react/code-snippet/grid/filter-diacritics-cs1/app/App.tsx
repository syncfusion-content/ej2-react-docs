import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, FilterSettingsModel, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  const filterOptions: FilterSettingsModel = {
    ignoreAccent: true
  };
  return <GridComponent dataSource={data} filterSettings={filterOptions} allowFiltering={true}>
    <ColumnsDirective>
      <ColumnDirective field='EmployeeID' headerText='Employee ID' width='140' textAlign="Right" />
      <ColumnDirective field='Name' headerText='Name' width='140' />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='170' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='CustomerID' width='140' textAlign="Right" />
    </ColumnsDirective>
    <Inject services={[Filter]} />
  </GridComponent>
};
export default App;