import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const dropData = ['Order Placed', 'Processing', 'Delivered'];
  const dropDownTemplate = ((props) => {
    return (
      <div>
        <DropDownListComponent value={props.OrderStatus} width="100" dataSource={dropData} popupHeight='150' popupWidth='150' ></DropDownListComponent>
      </div>
    )
  })
  return (
    <div>
      <GridComponent dataSource={data} height={315} enableHover={false}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='OrderID' width='100' />
          <ColumnDirective field='CustomerID' headerText='CustomerID' width='120' />
          <ColumnDirective field='Freight' headerText='Freight' format='C' width='120' />
          <ColumnDirective headerText='Order Status' width='200' template={dropDownTemplate} />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;