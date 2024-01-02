import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const editSettings = { allowAdding: true, allowDeleting: true, allowEditing: true };
    const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    return (<div>
        <GridComponent dataSource={data} editSettings={editSettings} toolbar={toolbar}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                <ColumnDirective field='ShipName' headerText='ShipName' width='150' />
            </ColumnsDirective>
            <Inject services={[Edit, Toolbar]} />
        </GridComponent></div>)
};
export default App;