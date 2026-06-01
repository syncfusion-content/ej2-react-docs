import { GridComponent, ColumnsDirective, ColumnDirective, Filter, Page, Inject, Column } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data, numericOperatorsData, stringOperatorsData } from './datasource';

function App() {
  let grid: GridComponent | null;
  let operatorDropdown: DropDownListComponent | null;
  let column: Column;
  let fieldDrop: DropDownListComponent | null;
  let fieldData: string[];
  let availableOperators: object[];

  const dataBound = (): void => {
    fieldData = (grid as GridComponent).getColumnFieldNames();
    (fieldDrop as DropDownListComponent).dataSource = fieldData
  };

  const onFieldChange = (args: ChangeEventArgs): void => {
    availableOperators = [];
    (operatorDropdown as DropDownListComponent).enabled = true;
    column = (grid as GridComponent).getColumnByField(args.value as string);
    if (column) {
      availableOperators = column.type === 'string' ? stringOperatorsData : numericOperatorsData;
    }
    (operatorDropdown as DropDownListComponent).dataSource = availableOperators;
  };

  const onOperatorChange = (args: ChangeEventArgs): void => {
    (column as Column).filter = { operator: args.value as string };
  };

  return (
    <div>
      <div className='input-container'>
        <label className="dropdownLabel"><b>Select Column</b></label>
        <DropDownListComponent ref={(field) => (fieldDrop = field)} id='fields' placeholder='Eg: OrderID' change={onFieldChange} width={120} />
        <label className="dropdownLabel"><b>Select Operator</b></label>
        <DropDownListComponent id='operator' placeholder='Eg: Equal' enabled={false} ref={d => operatorDropdown = d} change={onOperatorChange} width={120} />
      </div>
      <GridComponent ref={g => grid = g} dataSource={data} allowFiltering={true} allowPaging={true} height='195px' dataBound={dataBound} >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' textAlign='Right' width='100' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
          <ColumnDirective field='Freight' headerText='Freight' width='100' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='120' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='120' />
        </ColumnsDirective>
        <Inject services={[Filter, Page]} />
      </GridComponent>
    </div>
  );
}

export default App;