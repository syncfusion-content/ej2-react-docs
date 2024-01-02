import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Toolbar, Edit } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

function App() {
    let grid;
    let dropDown;
    const placeholder = 'Select a value'
    const editSettings = { allowAdding: true, allowDeleting: true, allowEditing: true };
    const dropDownData = [{ text: 'Edit' }, { text: 'Delete' }, { text: 'Update' }];
    const toolbarTemplate = () => {
        return (
            <div>
                <label style={{ padding: "10px 10px 26px 0" }}>Change the value:</label>
                <DropDownListComponent ref={d => dropDown = d} width={250} dataSource={dropDownData} change={onChange} placeholder={placeholder}></DropDownListComponent>
            </div>
        )
    }
    const onChange = (args) => {
        const selectedRow = grid.getSelectedRecords()[0];
        if (args.itemData.text === 'Update') {
            grid.endEdit();
        }
        if (args.itemData.text === 'Edit') {
            grid.startEdit();
        }
        if (args.itemData.text === 'Delete') {
            grid.deleteRecord(selectedRow);
        }
        dropDown.placeholder = args.itemData.text;

    }
    return (<GridComponent dataSource={data} editSettings={editSettings} toolbarTemplate={toolbarTemplate} ref={g => grid = g} height={240}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
            <ColumnDirective field='ShipName' headerText='ShipName' width='100' />
        </ColumnsDirective>
        <Inject services={[Toolbar, Edit]} />
    </GridComponent>)
}
export default App;