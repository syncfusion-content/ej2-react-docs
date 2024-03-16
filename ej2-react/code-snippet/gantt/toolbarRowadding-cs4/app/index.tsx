import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, EditSettingsModel, Selection, Toolbar, ToolbarItem, AddDialogFieldsDirective, EditDialogFieldsDirective, EditDialogFieldDirective, AddDialogFieldDirective } from '@syncfusion/ej2-react-gantt';
import { data,resourceCollection } from './datasource';
function App(){
    const taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        resourceInfo: 'resources',
        work: 'work',
        child: 'subtasks',
        segments: 'Segments',
        notes:"note",
  };
 const resourceFields = {
    id: 'resourceId',
    name: 'resourceName',
    unit: 'resourceUnit',
    group: 'resourceGroup'
};
  const  editOptions: EditSettingsModel = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };
  const  toolbarOptions: ToolbarItem[] = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
        return <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true}
        editSettings={editOptions} toolbar={toolbarOptions} height = '450px' resourceFields = {resourceFields} resources ={resourceCollection}>
             <AddDialogFieldsDirective>
            <AddDialogFieldDirective type='General' headerText='General' ></AddDialogFieldDirective>
            <AddDialogFieldDirective type='Dependency' additionalParams = {allowPaging: true, allowSorting: true, toolbar: ["Search", "Print",]}></AddDialogFieldDirective>
            <AddDialogFieldDirective type='Resources' additionalParams= { allowSorting: true, allowPaging: true, toolbar: ["Search", "Print"], columns: [{ field: "newData" }]}}></AddDialogFieldDirective>
            <AddDialogFieldDirective type='Segments' additionalParams = {columns:[{field:"segmenttask",width:"170px" ,headerText:"Segment Task"}],}></AddDialogFieldDirective>
        </AddDialogFieldsDirective>
           <EditDialogFieldsDirective>
              <EditDialogFieldDirective type='General' headerText='General' ></EditDialogFieldDirective>
              <EditDialogFieldDirective type='Dependency'  additionalParams = {allowPaging: true, allowSorting: true, toolbar: ["Search", "Print",]}></EditDialogFieldDirective>
              <AddDialogFieldDirective type='Resources' additionalParams= { allowSorting: true, allowPaging: true, toolbar: ["Search", "Print"], columns: [{ field: "newData" }]}}></AddDialogFieldDirective>
              <EditDialogFieldDirective type='Segments' additionalParams = {columns:[{field:"segmenttask",width:"170px" ,headerText:"Segment Task"}],}></EditDialogFieldDirective>
            </EditDialogFieldsDirective>
            <Inject services={[Edit, Selection, Toolbar]} />
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));