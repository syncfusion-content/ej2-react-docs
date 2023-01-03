

import { createElement } from '@syncfusion/ej2-base';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, FilterSettingsModel, GridComponent, IFilter, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  const FilterOptions: FilterSettingsModel = {
    type: 'Menu'
  };
  let dropInstance: DropDownList;
  const FilterType: IFilter = {
    ui: {
      create: (args: { target: Element, column: object }) => {
        const flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
        args.target.appendChild(flValInput);
        dropInstance = new DropDownList({
          dataSource: new DataManager(data),
          fields: { text: 'OrderID', value: 'OrderID' },
          placeholder: 'Select a value',
          popupHeight: '200px'
        });
        dropInstance.appendTo(flValInput);
      },
      read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
        args.fltrObj.filterByColumn(args.column.field, args.operator, dropInstance.value);
      },
      write: (args: {
        column: object, target: Element, parent: any,
        filteredValue: number | string
      }) => {
        dropInstance.value = args.filteredValue;
      }
    }
  }
  return <GridComponent dataSource={data} filterSettings={FilterOptions} allowFiltering={true} height={273}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' filter={FilterType} width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' width='100' />
      <ColumnDirective field='EmployeeID' width='100' textAlign="Right" />
      <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right" />
      <ColumnDirective field='ShipCountry' width='100' />
    </ColumnsDirective>
    <Inject services={[Filter]} />
  </GridComponent>
};
export default App;


