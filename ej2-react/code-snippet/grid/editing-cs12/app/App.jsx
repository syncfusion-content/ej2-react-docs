import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let orderData;
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const orderIDRules = { required: true };
    const customerIDRules = { required: true, minLength: 5 };
    const freightRules = { required: true, min: 1, max: 1000 };
    const multiselectDatasource = [
        { value: 'Reims', text: 'Reims' },
        { value: 'Münster', text: 'Münster' },
        { value: 'Rio de Janeiro', text: 'Rio de Janeiro' },
        { value: 'Lyon', text: 'Lyon' },
        { value: 'Charleroi', text: 'Charleroi' }
    ];
    const fields = { value: 'value', text: 'text' };
    const editTemplate = () => {
        return (
            <div>
                <MultiSelectComponent id='ShipCity' dataSource={multiselectDatasource} fields={fields} value={orderData.ShipCity}></MultiSelectComponent>
            </div>
        )
    }

    const actionBegin = (args) => {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            orderData = Object.assign({}, args.rowData);
            orderData['ShipCity'] = orderData['ShipCity'] ? (orderData['ShipCity'].toString()).split(',') : [];

        }
        if (args.requestType === 'save') {
            orderData['ShipCity'] = args.data['ShipCity'].join(', ');
        }
    };
    return (<GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} actionBegin={actionBegin}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} width='100' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' validationRules={customerIDRules} />
            <ColumnDirective field='Freight' headerText='Freight' format="C2" textAlign="Right" editType='numericedit' width='120' validationRules={freightRules} />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='140' editTemplate={editTemplate} />
            <ColumnDirective field='OrderDate' headerText='Order Date' format="yMd" width='150' />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar]} />
    </GridComponent>
    );
};
export default App;