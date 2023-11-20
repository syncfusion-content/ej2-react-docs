import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Sort, Filter, Group, Reorder, Inject, Toolbar, Page, ColumnModel } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const addColumn = (() => {
    const newColumns: ColumnModel[] = [
      { field: 'EmployeeID', headerText: 'EmployeeID', width: 120 },
      { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd' },
    ];
    for (const col of newColumns) {
      (grid as any).columns.push(col);
    }
    (grid as any).refreshColumns();
  });
  const deleteColumn = (() => {
    (grid as any).columns.pop();
    (grid as any).refreshColumns();
  });
  return (<div>
    <ButtonComponent id='btnAdd' cssClass='e-info' onClick={addColumn}>Add Column</ButtonComponent>
    <ButtonComponent id='btnDel' cssClass='e-info' onClick={deleteColumn}>Delete Column</ButtonComponent>
    <GridComponent dataSource={data} ref={g => grid = g} height={230}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} allowGrouping={false} allowResizing={false} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' allowSorting={false} />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' allowReordering={false} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' allowSearching={false} />
        <ColumnDirective field='Freight' headerText='Freight' width='100' format="C2" textAlign="Right" allowFiltering={false} />
      </ColumnsDirective>
      <Inject services={[Sort, Filter, Group, Reorder, Toolbar, Page]} />
    </GridComponent>
  </div>)
};
export default App;