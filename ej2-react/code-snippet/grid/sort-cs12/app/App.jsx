import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort, SortSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const sortingOptions = {
    columns: [{ field: 'CustomerID', direction: 'Ascending' }, { field: 'ShipName', direction: 'Descending' }]
  };
  const clearSorting = () => {
    grid.clearSorting();
  }
  return (<div>
    <ButtonComponent style={{ marginTop: "10px" }} cssClass='e-outline' onClick={clearSorting}>Clear Sorting</ButtonComponent>
    <GridComponent ref={g => grid = g} dataSource={data} allowSorting={true} sortSettings={sortingOptions} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Sort]} />
    </GridComponent></div>)
};
export default App;