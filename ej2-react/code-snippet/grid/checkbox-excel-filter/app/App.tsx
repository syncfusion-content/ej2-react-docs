
import { ColumnDirective, ColumnsDirective, FilterSettingsModel } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject, Sort, Page } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { Query, DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

function App() {
  const hostUrl: string = 'https://services.syncfusion.com/react/production/';
  const data: DataManager = new DataManager({ url: hostUrl + 'api/UrlDataSource', adaptor: new UrlAdaptor  });
  const query: Query = new Query().addParams('dataCount', '10000');
  let gridInstance: GridComponent;
  const filterSettings: FilterSettingsModel = {
    type: 'Excel', enableInfiniteScrolling: true
  };
  return <GridComponent dataSource={data} query={query} allowSorting={true} allowPaging={true} ref={grid => gridInstance = grid} pageSettings={{ pageSize: 10, pageCount: 5 }} allowFiltering={true} filterSettings={filterSettings}>
    <ColumnsDirective>
      <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right'></ColumnDirective>
      <ColumnDirective field='Employees' headerText='Employee Name' width='150'></ColumnDirective>
      <ColumnDirective field='Designation' headerText='Designation' width='130' textAlign='Right' />
      <ColumnDirective field='CurrentSalary' headerText='CurrentSalary' width='120' format='C2' textAlign='Right' />
    </ColumnsDirective>
    <Inject services={[Filter, Page, Sort]} />
  </GridComponent>;
};
export default App;


