import { ColumnDirective, ColumnsDirective, Page } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const pageSettings = { pageCount: 5 };
  const filterSettings = { type: 'Menu' };
  const formatOptions = { type: 'dateTime', format: 'M/d/y HH:mm' };
  const actionComplete = (args) => {
    if (args.requestType === 'filterafteropen') {
      const columnObj = grid.getColumnByField(args.columnName);
      if (columnObj.type === 'datetime') {
        const dateObj = document.getElementById('dateui-' + columnObj.uid)['ej2_instances'][0];
        dateObj.timeFormat = 'HH:mm';
      }
    }
  }
  return (<div>
    <GridComponent ref={g => grid = g} dataSource={data} allowFiltering={true} allowPaging={true} pageSettings={pageSettings} height={315} filterSettings={filterSettings} actionComplete={actionComplete}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='OrderDate' headerText='Order Date' width='100' textAlign="Right" type="datetime" format={formatOptions} />
        <ColumnDirective field='ShippedDate' headerText='ShippedDate' width='100' textAlign="Right" type="datetime" format={formatOptions} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
      </ColumnsDirective>
      <Inject services={[Filter, Page]} />
    </GridComponent></div>)
};
export default App;