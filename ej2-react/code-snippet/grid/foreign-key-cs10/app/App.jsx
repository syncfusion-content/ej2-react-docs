import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GridComponent, ColumnsDirective, ColumnDirective, ForeignKey, Inject, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import { data, employeeData } from '../datasource.ts';
class App extends React.Component {
    editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    render() {
        return <GridComponent dataSource={data} editSettings={this.editOptions} toolbar={this.toolbarOptions} height={315}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"></ColumnDirective>
                <ColumnDirective field='EmployeeID' foreignKeyValue='FirstName' foreignKeyField='EmployeeID' dataSource={employeeData} headerText='Employee Name' width='150'></ColumnDirective>
                <ColumnDirective field='Freight' headerText='Freight' width='80' textAlign="Right" format='C2'></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[ForeignKey, Edit, Toolbar]}/>
        </GridComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('grid'));
