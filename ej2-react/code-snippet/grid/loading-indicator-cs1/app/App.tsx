import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Sort, Filter, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';

function App() {
  let grid: GridComponent | null;
  let dropDown: DropDownListComponent | null;
  const data: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/react/production/api/Orders',
    adaptor: new UrlAdaptor
  });
  const pageOptions: PageSettingsModel = { pageSize: 5, pageCount: 5 };
  const loadingIndicator = { indicatorType: 'Spinner' };
  const ddlData: Object[] = [
    { id: 'Spinner', value: 'Spinner' },
    { id: 'Shimmer', value: 'Shimmer' }
  ]
  const fields: object = { text: 'value', value: 'id' };
  const valueChange = (args: ChangeEventArgs) => {
    if ((dropDown as DropDownListComponent).value === 'Shimmer') {
      (grid as GridComponent).loadingIndicator.indicatorType = 'Shimmer';
      (grid as GridComponent).refreshColumns();
    } else {
      (grid as GridComponent).loadingIndicator.indicatorType = 'Spinner';
      (grid as GridComponent).refreshColumns();
    }
  }
  return (<div>
    <label style={{ padding: "10px 10px 26px 0" }}> Change the loading indicator type: </label>
    <DropDownListComponent ref={d => dropDown = d} index={0} width={120} dataSource={ddlData} fields={fields} change={valueChange}></DropDownListComponent>
    <GridComponent ref={g => grid = g} dataSource={data} allowPaging={true} pageSettings={pageOptions} height={315} allowFiltering={true} allowSorting={true} loadingIndicator={loadingIndicator}>
      <ColumnsDirective>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign="Right" />
        <ColumnDirective field='Employees' headerText='Employees' width='150' />
        <ColumnDirective field='Designation' headerText='Designation' width='150' />
        <ColumnDirective field='CurrentSalary' headerText='Current Salary' width='150' />
      </ColumnsDirective>
      <Inject services={[Page, Sort, Filter]} />
    </GridComponent></div>)
};
export default App;