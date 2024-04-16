import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, PageSettingsModel, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid: GridComponent | null;
    let count: number = 0;
    const pageSettings: PageSettingsModel = { pageSize: 5, pageCount: 3 };
    const newColumn = [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 125 },
        { field: 'CustomerID', headerText: 'Customer Name', width: 125 },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd' },
        { field: 'Freight', headerText: 'Freight', width: 120, format:'C2' },
    ];
    const onClick = () => {
        count = count + 100;
        (grid as GridComponent).changeDataSource(data.slice(0, count + 100), newColumn as Object[]);
    }
    return <div>
        <ButtonComponent onClick={onClick}>Click Button</ButtonComponent>
        <GridComponent dataSource={data} height={315} ref={g => grid = g} allowPaging={true} pageSettings={pageSettings}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' />
            </ColumnsDirective>
            <Inject services={[Page]} />
        </GridComponent>
    </div>
};
export default App;