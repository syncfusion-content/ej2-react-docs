import { ColumnDirective, ColumnsDirective, Edit, GridComponent, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const [message, setMessage] = useState('');
    function toolbarClick(args) {
        if (args.item.text === 'Add') { 
            args.cancel = true;
            const newRecord = {
                OrderID: 10247,
                CustomerID: 'TOMSP',
                ShipName: 'Hanari Carnes',
                ShipCity: 'Lyon',
            };
            grid.addRecord(newRecord);
            setMessage('The default adding action is cancelled, and a new record is added using the addRecord method.');
        }
        else{
            setMessage('');
        }
    }
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    return (
    <div>    
        <div style={{marginLeft:"180px"}}><p style={{color:"red"}} id="message">{message}</p></div>
        <GridComponent ref={g=> grid = g} dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} toolbarClick={toolbarClick} height={270}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
                <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
            </ColumnsDirective>
            <Inject services={[Toolbar, Edit]} />
        </GridComponent>
    </div>);
}
export default App;
