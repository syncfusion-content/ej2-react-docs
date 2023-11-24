
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ChipListComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import { orderDatas } from './datasource';

function App() {
  const dropData: string[] = ['Order Placed', 'Processing', 'Delivered'];
  const gridTemplate = (props) => {
    return (
      <tr>
        <td className="rows">
          <ChipListComponent id='chip' text={props.OrderID}></ChipListComponent>
        </td>
        <td className="rows">
          <NumericTextBoxComponent width={150} value={props.Quantity}></NumericTextBoxComponent>
        </td>
        <td className="rows">{props.ShipAddress}</td>
        <td className="rows">
          <DatePickerComponent width={100} value={props.OrderDate}></DatePickerComponent>
        </td>
        <td className="rows">
          <DropDownListComponent width={150} value={props.OrderStatus} dataSource={dropData} popupHeight={150} popupWidth={150}></DropDownListComponent>
        </td>
      </tr>
    );
  }
  return (<div>
    <GridComponent dataSource={orderDatas} rowTemplate={gridTemplate} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='180' />
        <ColumnDirective field='Quantity' headerText='Quantity' width='150' />
        <ColumnDirective field='ShipAddress' headerText='Ship Address' width='180' />
        <ColumnDirective field='OrderDate' headerText='Order Date' width='150' />
        <ColumnDirective field='OrderStatus' headerText='Order Status' width='150' />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;


