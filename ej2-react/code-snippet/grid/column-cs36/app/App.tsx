import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const addColumn = () => {
    let obj = { field: "Freight", headerText: 'Freight', width: 120 };
    (grid as GridComponent).columns.push(obj); //you can add the columns by using the Grid columns method
    (grid as GridComponent).refreshColumns();
  }
  return (<div> <ButtonComponent onClick={addColumn}>Add Columns</ButtonComponent>
    <GridComponent id="Grid" dataSource={data} allowPaging={true} enablePersistence={true} height={280}
      ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;