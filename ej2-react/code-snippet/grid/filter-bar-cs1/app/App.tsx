import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, FilterEventArgs, FilterSettingsModel, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
    const pageSettings: PageSettingsModel = { pageSize: 5 };
    const [filterSettings, setFilterSettings] = useState<FilterSettingsModel>();
    const filterModesData: string[] = ['Immediate', 'OnEnter'];
    const onModeChange = (args: FilterEventArgs) => {
        setFilterSettings({ mode: args.value });
    }
    return (<div>
        <label><b>Select Filter Mode:</b> </label>
        <DropDownListComponent dataSource={filterModesData} width={200} change={onModeChange}></DropDownListComponent>
        <GridComponent dataSource={data} allowFiltering={true} allowPaging={true} pageSettings={pageSettings} filterSettings={filterSettings} height={200}>
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