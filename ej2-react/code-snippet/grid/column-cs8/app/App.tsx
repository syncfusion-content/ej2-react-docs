

import { ColumnDirective, ColumnMenu, ColumnsDirective, GridComponent, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import { Edit, ExcelExport } from '@syncfusion/ej2-react-grids';
import { Filter, FilterSettingsModel, Inject, Page, PdfExport, Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const groupOptions: GroupSettingsModel = { showGroupedColumn: true };
    const filterSettings: FilterSettingsModel = { type: 'CheckBox' };
    const columnMenuOpen = () => {
        alert('columnMenuOpen event is Triggered');
    }
    const columnMenuClick = () => {
        alert('columnMenuClick event is Triggered');
    }
    return (
        <div>
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
                <Inject services={[Sort, ColumnMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
            </GridComponent>
        </div>
    );
};
export default App;


