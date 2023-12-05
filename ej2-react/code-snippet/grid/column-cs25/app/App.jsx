
import { ColumnDirective, ColumnsDirective, GridComponent, Sort, Filter, Group, Reorder, Inject, Toolbar, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const toolbarOptions = ['Search'];
  return <GridComponent dataSource={data} allowSorting={true} allowPaging={true} allowResizing={true} toolbar={toolbarOptions} allowFiltering={true} allowReordering={true} allowGrouping={true} height={230}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} allowGrouping={false} allowResizing={false}/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' allowSorting={false}/>
      <ColumnDirective field='ShipCity' headerText='Ship City' width='100' allowReordering={false}/>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' allowSearching={false}/>
      <ColumnDirective field='Freight' headerText='Freight' width='100' format="C2" textAlign="Right" allowFiltering={false}/>
    </ColumnsDirective>
    <Inject services={[Sort, Filter, Group, Reorder, Toolbar, Page]} />
  </GridComponent>
};
export default App;


