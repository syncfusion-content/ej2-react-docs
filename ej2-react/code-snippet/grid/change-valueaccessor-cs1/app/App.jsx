import { ColumnDirective, ColumnModel, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
  let grid;
  let dropDown;
  let textBox;
  const field = { text: 'text', value: 'value' };
  const alignmentData = [
    { text: 'OrderID', value: 'OrderID' },
    { text: 'CustomerID', value: 'CustomerID' },
    { text: 'Freight', value: 'Freight' },
    { text: 'OrderDate', value: 'OrderDate' },
  ];

  const changeHeaderText = ((args) => {
    grid.refreshHeader();
  });

  const headerValueAccessor = ((field, columns) => {
    if (textBox && textBox.value && textBox.value.trim() !== '' && columns.field === dropDown.value) {
      return columns.headerText = textBox.value;
    }
  });

  return (
    <div>
      <label style={{ padding: '10px 10px 26px 0' }}>Select column name  :</label>
      <DropDownListComponent dataSource={alignmentData} ref={d => dropDown = d} index={0} width="100" fields={field}></DropDownListComponent><br/>
      <label style={{ padding: '30px 17px 0 0' }}>Enter new header text :</label>
      <TextBoxComponent ref={t => textBox = t} placeholder="Enter new header text" width='200' />
      <label style={{ padding: '30px 17px 0 0' }}>Click the change button :</label>
      <ButtonComponent id="button" cssClass="e-outline" onClick={changeHeaderText}>Change</ButtonComponent>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent dataSource={data} height={315} ref={g => grid = g} >
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
            <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
            <ColumnDirective field='OrderDate' headerText='Order Date' headerValueAccessor={headerValueAccessor} format='yMd' width='120' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;