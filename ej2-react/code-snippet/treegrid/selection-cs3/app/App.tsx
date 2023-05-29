

import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Page, SelectionSettingsModel } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';

import { sampleData } from './datasource';

function App() {
    const settings: SelectionSettingsModel = { checkboxMode: 'ResetOnRowClick'};
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={2} childMapping='subtasks' allowPaging={true} selectionSettings={settings}>
        <ColumnsDirective>
            <ColumnDirective type='checkbox' width='50'/>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Page]}/>
    </TreeGridComponent>
};
export default App;


