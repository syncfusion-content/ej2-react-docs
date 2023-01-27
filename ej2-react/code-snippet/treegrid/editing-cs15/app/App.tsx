

import { IEditCell } from '@syncfusion/ej2-grids';
import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Edit, EditSettingsModel, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';

function App() {
    const editOptions: EditSettingsModel = {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
        mode: 'Cell',
        showDeleteConfirmDialog: true
    };

    const toolbarOptions: ToolbarItems[] = ['Add', 'Delete', 'Update', 'Cancel'];

    const format: any = {type:'dateTime', format:'M/d/y hh:mm a'};

    const datetimeParams: IEditCell = { params: { format: 'M/d/y hh:mm a' } };
    const numericParams: IEditCell = { params: { format: 'n' } };

    const taskIDRules: object = { required: true, number: true };
    const progressRules: object = { number: true, min: 0 };
    const startDateRules: object = { date: true };
    const priorityRules: object = { required: true };
    const taskNameRules: object = { required: true };

    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='270'
        editSettings={editOptions} toolbar={toolbarOptions}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey={true} validationRules={taskIDRules}/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180' validationRules={taskNameRules}/>
            <ColumnDirective field='startDate' headerText='Start Date' width='150' textAlign='Right' edit={datetimeParams}
            editType='datetimepickeredit' format={format} validationRules={startDateRules} />
            <ColumnDirective field='approved' headerText='Approved' width='110' textAlign='Right' editType='booleanedit' type='boolean' displayAsCheckBox={true} />
            <ColumnDirective field='progress' headerText='Progress' textAlign='Right' width='120' editType='numericedit' edit={numericParams} validationRules={progressRules} />
            <ColumnDirective field='priority' headerText='Priority' width='110' editType='dropdownedit' validationRules={priorityRules} />
        </ColumnsDirective>
        <Inject services={[Edit,Toolbar]}/>
    </TreeGridComponent>
};
export default App;


