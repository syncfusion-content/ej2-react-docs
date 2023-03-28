

import { getValue } from '@syncfusion/ej2-base';
import { Column, ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let tooltip: any;
  let grid: Grid | null;
  const beforeRender = (args) => {
    // event triggered before render the tooltip on target element.
    tooltip.content = args.target.closest("td").innerText;
  }
  return <div>
    <TooltipComponent ref={t => tooltip = t} target='.e-rowcell' beforeRender={beforeRender}>
      <GridComponent dataSource={data} height={320} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
          <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right" />
          <ColumnDirective field='Freight' headerText='Freight' width='100' format="C2" textAlign="Right" />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        </ColumnsDirective>
      </GridComponent>
    </TooltipComponent></div>
}
export default App;


