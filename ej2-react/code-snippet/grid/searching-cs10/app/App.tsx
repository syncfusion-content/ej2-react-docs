import { SwitchComponent, ChangeEventArgs } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Search } from '@syncfusion/ej2-react-grids';
import { Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
  let grid: GridComponent | null;
  const valueChange = (args: ChangeEventArgs) => {
    (grid as GridComponent).searchSettings.ignoreAccent = args.checked;
  }
  return (<div>
    <label style={{ padding: "10px 10px" }}>Enable or disable ignoreAccent property:</label>
    <SwitchComponent id='switch' change={valueChange}></SwitchComponent>
    <GridComponent ref={g => grid = g} dataSource={data} height={280} toolbar={['Search']} >
      <ColumnsDirective>
        <ColumnDirective field='CategoryName' headerText='Category Name' width='100' textAlign="Right" />
        <ColumnDirective field='ProductName' headerText='Product Name' width='100' />
        <ColumnDirective field='QuantityPerUnit' headerText='Quantity Per Unit' width='100' textAlign="Right" />
        <ColumnDirective field='UnitsInStock' headerText='Units In Stock' width='100' />
      </ColumnsDirective>
      <Inject services={[Toolbar, Search]} />
    </GridComponent>
  </div>);
};
export default App;