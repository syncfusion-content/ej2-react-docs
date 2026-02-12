import { ColumnDirective, ColumnsDirective, FilterMenuRendererArgs, FilterSettingsModel, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const pageSettings: PageSettingsModel = { pageCount: 5 };
  const filterSettings: FilterSettingsModel = { type: 'Menu' };
  const formatOptions: Object = { type: 'dateTime', format: 'M/d/y HH:mm' };
  const actionComplete = (args: FilterMenuRendererArgs) => {
    if (args.requestType === 'filterAfterOpen') {
      const columnObj = (grid as GridComponent).getColumnByField(args.columnName);
      if (columnObj.type === 'datetime') {
        const dateObj = (document.getElementById('dateui-' + columnObj.uid)as Element)['ej2_instances'][0];
        dateObj.timeFormat = 'HH:mm';
      }
    }
  }
  return (<div>
    <GridComponent ref={g => grid = g} dataSource={data} allowFiltering={true} allowPaging={true} pageSettings={pageSettings} height={315} filterSettings={filterSettings} actionComplete={actionComplete}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='OrderDate' headerText='Order Date' width='100' textAlign="Right" type="datetime" format={formatOptions} />
        <ColumnDirective field='ShippedDate' headerText='Shipped Date' width='100' textAlign="Right" type="datetime" format={formatOptions} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
      </ColumnsDirective>
      <Inject services={[Filter, Page]} />
    </GridComponent></div>)
};
export default App;