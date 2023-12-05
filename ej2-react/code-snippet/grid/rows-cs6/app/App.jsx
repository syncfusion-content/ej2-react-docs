import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, Edit, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { useState } from 'react';
import { data } from './datasource';

let rowIndex;
let hiddenRows = [];
function App() {
    let grid;
    const [message, setMessage] = useState('');
    const onCheckBoxChange = (args) => {
        if (args.checked) {
            for (let i = 0; i < grid.getRowsObject().length; i++) {
                if (grid.getRowsObject()[i].data.CustomerID === 'VINET') {
                    // check the row value
                    rowIndex = grid.getRowsObject()[i].index; //get particular row index
                    grid.getRowByIndex(rowIndex).style.display = 'none'; //hide row
                    hiddenRows.push(rowIndex); // add row index to hiddenRows array
                }
            }
            if (hiddenRows.length > 0) {
                setMessage('Rows with a customer name column value of VINET have been hidden');
            }
        }
        else {
            // Show hidden rows
            hiddenRows.forEach((rowIndex) => {
                grid.getRowByIndex(rowIndex).style.display = '';
            });
            hiddenRows = [];
            setMessage('Show all hidden rows');
        }
    }
    return (<div><CheckBoxComponent label='Show / Hide Row' change={onCheckBoxChange}></CheckBoxComponent>
        <p id='message'>{message}</p>
        <GridComponent dataSource={data} ref={g => grid = g} >
            <ColumnsDirective>
                <ColumnDirective field='OrderID' width='100' textAlign="Right" isPrimaryKey={true} />
                <ColumnDirective field='CustomerID' width='100' />
                <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right" />
                <ColumnDirective field='ShipName' width='100' />
                <ColumnDirective field='ShipCity' width='100' textAlign="Right" />
            </ColumnsDirective>
            <Inject services={[Edit]} />
        </GridComponent></div>)
}
export default App;
