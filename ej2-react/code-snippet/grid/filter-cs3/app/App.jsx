import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const templateOptions = {
        create: (args) => {
            const dd = document.createElement('input');
            dd.id = 'EmployeeID';
            return dd;
        },
        write: (args) => {
            let DropDownListObj = new DropDownList({
                dataSource: ['All', '1', '3', '4', '5', '6', '8', '9'],
                fields: { text: 'EmployeeID', value: 'EmployeeID' },
                placeholder: 'Select a value',
                popupHeight: '200px',
                change: function (e) {
                    let gridObj = document.getElementsByClassName('e-grid')[0].ej2_instances[0];
                    if (e.value == 'All') {
                        gridObj.removeFilteredColsByField('EmployeeID');
                    }
                    else {
                        gridObj.filterByColumn('EmployeeID', 'equal', parseInt(e.value));
                    }
                }
            });
            DropDownListObj.appendTo('#EmployeeID');
        },
    };
    return <GridComponent dataSource={data} allowFiltering={true} height={273} ref={g => grid = g}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
      <ColumnDirective field='CustomerID' width='100'/>
      <ColumnDirective field='EmployeeID' width='100' filterBarTemplate={templateOptions} textAlign="Right"/>
      <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
      <ColumnDirective field='ShipCountry' width='100'/>
    </ColumnsDirective>
    <Inject services={[Filter]}/>
  </GridComponent>;
}
;
export default App;
