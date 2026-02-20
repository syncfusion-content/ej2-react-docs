import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
    let grid;
    let dropDown;
    let textBox;
    const field = { text: 'text', value: 'value' };
    const alignmentData = [
        { text: 'OrderID', value: 'OrderID' },
        { text: 'CustomerID', value: 'CustomerID' },
        { text: 'Freight', value: 'Freight' },
        { text: 'ShipCountry', value: 'ShipCountry' },
    ];

    const onExternalResize = (() => {
        const colsWidth = grid.getColumnByField(dropDown.value);
        colsWidth.width = textBox.value;
        grid.refreshColumns();
    })
    return (
        <div>
            <label style={{ padding: '10px 10px 0 0' }}>Change the resize mode:</label>
            <DropDownListComponent style={{ padding: "0 0 0 0" }} dataSource={alignmentData} ref={d => dropDown = d} index={0} width="100" fields={field}></DropDownListComponent><br />
            <label style={{ padding: '10px 17px 0 0' }}>Enter the width:</label>
            <TextBoxComponent ref={t => textBox = t} placeholder="Enter the width" width='200' />
            <label style={{ padding: '10px 17px 0 0' }}>Click the change button :</label>
            <ButtonComponent id="button" cssClass="e-outline" onClick={onExternalResize}>Resize</ButtonComponent>
            <div style={{ padding: '20px 0 0 0' }}>
                <GridComponent dataSource={data} height={200} ref={g => grid = g} allowResizing={true}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
                        <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
                        <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='120' />
                    </ColumnsDirective>
                </GridComponent></div></div>)
}
export default App;