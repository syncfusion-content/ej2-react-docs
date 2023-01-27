

import { ColumnDirective, ColumnsDirective, PageSettingsModel, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Filter, Inject, Page, Sort } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sortData } from './data';

function App() {
    const pageOptions: PageSettingsModel = { pageSize: 2 };
    return <TreeGridComponent dataSource={sortData} treeColumnIndex={1} childMapping= 'subtasks'
        allowPaging={true}>
        <ColumnsDirective>
            <ColumnDirective field='Category' headerText='Category' width='150'/>
            <ColumnDirective field='orderName' headerText='Order Name' width='170'/>
            <ColumnDirective field='orderDate' headerText='Order Date' width='130' format='yMd' textAlign='Right' type='date' />
            <ColumnDirective field='price' headerText='Price' width='100' textAlign='Right' type='number' format='C0' />
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter]}/>
    </TreeGridComponent>
};
export default App;


