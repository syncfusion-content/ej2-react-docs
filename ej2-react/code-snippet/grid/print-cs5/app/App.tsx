

import { Column, ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page, PageSettingsModel, Toolbar, ToolbarItems, PrintEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const toolbar: ToolbarItems[] = ['Print'];
  let grid: GridComponent | null;
  const pageOptions: PageSettingsModel = { pageSize: 6 };
  const toolbarClick = (args: PrintEventArgs) => {
    if (args.item.text === 'Print') {
      for (const column of ((grid as GridComponent).columns)) {
        if ((column as Column).field === "CustomerID") {
          (column as Column).visible = true;
        }
        else if ((column as Column).field === "ShipCity") {
          (column as Column).visible = false;
        }
      }
    }
  }
  const printComplete = () => {
    for (const column of ((grid as GridComponent).columns)) {
      if ((column as Column).field === "CustomerID") {
        (column as Column).visible = false;
      }
      else if ((column as Column).field === "ShipCity") {
        (column as Column).visible = true;
      }
    }
  }
  return (<GridComponent ref={g => grid = g} dataSource={data} toolbar={toolbar}
    allowPaging={true} pageSettings={pageOptions} toolbarClick={toolbarClick}
    printComplete={printComplete}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' visible={false} width='150' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
    </ColumnsDirective>
    <Inject services={[Toolbar, Page]} />
  </GridComponent >)
};
export default App;


