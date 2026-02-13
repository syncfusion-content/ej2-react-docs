import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const dropDownData: { [key: string]: Object; }[] = [
    { text: 'Select count' },
    { text: '10', value: '10' },
    { text: '20', value: '20' },
    { text: '30', value: '30' },
    { text: '80', value: '80' },
    { text: '100', value: '100' },
    { text: '200', value: '200' },
    { text: '232', value: '232' },
    { text: '300', value: '300' },
    { text: '500', value: '500' },
    { text: '800', value: '800' },
    { text: '820', value: '850' },
    { text: '920', value: '920' },
    { text: '2020', value: '2020' },
    { text: '3000', value: '3000' },
    { text: '4000', value: '4000' },
    { text: '4999', value: '4999' }

  ];
  const onChange = (args: ChangeEventArgs) => {
    (grid as GridComponent).selectionModule.selectRow(parseInt((args.value as string), 10));
  }
  const rowSelected = () => {
    const rowHeight: number = (grid as GridComponent).getRows()[(grid as GridComponent).getSelectedRowIndexes()[0]].scrollHeight;
    (grid as GridComponent).getContent().children[0].scrollTop = rowHeight * (grid as GridComponent).getSelectedRowIndexes()[0];
  }
  return (<div>
    <label style={{ padding: "30px 20px 0 0" }} > Select row index :</label>
    <DropDownListComponent index={0} width={200} dataSource={dropDownData} change={onChange}></DropDownListComponent>
    <GridComponent dataSource={data} height="315" width="100%"
      rowSelected={rowSelected} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' />
        <ColumnDirective field='ShipAddress' headerText='Ship Address' width='150' />
      </ColumnsDirective>
    </GridComponent></div>)
};
export default App;