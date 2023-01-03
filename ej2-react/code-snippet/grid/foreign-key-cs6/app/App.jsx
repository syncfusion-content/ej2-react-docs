import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GridComponent, ColumnsDirective, ColumnDirective, ForeignKey, Edit, Toolbar, Inject } from '@syncfusion/ej2-react-grids';
import { createElement } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { AutoComplete } from '@syncfusion/ej2-react-dropdowns';
import { data, employeeData } from '../datasource.ts';
class App extends React.Component {
    autoComplete;
    grid;
    editOption = { allowEditing: true };
    toolbar = ['Edit', 'Update', 'Cancel'];
    edit = {
        create: () => {
            return createElement('input');
        },
        read: () => {
            let value = new DataManager(employeeData).executeLocal(new Query().where('FirstName', 'equal', this.autoComplete.value));
            return value.length && value[0]['EmployeeID']; // to convert foreign key value to local value.
        },
        destroy: () => {
            this.autoComplete.destroy();
        },
        write: (args) => {
            this.autoComplete = new AutoComplete({
                dataSource: employeeData,
                fields: { value: args.column.foreignKeyValue },
                value: args.foreignKeyData[0][args.column.foreignKeyValue]
            });
            this.autoComplete.appendTo(args.element);
        }
    };
    render() {
        return <GridComponent dataSource={data} height={280} editSettings={this.editOption} toolbar={this.toolbar} ref={g => this.grid = g}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}></ColumnDirective>
                <ColumnDirective field='EmployeeID' foreignKeyValue='FirstName' foreignKeyField='EmployeeID' dataSource={employeeData} headerText='Employee Name' width='150' edit={this.edit}></ColumnDirective>
                <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" format='C2' editType='numericedit'></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100'></ColumnDirective>
            </ColumnsDirective>
                <Inject services={[ForeignKey, Edit, Toolbar]}/>
        </GridComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('grid'));
