import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { Column, ColumnDirective, ColumnsDirective, FilterSettingsModel } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let typeDrop: DropDownListComponent | null;
  let fieldDrop: DropDownListComponent | null;
  const filterSettings: FilterSettingsModel = { type: 'Menu' };
  let columnFilterSettings: FilterSettingsModel;
  let fieldData: string[] = [];
  let column: Column;
  const dataBound = () => {
    fieldData = (grid as GridComponent).getColumnFieldNames();
    (fieldDrop as DropDownListComponent).dataSource = fieldData
  }
  const onFieldChange = (args: ChangeEventArgs) => {
    (typeDrop as DropDownListComponent).enabled = true;
    (typeDrop as DropDownListComponent).dataSource = ['Menu', 'CheckBox', 'Excel'];
    column = (grid as GridComponent).getColumnByField(args.value);
  }
  const onTypeChange = (args: ChangeEventArgs) => {
    columnFilterSettings = { type: args.value };
    column.filter = columnFilterSettings;
    (grid as GridComponent).refreshColumns();
  }
  return (<div><div className="input-container">
    <label><b>Select Column</b> </label>
    <DropDownListComponent ref={field => fieldDrop = field} width={120} onChange={onFieldChange} placeholder="Eg: OrderID"></DropDownListComponent>
    <label><b>Select Filter Type</b> </label>
    <DropDownListComponent ref={type => typeDrop = type} width={120} onChange={onTypeChange} placeholder="Eg: Excel" enabled={false}></DropDownListComponent></div>
    <GridComponent ref={g => grid = g} dataSource={data} allowFiltering={true} filterSettings={filterSettings} dataBound={dataBound} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
        <ColumnDirective field='ShipRegion' headerText='Ship Region' width='100' textAlign="Right" />
      </ColumnsDirective>
      <Inject services={[Filter]} />
    </GridComponent></div>)
}
export default App;