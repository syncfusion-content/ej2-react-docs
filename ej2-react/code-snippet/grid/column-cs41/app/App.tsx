import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
    let grid: Grid | null;
    let dropDown: DropDownListComponent | null;
    let textBox: any;
    const field: Object = { text: 'text', value: 'value' };
    const alignmentData: any = [
        { text: 'OrderID', value: 'OrderID' },
        { text: 'CustomerID', value: 'CustomerID' },
        { text: 'Freight', value: 'Freight' },
        { text: 'ShipCountry', value: 'ShipCountry' },
    ];

    const changeHeaderText = ((args: any) => {
        if (textBox.element.value.trim() !== '') {
            const column: any = (grid as any).getColumnByField((dropDown as any).value);
            column.headerText = textBox.element.value;
            (grid as any).refreshHeader();
        }
    })
    return (
        <div>
            <label style={{ padding: '10px 10px 26px 0' }}>Select column name  :</label>
            <DropDownListComponent style={{ padding: "20px 0 0 0" }} dataSource={alignmentData} ref={d => dropDown = d} index={0} width="100" fields={field}></DropDownListComponent><br/>
            <label style={{ padding: '30px 17px 0 0' }}>Enter new header text :</label>
            <TextBoxComponent ref={t => textBox = t} placeholder="Enter new header text" width='200' />
            <label style={{ padding: '30px 17px 0 0' }}>Click the change button :</label>
            <ButtonComponent id="button" cssClass="e-outline" onClick={changeHeaderText}>Change</ButtonComponent>
            <div style={{ padding: '40px 0 0 0' }}>
                <GridComponent dataSource={data} height={315} ref={g => grid = g}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
                        <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
                        <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='120' />
                    </ColumnsDirective>
                </GridComponent></div></div>)
}
export default App;