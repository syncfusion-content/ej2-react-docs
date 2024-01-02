import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const onChange = (args: ChangeEventArgs) => {
    (grid as GridComponent).enableStickyHeader = args.checked;
  }
  return (<div>
    <label style={{ padding: "30px 20px 0 0" }}>Enable/Disable Sticky Header </label>
    <SwitchComponent change={onChange}></SwitchComponent>
    <GridComponent ref={g => grid = g} dataSource={data} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='OrderID' width='120' textAlign='Right' />
        <ColumnDirective field='CustomerID' headerText='CustomerID' width='150' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' />
        <ColumnDirective field='ShipAddress' headerText='ShipAddress' width='150' />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;