import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Inject, Toolbar, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let orderData;
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const orderIDRules = { required: true };
    const customerIDRules = { required: true };

    const editTemplate = () => {
        return (
            <div>
                <MaskedTextBoxComponent id='CustomerNumber' name='CustomerNumber' mask={'000-000-0000'} value={orderData.CustomerNumber}></MaskedTextBoxComponent>
            </div>
        )
    }
    const actionBegin = (args) => {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            orderData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            orderData['CustomerNumber'] = args.data['CustomerNumber'];
        }
    };

    return (<GridComponent dataSource={data} editSettings={editOptions} allowPaging={true} toolbar={toolbarOptions} actionBegin={actionBegin}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' type='number' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} width='100' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' type='string' width='140' validationRules={customerIDRules} />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='140' />
            <ColumnDirective field='CustomerNumber' headerText='Customer Number' width='140' editTemplate={editTemplate} />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar, Page]} />
    </GridComponent>
    );
};
export default App;