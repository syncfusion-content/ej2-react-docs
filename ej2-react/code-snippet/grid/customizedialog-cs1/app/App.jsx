import { L10n } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

L10n.load({
    'en-US': {
        grid: {
            'SaveButton': 'Submit',
            'CancelButton': 'Discard'
        }
    }
});

function App() {
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    const toolbarOptions = ['Add', 'Edit', 'Delete'];
    const orderIDRules = { required: true, number: true };
    const customerIDRules = { required: true, minLength: 3 };
    const freightIDRules = { required: true, min: 1, max: 1000 };
    const actionComplete = (args) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            const dialog = args.dialog;
            dialog.showCloseIcon = false;
            dialog.height = 300;
            dialog.width = 300;
            // change the header of the dialog
            dialog.header = args.requestType === 'beginEdit' ? 'Edit Record of ' + args.rowData['CustomerID'] : 'New Customer';
        }
    }
    return <GridComponent dataSource={data} actionComplete={actionComplete} editSettings={editOptions} toolbar={toolbarOptions} height={265}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' type="number" textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' type="string" validationRules={customerIDRules} />
            <ColumnDirective field='Freight' headerText='Freight' width='120' editType="numericedit" format="C" textAlign="Right" validationRules={freightIDRules} />
            <ColumnDirective field='ShipCountry' editType='dropdownedit' headerText='Ship Country' width='150' />
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar]} />
    </GridComponent>
};
export default App;