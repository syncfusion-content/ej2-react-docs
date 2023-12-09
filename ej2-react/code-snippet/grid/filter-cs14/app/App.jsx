import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { Column, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data, stringOperatorsData, numericOperatorsData } from './datasource';

function App() {
  let grid;
  let operatorDrop;
  let fieldDrop;
  let availableOperator;
  let fieldData = [];
  let column;
  const dataBound = () => {
    fieldData = grid.getColumnFieldNames();
    fieldDrop.dataSource = fieldData
  }
  const onFieldChange = (args) => {
    operatorDrop.enabled = true;
    column = grid.getColumnByField(args.value);
    if(column) {
      availableOperator = column.type === 'string' ? stringOperatorsData : numericOperatorsData;
      operatorDrop.dataSource = availableOperator;
    }
  }
  const onOperatorChange = (args) => {
    let filterOptions = { operator: args.value, showFilterBarStatus: true };
    column.filter = filterOptions;
  }
  return (<div><div className="input-container">
    <label><b>Select Column</b> </label>
    <DropDownListComponent ref={field => fieldDrop = field} width={120} onChange={onFieldChange} placeholder="Eg: OrderID"></DropDownListComponent>
    <label><b>Select Operator</b> </label>
    <DropDownListComponent ref={operator => operatorDrop = operator} width={120} onChange={onOperatorChange} placeholder="Eg: Excel" enabled={false}></DropDownListComponent></div>
    <GridComponent ref={g => grid = g} dataSource={data} allowFiltering={true} allowPaging={true} dataBound={dataBound} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' format ='C' width='100' textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
      </ColumnsDirective>
      <Inject services={[Filter, Page]} />
    </GridComponent></div>)
}
export default App;