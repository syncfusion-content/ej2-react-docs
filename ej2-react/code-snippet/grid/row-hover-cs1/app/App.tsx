import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  const [enableRowHover, setEnableRowHover] = useState(true);
  const changeValue = (() => {
    setEnableRowHover(!enableRowHover);
  });
  return (
    <div>
      <label style={{ padding: "10px 10px" }}>
        Enable/Disable Row Hover
      </label>
      <SwitchComponent id="switch" checked={enableRowHover} change={changeValue}></SwitchComponent>
      <GridComponent dataSource={data} enableHover={enableRowHover}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
          <ColumnDirective field='Freight' headerText='Freight' width='100' />
          <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;


