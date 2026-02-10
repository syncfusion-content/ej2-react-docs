

import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Data, Group, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

const oldGenerateQuery = Data.prototype.generateQuery;
Data.prototype.generateQuery = function() {
  const query = oldGenerateQuery.call(this, true);
  // Check if 'pageQuery' is available in the prototype chain.
  if (Data.prototype.hasOwnProperty('pageQuery')) {
    const pageQueryFn = Data.prototype['pageQuery'];
    pageQueryFn.call(this, query);
  }
  return query;
};

function App() {
  let grid;
  const groupOptions = { showGroupedColumn: false, columns: ['ShipCountry'] };
  const pageSettings = { pageSize: 5 };
  return <GridComponent ref={g => grid = g} allowGrouping={true}
    groupSettings={groupOptions} allowPaging={true} pageSettings={pageSettings}
    dataSource={data}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      <ColumnDirective field='Freight' headerText='Freight' width='100' textAlign="Right" format="C2" />
    </ColumnsDirective>
    <Inject services={[Group, Page]} />
  </GridComponent>
};
export default App;


