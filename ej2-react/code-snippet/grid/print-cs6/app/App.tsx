import { ColumnDirective, ColumnsDirective, GridComponent, PageSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Toolbar } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const pageOptions: PageSettingsModel = { pageSize: 6 };
  const [dataSource, setDataSource] = useState(data);
  const selectionSettings: SelectionSettingsModel = { type: 'Multiple' };
  const beforePrint = () => {
    const rows = (grid as GridComponent).getSelectedRows();
    if (rows && rows.length) {
      setDataSource(rows);
    }
  }
  return ((<div>
    <GridComponent ref={g => grid = g} dataSource={dataSource} toolbar={['Print']} allowPaging={true} pageSettings={pageOptions} selectionSettings={selectionSettings} beforePrint={beforePrint}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
      </ColumnsDirective>
      <Inject services={[Toolbar, Page]} />
    </GridComponent ></div>))
};
export default App;