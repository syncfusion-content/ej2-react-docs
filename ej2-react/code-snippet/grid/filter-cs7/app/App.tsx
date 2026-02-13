import { createElement } from '@syncfusion/ej2-base';
import { DataUtil } from '@syncfusion/ej2-data';
import { MultiSelect } from '@syncfusion/ej2-dropdowns';
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, FilterSettingsModel, GridComponent, IFilter, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  const filterSettings: FilterSettingsModel = {
    type: 'Menu'
  };
  let dropInstance: MultiSelect;
  const customFilter: IFilter = {
    ui: {
      create: (args) => {
        const flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
        args.target.appendChild(flValInput);
        const fieldName: string = args.column.field;
        const columnData: object[] = data.map((item) => item [fieldName as string]);
        const dropdownData: object[] = DataUtil.distinct(columnData, fieldName);
        dropInstance = new MultiSelect({
          dataSource: dropdownData,
          placeholder: 'Select a value',
          popupHeight: '200px',
          allowFiltering: true,
          mode: 'Delimiter'
        });
        dropInstance.appendTo(flValInput);
      },
      read: (args) => {
        (grid as GridComponent).removeFilteredColsByField(args.column.field);
        args.fltrObj.filterByColumn(args.column.field, args.operator, dropInstance.value);
      },
      write: (args) => {
        const fieldName: string = args.column.field;
        const filteredValue: object[] = [];

        (grid as GridComponent).filterSettings.columns.forEach((item) => {
          if (item.field === fieldName && item.value) {
            filteredValue.push(item.value);
          }
        });

        if (filteredValue.length > 0) {
          (dropInstance as MultiSelect).value = filteredValue;
        }
      }
    }
  }
  return <GridComponent ref={g => grid = g} dataSource={data} filterSettings={filterSettings} allowFiltering={true} height={273}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign="Right" filter={customFilter} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='140' textAlign="Right" />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='170' textAlign="Right" />
    </ColumnsDirective>
    <Inject services={[Filter]} />
  </GridComponent>
};
export default App;