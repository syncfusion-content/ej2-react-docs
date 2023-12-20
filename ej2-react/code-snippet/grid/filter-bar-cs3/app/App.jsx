import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, Page } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
    const pageSettings = { pageSize: 5 };
    const [filterSettings, setFilterSettings] = useState();
    const onChange = (args) => {
        setFilterSettings({ showFilterBarOperator: args.checked });
    }
    return (<div>
        <label><b> Show filter bar operator </b></label>
        <SwitchComponent change={onChange}></SwitchComponent>
        <GridComponent dataSource={data} allowFiltering={true} allowPaging={true} pageSettings={pageSettings} filterSettings={filterSettings} height={315}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
                <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format='yMd' textAlign="Right" />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='100' textAlign="Right" />
                <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
            </ColumnsDirective>
            <Inject services={[Filter, Page]} />
        </GridComponent></div>)
};
export default App;