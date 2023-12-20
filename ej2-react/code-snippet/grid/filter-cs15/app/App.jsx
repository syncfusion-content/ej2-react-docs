import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject, Page, Sort, PageSettingsModel } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const pageSettings = { pageSize: 6 };
  const clearFilter = () => {
    grid.clearFiltering();
  }
  return (<div>
    <ButtonComponent cssClass='e-primary' onClick={clearFilter}>Clear Filter</ButtonComponent>
    <GridComponent ref={g => grid = g} dataSource={data} allowFiltering={true} pageSettings={pageSettings} allowSorting={true} allowPaging={true}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' format='C' width='100' textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
      </ColumnsDirective>
      <Inject services={[Filter, Page, Sort]} />
    </GridComponent>
  </div>)
}
export default App;