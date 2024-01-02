import { ColumnDirective, ColumnsDirective, Edit, GridComponent, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    return (<GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} height={270}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
            <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
        </ColumnsDirective>
        <Inject services={[Toolbar, Edit]} />
    </GridComponent>);
}
export default App;
