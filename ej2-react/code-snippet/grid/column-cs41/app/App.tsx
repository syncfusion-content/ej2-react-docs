import { ColumnDirective, ColumnsDirective, GridComponent, Column } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
    let grid: GridComponent | null;
    let dropDown: DropDownListComponent | null;
    let textBox: TextBoxComponent | null;
    const field: Object = { text: 'text', value: 'value' };
    const alignmentData: Object[] = [
        { text: 'OrderID', value: 'OrderID' },
        { text: 'CustomerID', value: 'CustomerID' },
        { text: 'Freight', value: 'Freight' },
        { text: 'OrderDate', value: 'OrderDate' },
    ];

    const changeHeaderText = (() => {
        if (textBox.element.value.trim() !== '') {
            const column: Column = (grid as GridComponent).getColumnByField((dropDown as DropDownListComponent).value);
            column.headerText = textBox.element.value;
            (grid as GridComponent).refreshHeader();
        }
    })
    return (
        <div>
            <label style={{ padding: '10px 10px 10px 0' }}>Select column name  :</label>
            <DropDownListComponent dataSource={alignmentData} ref={d => dropDown = d} index={0} width="100" fields={field}></DropDownListComponent><br/>
            <label style={{ padding: '10px 17px 0 0' }}>Enter new header text :</label>
            <TextBoxComponent ref={t => textBox = t} placeholder="Enter new header text" width='200' />
            <label style={{ padding: '10px 17px 0 0' }}>Click the change button :</label>
            <ButtonComponent id="button" cssClass="e-outline" onClick={changeHeaderText}>Change</ButtonComponent>
            <div style={{ padding: '20px 0 0 0' }}>
                <GridComponent dataSource={data} height={250} ref={g => grid = g}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
                        <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
                        <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='120' />
                    </ColumnsDirective>
                </GridComponent></div></div>)
}
export default App;