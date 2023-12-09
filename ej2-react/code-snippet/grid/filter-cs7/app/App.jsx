import { createElement } from '@syncfusion/ej2-base';
import { DataUtil } from '@syncfusion/ej2-data';
import { MultiSelect } from '@syncfusion/ej2-dropdowns';
import { ColumnDirective, ColumnsDirective, Grid } from '@syncfusion/ej2-react-grids';
import { Filter, FilterSettingsModel, GridComponent, IFilter, Inject } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const filterSettings = {
    type: 'Menu'
  };
  let dropInstance;
  const customFilter = {
    ui: {
      create: (args) => {
        const flValInput = createElement('input', { className: 'flm-input' });
        args.target.appendChild(flValInput);
        const fieldName = args.column.field;
        const columnData = data.map((item) => item[fieldName]);
        const dropdownData = DataUtil.distinct(columnData, fieldName);
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
        grid.removeFilteredColsByField(args.column.field);
        args.fltrObj.filterByColumn(args.column.field, args.operator, dropInstance.value);
      },
      write: (args) => {
        const fieldName = args.column.field;
        const filteredValue = [];

        grid.filterSettings.columns.forEach((item) => {
          if (item.field === fieldName && item.value) {
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
      <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign="Right" filter={customFilter} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
      <ColumnDirective field='ShipCity' headerText='ShipCity' width='140' textAlign="Right" />
      <ColumnDirective field='ShipName' headerText='ShipName' width='170' textAlign="Right" />
    </ColumnsDirective>
    <Inject services={[Filter]} />
  </GridComponent>
};
export default App;