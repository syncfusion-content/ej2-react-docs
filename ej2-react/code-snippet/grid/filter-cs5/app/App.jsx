import { createElement } from '@syncfusion/ej2-base';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const FilterOptions = {
        type: 'Menu'
    };
    let dropInstance;
    const FilterType = {
        ui: {
            create: (args) => {
                const flValInput = createElement('input', { className: 'flm-input' });
                args.target.appendChild(flValInput);
                dropInstance = new DropDownList({
                    dataSource: new DataManager(data),
                    fields: { text: 'OrderID', value: 'OrderID' },
                    placeholder: 'Select a value',
                    popupHeight: '200px'
                });
                dropInstance.appendTo(flValInput);
            },
            read: (args) => {
                args.fltrObj.filterByColumn(args.column.field, args.operator, dropInstance.value);
            },
            write: (args) => {
                dropInstance.value = args.filteredValue;
            }
        }
    };
    return <GridComponent dataSource={data} filterSettings={FilterOptions} allowFiltering={true} height={273}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' filter={FilterType} width='100' textAlign="Right"/>
      <ColumnDirective field='CustomerID' width='100'/>
      <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
      <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
      <ColumnDirective field='ShipCountry' width='100'/>
    </ColumnsDirective>
    <Inject services={[Filter]}/>
  </GridComponent>;
}
;
export default App;
