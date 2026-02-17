import { ColumnDirective, ColumnModel, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
  let grid: Grid | null;
  let dropDown: DropDownListComponent | null;
  let textBox: any;
  const field: Object = { text: 'text', value: 'value' };
  const alignmentData: any = [
    { text: 'OrderID', value: 'OrderID' },
    { text: 'CustomerID', value: 'CustomerID' },
    { text: 'Freight', value: 'Freight' },
    { text: 'OrderDate', value: 'OrderDate' },
  ];

  const changeHeaderText = ((args: any) => {
    (grid as any).refreshHeader();
  });

  const headerValueAccessor = ((field: string, columns: ColumnModel) => {
    if (textBox && textBox.value && textBox.value.trim() !== '' && columns.field === (dropDown as any).value) {
      return columns.headerText = textBox.value;
    }
  });

  return (
    <div>
      <label style={{ padding: '10px 10px 10px 0' }}>Select column name  :</label>
      <DropDownListComponent dataSource={alignmentData} ref={d => dropDown = d} index={0} width="100" fields={field}></DropDownListComponent><br/>
      <label style={{ padding: '10px 17px 0 0' }}>Enter new header text :</label>
      <TextBoxComponent ref={t => textBox = t} placeholder="Enter new header text" width='200' />
      <label style={{ padding: '10px 17px 0 0' }}>Click the change button :</label>
      <ButtonComponent id="button" cssClass="e-outline" onClick={changeHeaderText}>Change</ButtonComponent>
      <div style={{ padding: '20px 0 0 0' }}>
        <GridComponent dataSource={data} height={250} ref={g => grid = g} >
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
            <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
            <ColumnDirective field='OrderDate' headerText='Order Date' headerValueAccessor={headerValueAccessor} format='yMd' width='120' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;