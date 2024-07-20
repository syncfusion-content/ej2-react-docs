

import { ColumnDirective, ColumnMenu, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, ExcelExport } from '@syncfusion/ej2-react-grids';
import { Filter, Inject, Page, PdfExport, Sort, Group, Resize } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';
function App() {
    const groupOptions = { showGroupedColumn: true };
    const filterSettings = { type: 'CheckBox' };
    const [message, setMessage] = useState('');
    const columnMenuOpen = () => {
        setMessage('columnMenuOpen event is Triggered');
        console.log(message)
    }
    const columnMenuClick = () => {
        setMessage('columnMenuClick event is Triggered');
    }
    return (
        <div>
            <p id='message'>{message}</p>
            <GridComponent dataSource={data} allowPaging={true} allowGrouping={true} allowSorting={true}
                showColumnMenu={true} allowExcelExport={true} allowPdfExport={true} allowFiltering={true}
                groupSettings={groupOptions} filterSettings={filterSettings}
                columnMenuOpen={columnMenuOpen} columnMenuClick={columnMenuClick}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' />
                    <ColumnDirective field='CustomerID' headerText='Customer Name' />
                    <ColumnDirective field='Freight' headerText='Freight' format='C2' textAlign='Right' />
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='200' />
                </ColumnsDirective>
                <Inject services={[Sort, ColumnMenu, Filter, Page, ExcelExport, Edit, PdfExport, Group, Resize]} />
            </GridComponent>
        </div>
    );
};
export default App;
