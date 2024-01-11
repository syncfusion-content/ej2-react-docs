
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Inject, Toolbar, EditSettingsModel, ToolbarItems, SaveEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let orderData;
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const orderIDRules = { required: true };
    const freightRules = { required: true, min: 1, max: 1000 };
    const selectDatasource = [
        { text: 'Germany', value: 'Germany' },
        { text: 'France', value: 'France' },
        { text: 'Brazil', value: 'Brazil' },
        { text: 'Belgium', value: 'Belgium' },
        { text: 'Switzerland', value: 'Switzerland' },
        { text: 'Venezuela', value: 'Venezuela' },
        { text: 'Austria', value: 'Austria' },
        { text: 'Mexico', value: 'Mexico' },
    ];
    const editTemplate = () => {
        return (
            <div>
                <ComboBoxComponent id='ShipCountry' dataSource={selectDatasource} value={orderData.ShipCountry}></ComboBoxComponent>
            </div>
        )
    }

    const actionBegin = (args) => {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            orderData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            orderData['ShipCountry'] = args.data['ShipCountry'];
        }
    };
    return (<GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} actionBegin={actionBegin}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} width='100' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
            <ColumnDirective field='Freight' headerText='Freight' format='C2' width='120' editType='numericedit' validationRules={freightRules} />
            <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='120' editType='datepickeredit' />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='140' editTemplate={editTemplate} />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar]} />
    </GridComponent>
    );
};
export default App;