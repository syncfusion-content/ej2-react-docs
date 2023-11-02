import { createElement, getValue } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { AutoComplete } from '@syncfusion/ej2-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Edit, ForeignKey, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data, employeeData } from './datasource';
function App() {
    let autoComplete;
    const editOption = { allowEditing: true };
    const toolbar = ['Edit', 'Update', 'Cancel'];
    const edit = {
        create: () => { // to create input element
            return createElement('input');
        },
        destroy: () => { // to destroy the custom component.
            autoComplete.destroy();
        },
        read: () => { // return edited value to update data source
            const value = new DataManager(employeeData).executeLocal(new Query().where('FirstName', 'equal', autoComplete.value));
            return value.length && getValue('EmployeeID', value[0]); // to convert foreign key value to local value.
        },
        write: (args) => { // to show the value for date picker
            autoComplete = new AutoComplete({
                dataSource: new DataManager(employeeData),
                fields: { value: args.column.foreignKeyValue },
                value: args.foreignKeyData[0][args.column.foreignKeyValue]
            });
            autoComplete.appendTo(args.element);
        }
    };
    return <GridComponent dataSource={data} height={280} editSettings={editOption} toolbar={toolbar}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}/>
      <ColumnDirective field='EmployeeID' foreignKeyValue='FirstName' foreignKeyField='EmployeeID' dataSource={employeeData} headerText='Employee Name' width='150' edit={edit}/>
      <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" format='C2' editType='numericedit'/>
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100'/>
    </ColumnsDirective>
    <Inject services={[ForeignKey, Edit, Toolbar]}/>
  </GridComponent>;
}
;
export default App;
