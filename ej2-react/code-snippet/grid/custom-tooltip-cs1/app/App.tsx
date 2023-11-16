
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { TooltipComponent, TooltipEventArgs } from '@syncfusion/ej2-react-popups';
function App() {
  let toolTip: TooltipComponent | null;
  const beforeRender = ((args: TooltipEventArgs) => {
    if (args.target.classList.contains('e-rowcell')) {
      (toolTip as TooltipComponent).content = 'This is value "' + args.target.innerText + '" ';
    }
  });
  return (
    <div>
      <TooltipComponent ref={t => toolTip = t} beforeRender={beforeRender} target=".e-rowcell">
        <GridComponent dataSource={data} height={315}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='OrderID' width='100' />
            <ColumnDirective field='CustomerID' headerText='CustomerID' width='120' />
            <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
            <ColumnDirective field='ShipCity' headerText='ShipCity' width='120' />
          </ColumnsDirective>
        </GridComponent></TooltipComponent></div>)
}
export default App;
