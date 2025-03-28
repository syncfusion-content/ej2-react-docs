import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { RadioButtonComponent } from "@syncfusion/ej2-react-buttons";
import * as React from 'react';
import { data } from './datasource';

function App() {
  const orderStatusTemplate = (({ OrderID, OrderStatus }) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "8px" }}>
        <RadioButtonComponent label="Pending" name={`radio-${OrderID}`} cssClass="e-success" checked={OrderStatus === "Pending"} />
        <RadioButtonComponent label="Confirmed" name={`radio-${OrderID}`} cssClass="e-success" checked={OrderStatus === "Confirmed"} />
        <RadioButtonComponent label="Shipped" name={`radio-${OrderID}`} cssClass="e-success" checked={OrderStatus === "Shipped"} />
      </div>
    )
  })
  return (
    <div>
      <GridComponent dataSource={data} height={315} enableHover={false}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='OrderID' width='100' />
          <ColumnDirective field='CustomerID' headerText='CustomerID' width='120' />
          <ColumnDirective field='Freight' headerText='Freight' format='C' textAlign="Right" width='120' />
          <ColumnDirective field="OrderDate" headerText="Order Date" textAlign="Right" format="yMd" type="date" width={140} />
          <ColumnDirective headerText='Order Status' width='200' template={orderStatusTemplate} />
        </ColumnsDirective>
      </GridComponent>
    </div>
  )
}
export default App;