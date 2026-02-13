

import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { DataUtil } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, FilterSettingsModel } from '@syncfusion/ej2-react-grids';
import { Filter, Grid, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const fields: object = { text: 'CustomerID', value: 'CustomerID' };
  const filterOptions: FilterSettingsModel = {
    type: 'Excel'
  };
  const dropdata: string[] = DataUtil.distinct(data, 'CustomerID') as string[];
  const filterTemplate = (props: any): any => {
    const val = isNullOrUndefined(props.CustomerID) ? '' : props.CustomerID;
    return (<DropDownListComponent id='CustomerID' value={val} popupHeight='250px'
      fields={fields} dataSource={dropdata} />);
  }
  return <GridComponent ref={g => grid = g} dataSource={data} filterSettings={filterOptions} allowFiltering={true} >
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign="Right" />
      <ColumnDirective field='EmployeeID' headerText='Employee ID' width='140' textAlign="Right" />
      <ColumnDirective field='CustomerID' filterTemplate={filterTemplate} width='140' />
      <ColumnDirective field='ShipName' width='170' textAlign="Right" />
    </ColumnsDirective>
    <Inject services={[Filter]} />
  </GridComponent>
};
export default App;


