import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort, SortDirection, SortSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let dropColumn: DropDownListComponent | null;
  let dropdirection: DropDownListComponent | null;
  const columns: { [key: string]: Object; }[] = [
    { text: 'Order ID', value: 'OrderID' },
    { text: 'Customer ID', value: 'CustomerID' },
    { text: 'Freight', value: 'Freight' },
  ];
  const direction: { [key: string]: Object; }[] = [
    { text: 'Ascending', value: 'Ascending' },
    { text: 'Descending', value: 'Descending' },
  ];
  const field: Object = { text: 'text', value: 'value' };
  const sortingOptions: SortSettingsModel = {
    columns: [{ field: 'ShipName', direction: 'Ascending' }]
  };
  const addSortColumn = () => {
    (grid as GridComponent).sortColumn(((dropColumn as DropDownListComponent).value as string), ((dropdirection as DropDownListComponent).value as SortDirection), true);
  }
  return (<div>
    <div>
      <label style={{ padding: "30px 20px 0 0" }}> Column name :</label>
      <DropDownListComponent ref={dc => dropColumn = dc} index={0} width='120' dataSource={columns} fields={field}></DropDownListComponent></div>
    <div>
      <label style={{ padding: "30px 20px 0 0" }}> Sort direction :</label>
      <DropDownListComponent ref={dd => dropdirection = dd} index={0} width='120' dataSource={direction} fields={field}></DropDownListComponent></div>
    <ButtonComponent style={{ marginTop: "10px" }} cssClass='e-outline' onClick={addSortColumn}>Add Sort Column</ButtonComponent>
    <GridComponent ref={g => grid = g} dataSource={data} allowSorting={true} sortSettings={sortingOptions} height={200}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='100' format='C' textAlign="Right" />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
      </ColumnsDirective>
      <Inject services={[Sort]} />
    </GridComponent></div>)
};
export default App;


