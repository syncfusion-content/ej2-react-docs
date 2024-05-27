import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Sort, Filter, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';

function App() {
  let grid;
  let dropDown;
  const data = new DataManager({
    url: 'https://services.syncfusion.com/react/production/api/Orders',
    adaptor: new UrlAdaptor
  });
  const pageOptions = { pageSize: 5, pageCount: 5 };
  const loadingIndicator = { indicatorType: 'Spinner' };
  const ddlData = [
    { id: 'Spinner', value: 'Spinner' },
    { id: 'Shimmer', value: 'Shimmer' }
  ]
  const fields = { text: 'value', value: 'id' };
  const valueChange = () => {
    if (dropDown.value === 'Shimmer') {
      grid.loadingIndicator.indicatorType = 'Shimmer';
      grid.refreshColumns();
    } else {
      grid.loadingIndicator.indicatorType = 'Spinner';
      grid.refreshColumns();
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