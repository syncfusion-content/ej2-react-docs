import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Toolbar, Edit } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
    const [message, setMessage] = useState('');
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel',
        { text: 'Click', tooltipText: 'Click', prefixIcon: 'e-expand', id: 'Click' }
    ];
    const clickHandler = (args) => {
        if (args.item.id === 'Click') {
            setMessage("Custom Toolbar Clicked");
        }
    }
    return (<div>
        <div style={{ marginLeft: "180px" }}><p style={{ color: 'red' }}>{message}</p></div>
        <GridComponent dataSource={data} toolbar={toolbarOptions}
            toolbarClick={clickHandler} editSettings={editOptions} height={240}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
                <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
            </ColumnsDirective>
            <Inject services={[Toolbar, Edit]} />
        </GridComponent></div>)
}
export default App;