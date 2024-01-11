import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let orderData;
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const orderIDRules = { required: true };
    const freightRules = { required: true, min: 1, max: 1000 };
    const editTemplate = () => {
        return (
            <div>
                <TimePickerComponent id='OrderDate' value={orderData.OrderDate}></TimePickerComponent>
            </div>
        )
    }

    const actionBegin = (args) => {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            orderData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            orderData['OrderDate'] = args.data['OrderDate'];
        }
    };
    return (<GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} actionBegin={actionBegin}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} width='100' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
            <ColumnDirective field='Freight' headerText='Freight' format="C2" textAlign="Right" editType='numericedit' width='120' validationRules={freightRules} />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='140' />
            <ColumnDirective field='OrderDate' headerText='Order Time' format="hh:mm aa" editTemplate={editTemplate} width='150' />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar]} />
    </GridComponent>
    );
};
export default App;