import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Resize } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid: GridComponent | null;
    const alignmentData: Object[] = [
        { text: 'Normal', value: 'Normal' },
        { text: 'Auto', value: 'Auto' },
    ];
    const changeValue = ((args: any) => {
        (grid as GridComponent).resizeSettings.mode = args.value;
    })
    return (
        <div>
            <label style={{ padding: '30px 17px 0 0' }}>Change the resize mode:</label>
            <DropDownListComponent dataSource={alignmentData} index={0} width="100" change={changeValue}></DropDownListComponent>
            <div style={{ padding: '40px 0 0 0' }}>
                <GridComponent dataSource={data} height={315} ref={g => grid = g} allowResizing={true}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
                        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
                        <ColumnDirective field='Freight' headerText='Freight' format='C' width='80' />
                        <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='120' />
                    </ColumnsDirective>
                    <Inject services={[Resize]} />
                </GridComponent></div></div>)
}
export default App;