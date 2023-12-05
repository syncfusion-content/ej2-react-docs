import { ColumnDirective, ColumnMenu, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Group } from '@syncfusion/ej2-react-grids';
import { Filter, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const groupOptions = { showGroupedColumn: true };
    const filterSettings = { type: 'CheckBox' };
    return <div>
        <GridComponent dataSource={data} allowPaging={true} allowGrouping={true} allowSorting={true} showColumnMenu={true} allowFiltering={true} groupSettings={groupOptions} filterSettings={filterSettings}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' isPrimaryKey={true}/>
                <ColumnDirective field='CustomerID' headerText='Customer Name'/>
                <ColumnDirective field='Freight' headerText='Freight' format='C2' textAlign='Right'/>
                <ColumnDirective field='ShipName' headerText='Ship Name' width='200'/>
            </ColumnsDirective>
            <Inject services={[Sort, ColumnMenu, Filter, Page, Group, Edit]}/>
        </GridComponent>
    </div>;
}
;
export default App;
