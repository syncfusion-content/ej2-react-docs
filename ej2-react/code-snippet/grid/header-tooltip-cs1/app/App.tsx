
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { TooltipComponent, TooltipEventArgs } from '@syncfusion/ej2-react-popups';
function App() {
  let toolTip: TooltipComponent | null;
  const columnDescriptions: Object = {
    "OrderID": "A unique number assigned to each order.",
    "Freight": "The cost of shipping the order.",
    "ShipName": "The name of the person or company who will receive the shipment.",
    "ShipCountry": "The country to which the shipment will be sent.",
  };
  const beforeRender = ((args: TooltipEventArgs) => {
    const description = (columnDescriptions as any)[(args as any).target.innerText];
    if (description) {
      (toolTip as TooltipComponent).content = (args as any).target.innerText + ": " + description;
    }
  });
  return (
    <div>
      <TooltipComponent ref={t => toolTip = t} beforeRender={beforeRender} target=".e-headertext">
        <GridComponent dataSource={data} height={315}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='OrderID' width='100' />
            <ColumnDirective field='Freight' headerText='Freight' width='120' format='C' />
            <ColumnDirective field='ShipName' headerText='ShipName' width='80' />
            <ColumnDirective field='ShipCountry' headerText='ShipCountry' width='120' />
          </ColumnsDirective>
        </GridComponent>
      </TooltipComponent></div>)
}
export default App;
