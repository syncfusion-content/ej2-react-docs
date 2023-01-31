

import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent, Edit, Toolbar } from '@syncfusion/ej2-react-treegrid';
import { Page, SelectionSettingsModel, PageSettingsModel, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';

function App() {
    const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
    const settings: SelectionSettingsModel = { cellSelectionMode: 'Box', type: 'Multiple', mode: 'Cell'};
    const toolbarOptions: ToolbarItems[] = ['Add', 'Update', 'Cancel'];
    const pageSettings: PageSettingsModel = { pageSize: 10 };

    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' allowPaging={true} enableAutoFill={true} pageSettings={pageSettings} selectionSettings={settings} editSettings = {editOptions} toolbar={toolbarOptions}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey={true}/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar]}/>
    </TreeGridComponent>
};
export default App;


