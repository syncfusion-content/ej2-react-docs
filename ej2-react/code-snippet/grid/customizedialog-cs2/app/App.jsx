import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    const toolbarOptions = ['Add', 'Edit', 'Delete'];
    const orderIDRules = { required: true, number: true };
    const customerIDRules = { required: true, minLength: 3 };
    const freightIDRules = { required: true, min: 1, max: 1000 };
    const actionBegin = (args) => {
        if (grid && args.requestType === 'beginEdit') {
            const cols = grid.columns;
            for (const col of cols) {
                if (col.field === "CustomerID") {
                    col.visible = true;
                }
                else if (col.field === "ShipCountry") {
                    col.visible = false;
                }
            }
        }
        if (grid && args.requestType === 'add') {
            const cols = grid.columns;
            for (const col of cols) {
                if (col.field === "CustomerID") {
                    col.visible = true;
                }
            }
        }
        if (grid && args.requestType === 'save') {
            const cols = grid.columns;
            for (const col of cols) {
                if (col.field === "CustomerID") {
                    col.visible = false;
                }
                else if (col.field === "ShipCountry") {
                    col.visible = true;
                }
            }
        }
    }
    return <GridComponent dataSource={data} actionBegin={actionBegin} editSettings={editOptions} toolbar={toolbarOptions} height={265} ref={g => grid = g}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' visible={false} validationRules={customerIDRules} />
            <ColumnDirective field='Freight' headerText='Freight' width='120' editType="numericedit" format="C2" textAlign="Right" validationRules={freightIDRules} />
            <ColumnDirective field='ShipCountry' editType='dropdownedit' headerText='Ship Country' width='150' />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar]} />
    </GridComponent>
};
export default App;