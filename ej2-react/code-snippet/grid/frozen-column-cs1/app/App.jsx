import { ColumnDirective, ColumnsDirective, Freeze, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
    let grid;
    let textBox;
    const frozenColumn = (() => {
        grid.frozenColumns = textBox.value;
    })
    return (
        <div>
            <label style={{ padding: '30px 17px 0 0' }}>Change the frozen columns:</label>
            <NumericTextBoxComponent id='frozencolums' ref={t => textBox = t} min={0} max={3} validateDecimalOnType={true} decimals={0} format='n' value={2} width={100}></NumericTextBoxComponent>
            <ButtonComponent style={{ marginLeft: '5px' }} onClick={frozenColumn}>UPDATE</ButtonComponent>
            <div style={{ padding: '40px 0 0 0' }}>
                <GridComponent dataSource={data} height={260} ref={g => grid = g} frozenColumns={2}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='150' />
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='180' />
                        <ColumnDirective field='Freight' headerText='Freight' width='120' />
                        <ColumnDirective field='ShipCity' headerText='Ship City' width='200' />
                        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
                        <ColumnDirective field='ShipName' headerText='Ship Name' width='180' />
                        <ColumnDirective field='ShipRegion' headerText='Ship Region' width='220' />
                        <ColumnDirective field='ShipAddress' headerText='Ship Address' width='200' />
                        <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' />
                    </ColumnsDirective>
                    <Inject services={[Freeze]} />
                </GridComponent></div></div>)
}
export default App;