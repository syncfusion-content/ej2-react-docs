import { ColumnDirective, ColumnMenu, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Filter, Inject, Page, Sort, Group } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const filterOptions = { type: 'Menu' };
    const columnMenuOpen = (args) => {
        for (const item of args.items) {
            if (item.text === 'Filter' && args.column.field === 'OrderID') {
                item.hide = true;
            }
        }
    };
    return (<div>
            <GridComponent dataSource={data} allowPaging={true} allowGrouping={true} showColumnMenu={true} allowFiltering={true} allowSorting={true} filterSettings={filterOptions} columnMenuOpen={columnMenuOpen}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right'/>
                    <ColumnDirective field='CustomerID' headerText='Customer Name'/>
                    <ColumnDirective field='Freight' headerText='Freight' format='C2' textAlign='Right'/>
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='200'/>
                </ColumnsDirective>
                <Inject services={[Sort, ColumnMenu, Page, Filter, Group]}/>
            </GridComponent>
        </div>);
}
;
export default App;
