

import { createElement } from '@syncfusion/ej2-base';
import { DataManager } from '@syncfusion/ej2-data';
import { ChangeEventArgs, DropDownList } from '@syncfusion/ej2-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Column, Filter, ForeignKey, Grid } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data, employeeData } from './datasource';

function App() {
  let grid: Grid | null;
  const filterBarTemplate = {
    create: (args: { element: Element, column: Column }) => {
      return createElement('input', { className: 'flm-input' });
    },
    write: (args: { element: Element, column: Column }) => {
      employeeData.splice(0, 0, { 'FirstName': 'All' }); // for clear filtering
      const dropInstance: DropDownList = new DropDownList({
        change: (arg: ChangeEventArgs) => {
          if (grid) {
            if (arg.value !== 'All') {
              grid.filterByColumn('EmployeeID', 'equal', arg.value);
            }
            else {
              grid.removeFilteredColsByField('EmployeeID');
            }
          }
        },
        dataSource: new DataManager(employeeData),
        fields: { text: 'FirstName' },
        index: 0,
        placeholder: 'Select a value',
        popupHeight: '200px'
      });
      dropInstance.appendTo(args.element as HTMLElement);
    }
  };
  return <GridComponent dataSource={data} height={280} allowFiltering={true} ref={g => grid = g}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
      <ColumnDirective field='EmployeeID' foreignKeyValue='FirstName' foreignKeyField='EmployeeID'
        dataSource={employeeData} headerText='Employee Name' width='150' filterBarTemplate={filterBarTemplate} />
      <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" format='C2' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
    </ColumnsDirective>
    <Inject services={[ForeignKey, Filter]} />
  </GridComponent>
};
export default App;


