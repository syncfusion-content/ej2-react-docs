import { ColumnDirective, ColumnsDirective, Freeze, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
  let grid;
  let textBox;
  const frozenRows = () => {
    grid.frozenRows = textBox.value;
  }
  return (
    <div>
      <label style={{ padding: "10px 10px 26px 0" }}> Change the frozen rows: </label>
      <NumericTextBoxComponent ref={t => textBox = t} id='frozenrows' min={0} max={5} validateDecimalOnType={true} decimals={0} value={2} format='n' width='150'></NumericTextBoxComponent>
      <ButtonComponent style={{ marginLeft: "5px" }} onClick={frozenRows}>UPDATE</ButtonComponent>
      <GridComponent ref={g => grid = g} dataSource={data} height={315} frozenRows={2}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='150' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='180' />
          <ColumnDirective field='Freight' headerText='Freight' width='120' textAlign='Right' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='200' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='180' />
          <ColumnDirective field='ShipRegion' headerText='Ship Region' width='220' />
          <ColumnDirective field='ShipAddress' headerText='Ship Address' width='200' />
          <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Freeze]} />
      </GridComponent></div>)
}
export default App;