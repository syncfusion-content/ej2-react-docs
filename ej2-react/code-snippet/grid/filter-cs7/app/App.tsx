

import { createElement } from '@syncfusion/ej2-base';
import { DataManager } from '@syncfusion/ej2-data';
import { MultiSelect, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, FilterSettingsModel, GridComponent, IFilter, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';
MultiSelect.Inject(CheckBoxSelection);

function App() {
  let grid: Grid | null;
  const filterSettings: FilterSettingsModel = {
    type: 'Menu'
  };
  let dropInstance: MultiSelect;
  const customFilter: IFilter = {
    ui: {
      create: (args: { target: Element, column: object }) => {
        const flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
        args.target.appendChild(flValInput);
        dropInstance = new MultiSelect({
          dataSource: new DataManager(data),
          fields: { text: 'OrderID', value: 'OrderID' },
          placeholder: 'Select a value',
          popupHeight: '200px',
          allowFiltering: true,
          mode: 'CheckBox'
        });
        dropInstance.appendTo(flValInput);
      },
      read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
        grid.removeFilteredColsByField(args.column.field);
        args.fltrObj.filterByColumn(args.column.field, 'contains', dropInstance.value);
      },
      write: (args: {
        column: object, target: Element, parent: any,
        filteredValue: number | string
      }) => {
        let filteredValue: any = [];
        grid.filterSettings.columns.map((item) => {
          if (item.field === 'OrderID' && item.value) {
            filteredValue.push(item.value);
          }
        });
        if (filteredValue.length > 0) {
          dropInstance.value = filteredValue;
        }
      }
    }
  }
  return <GridComponent ref={g => grid = g} dataSource={data} filterSettings={filterSettings} allowFiltering={true} height={273}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' filter={customFilter} width='100' textAlign="Right" />
      <ColumnDirective field='CustomerID' width='100' />
      <ColumnDirective field='EmployeeID' width='100' textAlign="Right" />
      <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right" />
      <ColumnDirective field='ShipCountry' width='100' />
    </ColumnsDirective>
    <Inject services={[Filter, CheckBoxSelection]} />
  </GridComponent>
};
export default App;


